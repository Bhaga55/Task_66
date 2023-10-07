const express =require("express");
const BookingRouter = express.Router();

BookingRouter.get("/",(request , response ,next) =>{
   console.log("Food Get Response Hits");
   response.status(200).json({

     bookingid:10,
      hallid:1,
      hallname:"AC Hall",  
      bookingStartingDate:12/10/2023,
      bookingStartingTime:"06.00AM",
      bookingEndingDate:14/10/2023,
      bookingEndingTime:"07.00PM",
      customerName:"Dinesh",
      status:"confirmed",
      booked :"2 times",




      bookingid:11,   
      roomid:1,
      roomname:"Normal Room ",
      bookingStartingDate:15/10/2023,
      bookingStartingTime:"07.00AM",
      bookingEndingDate:17/10/2023,
      bookingEndingTime:"07.00PM",
      customerName:"Rajesh",
      status:"confirmed",
      booked:"1 time",
      
      bookingid:12,
      roomid:2,
      roomname:"AC Room ",
      bookingStartingDate:18/10/2023,
      bookingStartingTime:"07.30AM",
      bookingEndingDate:20/10/2023,
      bookingEndingTime:"07.30PM",
      customerName:"Kajinesh",
      status:"confirmed",
      booked:"3 times",


      bookingid:13,
      roomid:3,
      roomname:"Premium Room ",
      bookingStartingDate:20/10/2023,
      bookingStartingTime:"08.00AM",
      bookingEndingDate:21/10/2023,
      bookingEndingTime:"08.30PM",
      customerName:"Harish",
      status:"confirmed",
      booked:"2 times",




      

    });

});

module.exports =BookingRouter;