const sendMail = require('./mailer/message_mailer');

module.exports.home = function(req, res){
    console.log(__dirname);
    return res.sendFile('/views/home.html', {root : './'});
}

module.exports.sendMessage = function(req,res){
    sendMail.newMessage(req.body);
    return res.redirect('back');
}