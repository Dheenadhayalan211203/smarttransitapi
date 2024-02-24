const mongoose=require('mongoose');
const rout1=new mongoose.Schema({
    route:{
        type:Number,
        required:true
    },
    stop:{
        type:Number,
        required:true
    },
    ticketCount:{
        type:Number,
        required:true

    },
    qrcodeurl :{
        type:String
    }
    
    
    


})

const rout2=new mongoose.Schema({
    routno:{
        type:Number
    },
    count:{
        type:Number
    }
    
    
    


})



const  Rout1 =  mongoose.model( "rout1",rout1);
const  Rout2 =  mongoose.model( "rout2",rout2);


module.exports={Rout1,Rout2} ;
