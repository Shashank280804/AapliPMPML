import React, { useState, useEffect } from "react";

// Define pass structure
interface Pass {
  id: number;
  name: string;
  email: string;
  type: string;
  startDate: string;
  expiryDate: string;
  price: number;
}

// Simulated logged-in user
const loggedInUser = { name: "Yogesh Sukate", email: "yogesh.sukate@example.com" }; // Replace with actual user auth

const ViewPassComponent: React.FC = () => {
  const [userPass, setUserPass] = useState<Pass | null>(null);

  useEffect(() => {
    // Simulated list of passes (Replace with API response)
    const allPasses: Pass[] = [
      { id: 201, name: "Yogesh Sukate", email: "yogesh.sukate@example.com", type: "Monthly Pass", startDate: "2025-04-01", expiryDate: "2025-04-30", price: 500 },
      { id: 202, name: "Amit Sharma", email: "amit.sharma@example.com", type: "Student Pass", startDate: "2025-04-05", expiryDate: "2025-05-05", price: 300 },
      { id: 203, name: "Sneha Patil", email: "sneha.patil@example.com", type: "Daily Pass", startDate: "2025-04-10", expiryDate: "2025-04-10", price: 50 },
    ];

    // Find the pass of the logged-in user
    const foundPass = allPasses.find((pass) => pass.email === loggedInUser.email);
    setUserPass(foundPass || null);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Bus Pass (Pune City)</h2>
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md mx-auto">
        {userPass ? (
          <div>
            <h3 className="text-lg font-semibold mb-2">Pass Details</h3>
            <p><strong>Name:</strong> {userPass.name}</p>
            <p><strong>Email:</strong> {userPass.email}</p>
            <p><strong>Pass Type:</strong> {userPass.type}</p>
            <p><strong>Start Date:</strong> {userPass.startDate}</p>
            <p><strong>Expiry Date:</strong> {userPass.expiryDate}</p>
            <p className="font-bold text-green-600"><strong>Price:</strong> ₹{userPass.price}</p>
          </div>
        ) : (
          <p>No bus pass found for {loggedInUser.name}.</p>
        )}
      </div>
    </div>
  );
};

export default ViewPassComponent;
