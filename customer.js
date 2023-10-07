const express =require("express");
const CustomerRouter = express.Router();

CustomerRouter.get("/",(request , response ,next) =>{
   console.log("Food Get Response Hits");
   response.status(200).json({


    customerid:1,
    customerName:"Dinesh",
    customercity:"Chennai",
    customerphonenumber:9876589855,
    customeremailid:"dinesh@gmail.com",

    customerid:2,
    customerName:"Rajesh",
    customercity:"Tiruppur",
    customerphonenumber:9876589855,
    customeremailid:"rajesh@gmail.com",

    customerid:3,
    customerName:"Kajinesh",
    customercity:"Mumbai",
    customerphonenumber:9876589877,
    customeremailid:"kajinesh@gmail.com",

    customerid:4,
    customerName:"Harish",
    customercity:"Erode",
    customerphonenumber:9876589897,
    customeremailid:"harish@gmail.com",

    





   });

});

module.exports =CustomerRouter;