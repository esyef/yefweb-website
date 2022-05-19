import type { NextApiRequest, NextApiResponse } from 'next';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    fullName,
    email,
    message,
  }: { fullName: string; email: string; message: string } = req.body;

  const msg = {
    to: 'yeferson.dev@gmail.com',
    from: 'yeferson.dev@gmail.com',
    subject: `${fullName} sent you a message`,
    text: `Email => ${email}`,
    html: `<strong>${message}</strong>`,
  };

  await sgMail.send(msg);
  res.status(200).json({ success: true });
};
