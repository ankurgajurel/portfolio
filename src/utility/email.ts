var nodemailer = require("nodemailer");

export const sendMail = async ({
  subject,
  toEmail,
  otpText,
}: {
  subject: string;
  toEmail: string;
  otpText: string;
}) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    text: otpText,
  };

  transporter.sendMail(
    mailOptions,
    function ({ error, info }: { error: any; info: any }) {
      if (error) {
        throw new Error(error);
      } else {
        console.log("Email Sent");
        return true;
      }
    }
  );
};
