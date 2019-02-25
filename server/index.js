require('dotenv').config()

const express = require('express');
const bodyParser= require('body-parser')
// const massive = require('massive');
const cors = require('cors');
const app = express();

const MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID;


app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

// app.use(json());
app.use(cors());

// massive( process.env.CONNECTION_STRING).then( dbInstance =>{
    //     app.set('db', dbInstance);
    
    // }).catch(err => console.log(err));
    
    //endpoints
    
    // const port =  3050;

    MongoClient.connect(process.env.CONNECTION_STRING, (err, db) => {
        var dbase = db.db("crud");
        if (err) return console.log(err)
        app.listen(3000, () => {
          console.log('app working on 3000')
        })
      })

      app.get('/users', (req, res) => {
        dbase.collection('users').find().toArray( (err, results) => {
          res.send(results)
        });
    });

      app.post('/users/add', (req, res) => {
    
        var users = {
          name: req.body.name,
          age: req.body.age,
          email_address: req.body.email_address,
          user_id: req.body.user_id ++, 
          pic: req.body.pic,
          user_type: req.body.user_type,
          date: req.body.date,
          location: req.body.location
        };
    
        dbase.collection("users").save(users, (err, result) => {
          if(err) {
            console.log(err);
          }
    
          res.send('user added successfully');
        });
      });


const port = 3050;
app.listen( port, () => { console.log(`Server listening on port${port}.`);});