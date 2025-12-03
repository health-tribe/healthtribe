"use server";
import {connectDB }from "@/lib/db/db";
import mongoose from "mongoose";
import User, { GOAL_VALUES, PROGRAM_VALUES, Goal, Program } from "@/lib/db/models/user.model"; 
// adjust this import based on where your model file is located

// --- MONGODB CONNECTION HELPER ---
await connectDB();


// --- SERVER ACTION ---
export async function submitFormAction(formData: FormData) {


  // Extract form fields
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const otherGoal = formData.get("other_goal")?.toString();

  // Multi-checkbox fields
  const goals = formData.getAll("goals").map(String);
  const programs = formData.getAll("programs").map(String);

  console.log("📩 Received Form Data:", {
    name,
    email,
    phone,
    goals,
    otherGoal,
    programs,
  });

  // --- Validation ---
  if (!name || !email || !phone) {
    throw new Error("Missing required fields");
  }

  // Validate enumerations
  const invalidGoals = goals.filter((g) => !GOAL_VALUES.includes(g as Goal));
  const invalidPrograms = programs.filter((p) =>
    !PROGRAM_VALUES.includes(p as Program)
  );

  if (invalidGoals.length > 0) {
    throw new Error("Invalid goals: " + invalidGoals.join(", "));
  }

  if (invalidPrograms.length > 0) {
    throw new Error("Invalid programs: " + invalidPrograms.join(", "));
  }

  // If "other" goal is selected, details are required
  let otherGoalDetails = undefined;
  if (goals.includes(Goal.OTHER)) {
    otherGoalDetails = otherGoal || "";
  }

  // --- Save to MongoDB ---
  const newUser = await User.create({
    name,
    email,
    phone,
    goals,
    otherGoalDetails,
    programs,
    password: "dummy", // You can remove this field from schema if not needed
  });

  console.log("✅ User Saved to DB:", newUser._id);

  return { success: true };
}
