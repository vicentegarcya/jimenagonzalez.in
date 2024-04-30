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
    subject: `Quiero trabajar contigo`,
    text: req.body.idea + " | Sent from: " + req.body.email,
    html: `<div><p>Hola, soy ${req.body.name} de ${req.body.company}.</p><p>Mi idea es: ${req.body.idea}</p><p>Temas: ${req.body.service}</p><p>Email de contacto:
    ${req.body.email}</p><p>Teléfono de contacto:
    ${req.body.phone}</p></div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
  res.send();
}
