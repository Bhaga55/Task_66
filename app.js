const express = require("express");
const RoomRouter = require("./router/room");
const HallRouter =require("./router/hall");
const CustomerRouter =require("./router/customer");
const BookingRouter =require("./router/booking");

const APP_SERVER =express();


APP_SERVER.use("/room",RoomRouter);
APP_SERVER.use("/hall",HallRouter);
APP_SERVER.use("/customer",CustomerRouter);
APP_SERVER.use("/booking",BookingRouter);

APP_SERVER.get("/",(req, res ,next) => {
    return res.status(200).json({
        message:"Server started successfully!!",
    });
});


module.exports = APP_SERVER;

