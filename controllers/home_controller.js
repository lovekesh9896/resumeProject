const sendMail = require('./mailer/message_mailer');
module.exports.home = function(req, res){
    var headerLists = ["about","skills","education","courses","projects","contact"];
    return res.render("home", {
        title : "hi babay",
        userName : "Lovekesh",
        headerLists : headerLists,
    });
    
}

module.exports.sendMessage = function(req,res){
    sendMail.newMessage(req.body);
    return res.redirect('back');
}