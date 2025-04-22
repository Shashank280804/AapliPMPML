import React from "react";

const Profile: React.FC = () => {
  const user = {
    name: "Shashank Patil",
    phone: "7776077882",
    adharNumber: "1234 5678 9123",
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <div className="space-y-4">
          <p className="text-lg">
            <strong className="font-medium text-gray-700">Name:</strong> {user.name}
          </p>
          <p className="text-lg">
            <strong className="font-medium text-gray-700">Phone Number:</strong> {user.phone}
          </p>
          <p className="text-lg">
            <strong className="font-medium text-gray-700">Aadhar Number:</strong> {user.adharNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
