
require("dotenv").config();
const mongoose = require("mongoose");

const Contact = require("./models/Contact");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });

// Middleware must come after app is initialized
app.use(cors());

app.use(express.json());

// Your first route
app.get("/", (req, res) => {
  res.send("My portfolio backend is running!");
});

// Projects API
app.get("/api/projects", (req, res) => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "My portfolio built with React.",
      technologies: ["React", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "Java Practice Projects",
      description: "Projects built while learning Java and OOP.",
      technologies: ["Java", "OOP"],
    },
  ];

  res.json(projects);
});



app.post("/api/contact", (req, res) => {
  
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Check required fields
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide your name, email and message.",
      });
    }

    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    // Create and save a contact document
    const newContact = new Contact({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    await newContact.save();

    return res.status(201).json({
      success: true,
      message: "Your message was saved successfully!",
    });
  } catch (error) {
    console.error("Contact submission failed:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to save your message. Please try again later.",
    });
  }
});

});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});