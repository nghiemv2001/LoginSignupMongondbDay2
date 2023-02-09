const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.mongo_URL).then(

    ()=>{
        console.log('conected to database');
    }
).catch((err)=>{
    console.log('Failse ' +  err);
})