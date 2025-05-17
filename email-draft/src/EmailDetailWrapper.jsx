import React from "react";
import { useParams } from "react-router-dom";
import EmailDetail from "./EmailDetail"; // Ensure this import exists

function EmailDetailWrapper() {
  const { id } = useParams();
  return <EmailDetail id={id} />;
}

export default EmailDetailWrapper