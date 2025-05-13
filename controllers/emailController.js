const Email = require("../models/email");
const generateEmailDraft = require("../utils/gemini");

exports.generateEmail = async (req, res) => {
  try {
    const { prompt } = req.body;
    const emailDraft = await generateEmailDraft(prompt);

    const email = await Email.create({ prompt, emailDraft });
    res.status(201).json({ emailDraft: email.emailDraft });
  } catch (err) {
    res.status(500).json({ error: "Failed to generate email" });
  }
};

exports.getEmails = async (req, res) => {
  const emails = await Email.find().sort({ createdAt: -1 });
  res.json(emails);
};

exports.getEmailById = async (req, res) => {
  const email = await Email.findById(req.params.id);
  if (!email) return res.status(404).json({ error: "Email not found" });
  res.json(email);
};
