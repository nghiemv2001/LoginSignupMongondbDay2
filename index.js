const express = require('express');
const port = 3000;

const app = express();
const bodyParser = require('body-parser');

require('./db');
require('./models/User');

const authRoute = require('./routes/authRoute');

app.use(bodyParser.json());
app.use(authRoute);

app.get('/', (req, res) =>{
    res.send('This is my home');
});


// app.post('/sigin', (req, res) =>{
//     res.send('This is signup');
// });

// app.get('/signup', (req, res) =>{
//     res.send    ('This is signup page');
// });

app.listen(port ,()=>{
    console.log(`Server is running on port  ${port}`);
})