import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import authRoutes from "./Route/authRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Define __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the 'uploads' folder if it doesn't exist
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Set up storage for uploaded files using multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Save files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Unique filename
  },
});

// Initialize multer with the storage configuration
const upload = multer({ storage });

// Authentication routes
app.use("/auth", authRoutes);

// API endpoint to handle mentor creation with image upload
app.post("/api/mentors", upload.single("image"), (req, res) => {
  const { name, category, linkedin, facebook, twitter } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null; // Store image path

  // Save mentor data (this is just an example)
  const newMentor = {
    id: Date.now(),
    name,
    category,
    image,
    linkedin,
    facebook,
    twitter,
  };

  res.status(201).json(newMentor);
});

// Serve uploaded images statically
app.use("/uploads", express.static(uploadDir));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
