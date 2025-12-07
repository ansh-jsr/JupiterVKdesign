const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// -------------------------------------
// CORS CONFIG (IMPORTANT FOR HOSTING)
// -------------------------------------
app.use(
  cors({
    origin: [
      "https://jupitervkdesign.com",
      "https://www.jupitervkdesign.com",
      "http://localhost:5173" // keep for local dev
    ],
    credentials: true,
  })
);

app.use(express.json());

// -------------------------------------
// MongoDB Connection
// -------------------------------------
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch((err) => console.log("MongoDB Error:", err));

// -------------------------------------
// Schema & Model
// -------------------------------------
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// -------------------------------------
// Nodemailer Transport
// -------------------------------------
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // YOUR GMAIL
    pass: process.env.EMAIL_PASS, // APP PASSWORD
  },
});

// API ROUTE
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Save to MongoDB
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // Send Email Notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.SEND_TO, // RECEIVER EMAIL
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.json({ success: true, message: "Message saved & email sent!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// -------------------------------------
// HEALTH CHECK ROUTE
// -------------------------------------
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// -------------------------------------
// SERVER START (IMPORTANT FOR DEPLOY)
// -------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
