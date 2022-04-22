const express = require('express');
const app = express()
const connectdb = require('./config/connectdb');
const User = require('./models/User')
const route = express.Router()




connectdb()

route.post('/newuser',async (req, res)=> {
    const client = req.body
    try {
        const user = await new User(client)
        await contact.save()
        res.status(200).send({"User added successfully" : user})
    } catch (error) {
        console.log(error)
    }
});

route.get('/getuser', async (req, res) =>{
    try {
        const user = await User.find()
        res.status(200).send({"got users" : user})
    } catch (error) {
        console.log(error)
    }
});

route.put('/edituser/:id', async (req, res)=> {
    const {id} = req.params;
    const {Name,LastName ,Email,age} = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, {$set : {Name,LastName ,Email,age}});
        res.status(200).send({"user edited" : user});
    } catch (error) {
        console.log(error);
    }
});


route.delete('/deleteuser/:id',async (req, res)=>{
    const {id} = req.params
    try {
        const contact = await User.findByIdAndDelete(id)
        res.status(200).send("Deleted user")
    } catch (error) {
        console.log(error)
    }
});




port = 8000
app.listen(port, (err)=>{console.log(`app running on port ${port}`)})