import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: false},
    name: {type: String, required: false},
    profilePicture: {type: String, default: "https://www.nicepng.com/png/detail/914-9144016_avatar-pictures-anime-male-hair-reference.png"},
})

const User = mongoose.model("User", userSchema);
export default User