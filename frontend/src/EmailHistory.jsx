import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MailIcon } from "lucide-react"; // Optional: install with `npm i lucide-react`

function EmailHistory() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios.get(`/emails`).then((res) => {
      const data = res.data;
      const emailsArray = Array.isArray(data) ? data : data.emails;
      setEmails(emailsArray || []);
    });
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Email Draft History
      </h2>

      {emails.length === 0 ? (
        <p className="text-center text-gray-500">No email drafts found.</p>
      ) : (
        <ul className="grid gap-5">
          {emails.map((email) => (
            <li
              key={email._id}
              className="p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <MailIcon className="text-blue-500" size={20} />
                <p className="text-gray-800 font-medium">
                  Prompt:
                  <span className="text-gray-600 ml-1">{email.prompt}</span>
                </p>
              </div>
              <Link
                to={`/email/${email._id}`}
                className="inline-block mt-2 text-sm text-blue-600 font-semibold hover:underline"
              >
                View Draft
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmailHistory;
