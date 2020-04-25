const express = require ('express');
const bcryptjs = require ('bcryptjs');
const router = express.Router();
const Post = require('../models/users');

//Get all posts
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err){
        res.json({ message: err });
    }
});

//Get a Specific Post
router.get('/:postId', async (req,res) => {
    //console.log(req.params.postId);
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch(err){
        res.json({ message: err });
    }
})

//Delete a Post
router.delete('/:postId', async (req,res) => {
    try{
        const removedPost = await Post.remove({ _id : req.params.postId });
        res.json(removedPost);
    }
    catch(err){
        res.json({ message: err });
    }
})

//Update a Post
router.patch('/:postId', async (req,res) => {
    try{
        const updatedPost = await Post.updateOne(
            { _id : req.params.postId }, 
            {$set: {title: req.body.title}}
         );
        res.json(updatedPost);
    }
    catch(err){
        res.json({ message: err });
    }
})

//Submit a Post
//if using promise instead of async await, then just remove async from the line below
router.post('/', async (req,res) => {
    //console.log(req.body);
    var salt = bcryptjs.genSaltSync(10);
    var hash = bcryptjs.hashSync(req.body.password, salt);
    const post = new Post({
        fname: req.body.fname,
        email: req.body.email,
        //password: req.body.password
        password: hash
    });

    //post.save()
    //    .then(data => {
    //        res.json(data);
    //    })
    //    .catch(err => {
    //        res.json({ message: err });
    //    })

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }
    catch(err){
        res.json({ message: err });
    }
});

module.exports = router;