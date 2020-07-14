const sgMail = require("@sendgrid/mail");
const myKey =
  "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";
sgMail.setApiKey(myKey);

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
