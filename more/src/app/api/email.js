import nodemailer from "nodemailer";

export const sendEmail = async (option) => {
    const transporter = nodemailer.createTransport({
        host: process.env.NEXT_PUBLIC_Email_HOST,
        port: process.env.NEXT_PUBLIC_Email_PORT,
        auth: {
            user: process.env.NEXT_PUBLIC_Email_USER,
            pass: process.env.NEXT_PUBLIC_Email_PASSWORD
        }
    })

    const emailOptions = {
        from: 'ElderElevation suport<support@elderelevation.com>',
        to: option.email, 
        subject: option.subject,
        text: option.message
    }

    await transporter.sendMail(emailOptions);
}