import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Loader2 } from "lucide-react"; // Optional loader icon

function EmailDetail({ id }) {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    axios.get(`/email/${id}`).then((res) => setEmail(res.data));
  }, [id]);

  if (!email)
    return (
      <div className="flex justify-center items-center mt-20 text-gray-600">
        <Loader2 className="animate-spin mr-2" />
        Loading...
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-white border rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Email Draft Detail
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">📝 Prompt</h2>
        <p className="bg-blue-50 border border-blue-100 p-4 rounded text-gray-700">
          {email.prompt}
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Generated Email
        </h2>
        <article className="prose prose-blue max-w-none bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
          <ReactMarkdown>{email.emailDraft}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}

export default EmailDetail;
