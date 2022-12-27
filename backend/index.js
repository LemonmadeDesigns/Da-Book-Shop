import express from "express";
import cors from "cors";
import * as path from "path";
import multer from 'multer'

import db from "./config/db.js";
import productRoutes from "./routes/index.js";
import { fileURLToPath } from 'url';

const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

// Serve static files from the React app
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);

app.use(express.static(path.join(__dirname, "/frontend/build")));


app.get("*", (req, res)=>{
  res.sendFile(path.join(__dirname, "/frontend/build",'index.html'));
})

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cd(null, "images")
  },
  filename: (req, res, cb) => {
    cd(null, req.body.name)
  }
})

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded!");
})

const PORT = process.env.PORT || 4000
 
app.listen(PORT, () => console.log(`Backend-Server running at http://localhost:${PORT}`));