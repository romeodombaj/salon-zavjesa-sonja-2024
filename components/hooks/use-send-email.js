import { useState } from "react";

const useSendEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState();

  const sendEmail = async (data = {}) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      if (!response.ok) {
        console.log("Error sending email!");
        return;
      }

      console.log("Email successfully sent!");
    } catch (error) {
      throw new Error("Pogreška kod slanja maila!");
    }

    setIsLoading(false);
  };

  return { sendEmail, isLoading, feedback };
};

export default useSendEmail;
