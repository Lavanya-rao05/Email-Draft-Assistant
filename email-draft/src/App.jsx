import GenerateEmail from "./GenerateEmail";
import EmailDetailWrapper from "./EmailDetailWrapper";
import EmailHistory from "./EmailHistory";
import Home from "./Home";
import { Routes, Route } from "react-router-dom"; // Remove BrowserRouter

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 font-sans relative overflow-hidden">
      {/* Optional background sparkle particles here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<GenerateEmail />} />
        <Route path="/history" element={<EmailHistory />} />
        <Route path="/email/:id" element={<EmailDetailWrapper />} />
      </Routes>
    </div>
  );
}

export default App;
