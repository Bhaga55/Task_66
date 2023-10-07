const express =require("express");
const HallRouter = express.Router();

HallRouter.get("/",(request , response ,next) =>{
   console.log("Food Get Response Hits");
   response.status(200).json({

      hallid:1,
      hallname:"AC Hall",
      Seatingcapacity:90,
      Amenities:"expert lightning,roomy dance floor,top notch music system ",
      price:30000,
   
   });

});

module.exports =HallRouter;