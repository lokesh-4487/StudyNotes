import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import Note from "./models/Note.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, ".env"),
});

const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from the local React development server
app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (origin && /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );

  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json());

// Basic server route
app.get("/", (req, res) => {
  res.send("StudyNotes backend is running.");
});

// Check backend and database status
app.get("/api/health", (req, res) => {
  res.json({
    message: "StudyNotes backend is running.",
    database:
      mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  });
});

// Get all notes
app.get("/api/notes", async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Could not load notes." });
  }
});

// Create a new note
app.post("/api/notes", async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title?.trim() || !content?.trim()) {
      return res.status(400).json({
        message: "Title and content are required.",
      });
    }

    const newNote = await Note.create({
      title: title.trim(),
      content: content.trim(),
    });

    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: "Could not save note." });
  }
});

// Update an existing note
app.put("/api/notes/:id", async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title?.trim() || !content?.trim()) {
      return res.status(400).json({
        message: "Title and content are required.",
      });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title: title.trim(),
        content: content.trim(),
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found." });
    }

    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: "Could not update note." });
  }
});

// Delete a note
app.delete("/api/notes/:id", async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found." });
    }

    res.json({ message: "Note deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Could not delete note." });
  }
});

// Connect to MongoDB, then start the server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed. Full error:");
    console.error(error);
  });
