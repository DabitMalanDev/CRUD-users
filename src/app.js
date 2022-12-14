const express = require('express');

const userRouter = require('./users/users.router')

const app = express();

app.use(express.json())

app.get("/", (req, res)=>{
    res.status(200).json({message: 'OK!'})
})

app.use("/", userRouter)

const port = 8000;

app.listen(port, ()=>{
    console.log('Server started at port 8000');
})