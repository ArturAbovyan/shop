const nodemailer = require("nodemailer");
const config = require("config")

const Email = (options) => {
    let transpoter = nodemailer.createTransport({
        host: config.get("HOST"),
        service: config.get("SERVICE"),
        port: config.get("EMAIL_PORT"),
        secure: config.get("SECURE"),
        auth: {
            user: config.get("USER"), // email
            pass: config.get("PASS"), //password
        },
    });
    transpoter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
            return;
        }
    });
};

// send email
const sendEmail = (email, text) => {
    const options = {
        from: `Spesna <${process.env.USER}>`,
        to: email,
        subject: 'account verifying message',
        html: `
        <div style="width: 100%; background-color: gray; padding: 5rem 0">
        <div style="max-width: 700px; background-color: white; margin: 0 auto">
          <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
            <h1 style="color: gray; padding: 0 30px">
              From Shop Web Page
            </h1>
            <div style="font-size: .8rem; margin: 0 30px">
              <p>Message: <br/> <i style="margin-left: 30px">${text}</i></p>
            </div>
          </div>
        </div>
      </div>
        `,
    };

    Email(options)
};

module.exports = sendEmail;
