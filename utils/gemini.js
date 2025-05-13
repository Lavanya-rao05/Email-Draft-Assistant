const axios = require("axios");

const generateEmailDraft = async (prompt) => {
  const API_URL = process.env.GEMINI_API_URL;
  const API_KEY = process.env.GEMINI_API_KEY;

  const body = {
    contents: [
      {
        parts: [
          {
            text: `Write a professional email based on this request: "${prompt}"`,
          },
        ],
      },
    ],
  };

  const response = await axios.post(`${API_URL}?key=${API_KEY}`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data.candidates[0].content.parts[0].text;
};

module.exports = generateEmailDraft;
