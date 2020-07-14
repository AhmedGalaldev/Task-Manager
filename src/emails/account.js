const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "ahmedgalalagh152@gmail.com",
      subject: "Welcome to Task Manager",
      text: `Wecome to Task Manager ${name}`,
    })
    .then(() => {
      console.log("email send");
    })
    .catch((e) => {
      console.log(e.message);
    });
};

const sendCancelEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "ahmedgalalagh152@gmail.com",
      subject: "You removed your acount",
      text: `Thank you for your time ${name}`,
    })
    .then(() => {
      console.log("email send");
    })
    .catch((e) => {
      console.log(e.message);
    });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
