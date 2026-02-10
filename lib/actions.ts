'use server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const formType = formData.get('formType') as string;

    const mailOptions = {
        from: `"${name || 'NiveshSarthi Form'}" <${process.env.SMTP_FROM}>`,
        to: process.env.SMTP_TO,
        subject: `New Form Submission: ${formType || 'General Inquiry'}`,
        text: `
            Name: ${name || 'N/A'}
            Email: ${email || 'N/A'}
            Phone: ${phone || 'N/A'}
            Form Type: ${formType || 'General Inquiry'}
            
            Message:
            ${message || 'No message provided.'}
        `,
        html: `
            <h3>New Form Submission</h3>
            <p><strong>Form Type:</strong> ${formType || 'General Inquiry'}</p>
            <p><strong>Name:</strong> ${name || 'N/A'}</p>
            <p><strong>Email:</strong> ${email || 'N/A'}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <p>${message || 'No message provided.'}</p>
        `,
        replyTo: email || undefined,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: 'Email sent successfully' };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: 'Failed to send email' };
    }
}
