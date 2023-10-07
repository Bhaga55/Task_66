const express =require  ("express");
const API_SERVER = require("./app");
const BODY_PARSER = require('body-parser');
;
const EJS_ENGINE = require('ejs');


 
const HTTP_SERVER = express();
const PORT = 5000;
const HOST="0.0.0.0";

HTTP_SERVER.use(BODY_PARSER.json());
 
HTTP_SERVER.use(BODY_PARSER.urlencoded({ extended: true }));

HTTP_SERVER.set("view engine","ejs");




/localhost:5000/
HTTP_SERVER.use("/api",API_SERVER);


HTTP_SERVER.listen(PORT, HOST, () =>{
    console.log(`Node API Server Stated at  ${PORT}`);
});


