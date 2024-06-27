// libs/mailer.js
import nodemailer from 'nodemailer';
import React from 'react';
import { render } from '@react-email/render';
import NewDiscussionEmail from '@/emails/NewDiscussionEmail';

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
    },
});

export const sendNewDiscussionEmail = async (recipients, discussion) => {
  const emailHtml = render(<NewDiscussionEmail discussion={discussion} />);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipients,
    subject: 'New Discussion Added',
    html: emailHtml,
  };

  await transporter.sendMail(mailOptions);

};

