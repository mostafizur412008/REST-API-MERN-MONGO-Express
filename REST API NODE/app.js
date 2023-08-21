const express = require('express');
const app=express();
const cors = require('cors');
const UserRouter = require('./ROUTES/user.route')
require('./config/db');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use('/api/user', UserRouter);


//rout error
app.use((req,res,next)=>{
res.status(404).json({message:"Route not found"});
}
);
//server error
app.use((err, req, res, next)=>{
res.status(500).json({message:"something is broken"});
}
);

module.exports=app;
