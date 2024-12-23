import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: { type: String },
    email: { type: String, unique: true },
});

export const userModel1 = model("users", userSchema);