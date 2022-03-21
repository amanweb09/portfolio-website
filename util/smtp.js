import nodemailer from 'nodemailer'

async function sendEmail({ from, to, subject, text }) {

    let transporter = nodemailer.createTransport({
        host: process.env.NEXT_PUBLIC_SMTP_SERVER,
        port: process.env.NEXT_PUBLIC_SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.NEXT_PUBLIC_LOGIN,
            pass: process.env.NEXT_PUBLIC_MASTER_PASSWORD
        },
    });

    try {
        await transporter.sendMail({
            from,
            to,
            subject,
            text
        })
        console.log('email sent');

    } catch (error) {
        console.log(error);
    }

}

export default sendEmail