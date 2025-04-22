import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Redirect to home after 3 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-md">
        <h2 className="text-xl font-bold text-green-600 mb-4">Thank You for Your Feedback!</h2>
        <p className="text-gray-700 mb-4">We appreciate your input and will use it to improve our services.</p>
        <p className="text-sm text-gray-500">Redirecting to the homepage...</p>
      </div>
    </div>
  );
};

export default ThankYou;
