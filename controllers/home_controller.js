const sendMail = require('./mailer/message_mailer');

module.exports.home = function(req, res){
    return res.sendFile('/views/home.html', {root : './'});
}

module.exports.sendMessage = function(req,res){
    sendMail.newMessage(req.body);
    return res.redirect('back');
}