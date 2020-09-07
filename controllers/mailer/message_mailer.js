const nodeMailer = require('../../config/nodemailer');

exports.newMessage = (sender)=>{
    console.log(sender);

    let htmlString = nodeMailer.renderTemplate({sender : sender}, '/sendMail.ejs');
    nodeMailer.transporter.sendMail({
        from : "kumarehlan@gmail.com",
        to : "dhandalovekesh@gmail.com",
        subject : "Message from resume website",
        html : htmlString,

    }, (err, info) =>{
        if(err){console.log("Erro in sending mail", err);return;}
        console.log("mail sent", info);
        return;
    });
}

