const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: 'https://syamprasaduppu-devfolio.vercel.app/',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));

app.use(express.json());

// Contact API
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    res.status(200).json({ success: true, message: 'Message sent!' });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ success: false, message: 'Error sending message.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
