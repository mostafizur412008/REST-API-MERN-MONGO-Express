
const User =require('../models/user.model')
const { v4: uuidv4 } = require('uuid');



const getAllusers=async(req,res)=>{
   try {
    const users = await User.find();
   res.status(200).json(users);
   } catch (error) {
    res.status(500).send(error.message);
   }
    };
    
    const getOneusers = async (req, res) => {
      try {
        const users = await User.findOne({ id: req.params.id });
        res.status(200).json(users);
      } catch (error) {
        res.status(500).send(error.message);
      }
    };
    

     //মংগো ডিবি স্কিমা অনুসারে ডাটাবেজের টোবল তৈরী করতে বলা হয়েছে
    const Createusers = async (req, res) => {    
        try {
          const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age), //ডিফল্ট হিসোবে স্ট্রিং আসে এজন্য নাম্বার ফাংশন দ্বারা কনভার্টট করা হয়েছে
          });
      
          await newUser.save(); //ডাটা ডাটাবেজে সেভ await ব্যবহার করা হয়েছে এবং নিউ ইউজার কে সেভ করা হয়েছে
          res.status(200).json(newUser);
        } catch (error) {
          res.status(500).send(error.message);
        }
      };
        

      const Updateusers = async (req, res) => {
        try {
          const user = await User.findOne({ id: req.params.id });
      
          if (!user) {
            return res.status(404).json({ error: "User not found." });
          }
      
          // Update the user's properties
          user.name = req.body.name;
          user.age = Number(req.body.age);
          await user.save();
      
          res.status(200).json(user);
        } catch (error) {
          res.status(500).send(error.message);
        }
      };
      
    
    const Deleteusers = async (req, res) => {
        try {
          const users = await User.deleteOne({ id: req.params.id });
          res.status(200).json({ message: "User is deleted" });
        } catch (error) {
          res.status(500).send(error.message);
        }
      };
      


    module.exports= {getAllusers, getOneusers, Createusers,Deleteusers,Updateusers};