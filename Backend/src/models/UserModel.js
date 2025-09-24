
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }],
    expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Expense' }],
    settlements: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Settlement' }],
    provider: { type: String },
    isVerified: { type: Boolean, default: false }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
