const ejs = require('ejs');
const nodeMailer = require('nodemailer');
const path = require('path');

const cred = {
    smtp : {
        service : "gmail",
        host : "smtp.gmail.com",
        port : 587,
        secure : false,
        auth : {
            user : process.env.RESUME_GOOGLE_ID,
            pass : process.env.RESUME_GOOGLE_PASSWORD,
        }
    } 
}
let transporter = nodeMailer.createTransport(cred.smtp);
let renderTemplate = (data, relativePath) => {
    let mailHtml;
    ejs.renderFile(
        path.join(__dirname, '../views/mailer', relativePath),
        data,
        function(err,template){
            if(err){
                console.log("Error in rendering template ",err);
                return;
            }
            mailHTML = template;

        }
    )
    return mailHTML;
}

module.exports = {
    transporter : transporter,
    renderTemplate : renderTemplate
}