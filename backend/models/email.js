const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  prompt: String,
  emailDraft: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Email", emailSchema);
