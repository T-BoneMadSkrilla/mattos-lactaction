require('dotenv').config()

const express = require('express');
const {json} = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const app = express();
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const path = require('path')


const port = 3050;

app.use( express.static( `${__dirname}/../build/` ) );
app.use(require("body-parser").text());

app.use(json());
app.use(cors());

app.use( session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
}));

app.use( passport.initialize() );
app.use( passport.session() );

passport.use( new Auth0Strategy({
  domain:       process.env.DOMAIN,
  clientID:     process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL:  '/login',
  scope: "openid email profile"
 },
 function(_, __, ___, profile, done) {
  //  let userData = profile._json
   return done(null, profile);
 }
) );

passport.serializeUser( (user, done) => {
    const db = app.get('db');
console.log(`play o' play`,user)
// console.log(user.name.givenName)
    db.get_auth(user.id).then( response =>{
      if(!response[0]){
        db.add_auth(user.emails[0].value, user.id, user.picture, user.name.givenName).then(
          res=> done(null, res[0])
          .catch( err => {done(err,null)})
        )
      } else {
        return done(null, response[0])
      }}
    ).catch(err=> done(err,null))
  });

passport.deserializeUser( (obj, done) => {
        done( null, obj );
      });
      const {getUser} = require('./controller');
      
      massive(process.env.CONNECTION_STRING).then(dbInstance => {
              app.set('db', dbInstance)
        }).catch(err => console.log(err))
        
        app.get( '/login',
        passport.authenticate('auth0',
          { successRedirect: process.env.FRONT_END + '/profile', failureRedirect: '/'}
        )
      );

      // app.get('/api/getuser/', ( req, res, next) => { //just a test
      //   console.log(req.user)
      //   if ( !req.user ) {
      //     res.redirect('/');
      //   } else {
      //     res.status(200).send( JSON.stringify( req.user, null, 10 ) );
      //   }
      // });

      //endpoints
      app.get('/api/user', getUser)



app.get('*', (req, res)=>{
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});


app.listen(port, ()=> console.log(`listening to ${port}`));