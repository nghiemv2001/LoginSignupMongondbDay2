const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const jwt = require('jsonwebtoken');

require('dotenv').config();

router.post('/signup', (req, res) => {
    console.log('sent by client - ', req.body);
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        return res.status(422).send({ error: "please add all the dields" });
    }

    User.findOne({email: email})
    .then(async(savedUser)=>{
            if(savedUser){
                return res.status(422).send({error :"Invalid Credential"});
            }
            const user = new User({
                name,
                email,
                password
            })

            try{
                await user.save();
                const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET);
                res.send({token});
            }
            catch(err){
                console.log('db err', err);
                //Xem lai res.status nay!!!
                return res.status(422).send({error: err.message});
            }
        }
    )   

})

module.exports = router;