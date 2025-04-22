import React from "react";

const Profile: React.FC = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="bg-white p-4 shadow rounded-lg">
        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
    </div>
  );
};

export default Profile;
