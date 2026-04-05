const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["jobseeker", "employer"], required: true },
  avatar: { type: String, default: "" },
  companyName: { type: String, default: "" },
  companyDescription: { type: String, default: "" },
  companyLogo: { type: String, default: "" },
  resume: { type: String, default: "" },
});

// Encrypt password before save
userSchema.pre("save", async function () {
    if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    }
});

// Match entered password
userSchema.methods.matchPassword = function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};
module.exports = mongoose.model("User", userSchema);
