const express = require('express');
const cors = require ('cors')
const Port=3005
const app=express()
const db = require('./database/index')
const { getAllUsers, addOneUser, getOneUser } = require("./database/model/user")
const { getAllPost, addOnePost, deletePost, updatePost } = require("./database/model/post")
app.use(express.json());
app.use (cors());

app.get('/api/users',(req,res)=>{
   getAllUsers((error,result)=>{
    if (error){
        res.status(500).send(error)
    }
    else {
        res.status(200).json(result)
    }
   })
})
app.get('/api/post',(req,res)=>{
    getAllPost((error,result)=>{
     if (error){
         res.status(500).send(error)
     }
     else {
         res.status(200).json(result)
     }
    })
 })
app.post('/api/users',(req,res)=>{
    console.log(req.body);
    addOneUser((error,result)=>{
        if (error){
            res.status(500).send(error)
        }
        else {
            res.status(201).json(result)
        }
    },req.body)
})
app.post('/api/post',(req,res)=>{
    addOnePost(req.body,(error,result)=>{
        if(error) res.status(404).send(error)
        return res.status(201).send(result)
        
    })
})
app.get('/api/users/:email/:password',(req,res)=>{
    console.log("my params",req.params.email , req.params.password);
    getOneUser((error,result)=>{
        if (error){
            res.status(500).send(error)
        }
        else {
            res.status(202).json(result)
        }
    },{email:req.params.email ,password:req.params.password})
})
app.put('/api/post/:idposts', (req, res) => {
    const postId = req.params.idposts
    console.log('Request Data:', req.body)
    const updatedData = req.body
  
    updatePost((error, result) => {
      if (error) {
        console.error('Error updating post:', error);
        res.status(500).json( error )
      } else {
        res.json({ message: 'Post updated successfully' })
      }
    }, postId, updatedData)
  });

app.delete("/api/post/:idposts",(req,res)=>{
    deletePost((error,result)=>{
        if(error){
            res.status(500).send(error)
        }
        else{
            res.status(202).json(result)
        }
    },req.params.idposts) 
})



app.listen(Port,()=>{
    console.log("server connected");
})