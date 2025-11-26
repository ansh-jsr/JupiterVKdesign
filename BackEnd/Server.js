const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// ----------------------
// MongoDB Atlas Connection
// ----------------------
mongoose
  .connect(process.env.MONGO_URI)   
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch((err) => console.log("MongoDB Error:", err));

// ----------------------
// Schema
// ----------------------
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// ----------------------
// Email Transporter
// ----------------------
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,   // EMAIL from .env
    pass: process.env.EMAIL_PASS,   // APP PASSWORD from .env
  },
});

// ----------------------
// API Route
// ----------------------
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.SEND_TO,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.json({ success: true, message: "Your message was saved & emailed!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
