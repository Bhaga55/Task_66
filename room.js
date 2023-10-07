const express =require("express");
const RoomRouter = express.Router();

RoomRouter.get("/",(request , response ,next) =>{
   console.log("Room Get Response Hits");
   response.status(200).json({


      roomid:1,
      name:"normal room",
      seatingcapacity :70,
      price:20000,
      amenities:"Fans,Bright Lights",

      roomid:2,
      name:"AC room",
      seatingcapacity:90,
      price:35000,
      amenities:"Projecter,Bright Light,AC conditioner",

      roomid:3,
      name:"Premium room",
      seatingcapacity:120,
      price:45000,
      amenities:"luxurious king size bed,better views,better dining",


   
   });



});

module.exports =RoomRouter;