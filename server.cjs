const express=require('express');
const  app = express();
const bodyparser=require('body-parser')
const Qrcode=require('qrcode')
const mongoose=require('mongoose')
/* const cors=require('cors') */
const {Rout1,Rout2}=require('./schema.cjs')
app.use(bodyparser.json())
/* app.use(cors()) */
const port =process.env.PORT||8000
 async function connectToDb()
 {
    try{
   await mongoose.connect('mongodb+srv://Dheena:dheena123@cluster0.ser6ewc.mongodb.net/Smart_Transit?retryWrites=true&w=majority')

   app.listen(port,function ()
   {console.log(`server is running on ${port}`)})
    }catch(error){
        console.log(error)
        console.log('Error in connecting to the database')
    }
   
 }
 connectToDb()

 app.post('/addcount-rout1',async function(req,res){

   try{
    await Rout1.create ({'routno': 1 ,
    "count": req.body.count 
       
    
    })
    var reqno=Math.floor(Math.random() * 50);

    const url="https://smarttransitapi.onrender.com"+"/deletereq"+reqno
    Qrcode.toDataURL(url,(err,qrcodeurl)=>{
      if(err){
        res.status(500).send("Internal Server error")
      }
      else {
        Rout1.create({'routno': 1,
        "count": req.body.count,
        "qrcodeurl": qrcodeurl }
        
          
        )
      }
    })
    
         res.status(201).json({"status":"success","message":"Count added"})
   }

   catch (error){

     res.status(500).json({"status":"failure","message":"Internal server error"})
   }

 })






