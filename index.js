const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const fs = require('fs');


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended : false}));

app.use('/', require('./routes')); // telling app to use routes

app.use(express.static(__dirname + "/assets"));


app.listen(port, function(err){
    if(err){
        console.log("Error in starting the server",err);
        return;
    }
    console.log("App is started on port ",port);
});
