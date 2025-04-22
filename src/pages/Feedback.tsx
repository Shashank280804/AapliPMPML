import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState<number | string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    if (name === "name") {
      setName(value);
    }  else if (name === "feedback") {
      setFeedback(value);
    } else if (name === "rating") {
      setRating(value);
    }
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !feedback || !rating) {
      alert("Please fill out all fields.");
      return;
    }

    // Simulate feedback submission
    console.log("Feedback submitted:", { name, email, feedback, rating });
    navigate("/thankyou"); // Redirect to a thank-you page after submission
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">We Value Your Feedback</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-4 border rounded-md"
            placeholder="Enter your full name"
            value={name}
            onChange={handleChange}
          />
        </div>

        

        {/* Rating Field */}
        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
            Rating (1-5)
          </label>
          <select
            id="rating"
            name="rating"
            className="w-full p-4 border rounded-md"
            value={rating}
            onChange={handleChange}
          >
            <option value="">Select a rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>

        {/* Feedback Textarea */}
        <div className="mb-4">
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
            Your Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            className="w-full p-4 border rounded-md"
            rows={6}
            placeholder="We value your feedback. Please share your thoughts!"
            value={feedback}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-green-600 text-white rounded-md"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
