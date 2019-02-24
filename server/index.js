require('dotenv').config()

const express = require('express');
const {json} = require('body-parser');
// const massive = require('massive');
const cors = require('cors');
const app = express();


app.use(require("body-parser").text());

app.use(json());
app.use(cors());

// massive( process.env.CONNECTION_STRING).then( dbInstance =>{
    //     app.set('db', dbInstance);
    
    // }).catch(err => console.log(err));
    
    //endpoints
    
    // const port =  3050;
    const port = 3050;
app.listen( port, () => { console.log(`Server listening on port${port}.`);});