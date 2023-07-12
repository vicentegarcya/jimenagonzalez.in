require("dotenv").config();

export default function sendEmail(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "vnodemailer@gmail.com",
      pass: process.env.PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "vnodemailer@gmail.com",
    to: "jimenagonzalez.in@gmail.com",
    subject: `Hazme una propuesta`,
    text: req.body.idea + " | Sent from: " + req.body.email,
    html: `<div><p>Mi idea: ${req.body.idea}</p><p>Temas: ${req.body.temas}</p><p>Formato: ${req.body.formato}</p><p>Email de contacto:
    ${req.body.email}</p></div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
  res.send();
}
