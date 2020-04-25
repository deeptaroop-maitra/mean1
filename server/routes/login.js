const express = require ('express');
const bcryptjs = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const router = express.Router();
const Post = require('../models/users');


router.post('/', async (req,res) => {
    //console.log(req.body);
    let fetchedUser;
    try{
        await Post.find({email : req.body.email})
            .then(user => {
                if(!user) {
                    return res.status(401).json({
                        message: 'Auth Failed'
                    })
                }
                fetchedUser = user[0];
                return bcryptjs.compareSync(req.body.password, user[0].password);
            })
            .then(result => {
                if(!result) {
                    return res.status(401).json({
                        message: 'Auth Failed'
                    })
                }
                const token = jwt.sign(
                    {email: fetchedUser.email, usetId: fetchedUser._id}, 
                    "secret_this_should_be_longer", 
                    {expiresIn: '1h'});

                res.status(200).json({
                    token: token
                });
            })
            .catch(err => {
                return res.status(401).json({
                    message: err
                })
            })
    }
    catch(err){
        res.json({ message: err });
    }

});

module.exports = router;