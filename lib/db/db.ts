import mongoose from "mongoose";

let isConnected = false; // Track the connection state

export async function connectDB() {
  if (isConnected) {
    console.log("⚡ MongoDB already connected");
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("❌ Missing MONGODB_URI in environment variables");
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);

    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    throw new Error("MongoDB connection failed");
  }
}
