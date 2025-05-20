import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function GenerateEmail() {
  const [prompt, setPrompt] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `/generate-email`,
        { prompt },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setEmail(res.data.emailDraft);
    } catch (err) {
      alert("Error generating email.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center">
          Generate a Professional Email
        </h2>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. Reschedule meeting to next Monday"
          className="w-full border-2 border-indigo-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none p-4 rounded-lg mb-6 resize-none min-h-[100px] placeholder-gray-500"
        />
        <div className="text-center">
          <button
            onClick={handleGenerate}
            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-all duration-200 shadow-md disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>

        {email && (
          <div className="mt-10 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Generated Email:
            </h3>
            <article className="prose prose-indigo max-w-none">
              <ReactMarkdown>{email}</ReactMarkdown>
            </article>
          </div>
        )}
      </div>
    </div>
  );
}

export default GenerateEmail;
