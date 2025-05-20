const express = require("express");
const router = express.Router();
const {
  generateEmail,
  getEmails,
  getEmailById,
} = require("../controllers/emailController");

router.post("/generate-email", generateEmail);
router.get("/emails", getEmails);
router.get("/email/:id", getEmailById);

module.exports = router;
