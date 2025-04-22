import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [adharNumber, setAdharNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [adharError, setAdharError] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 6 characters long and contain at least one uppercase letter.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const validatePhone = (phone: string) => {
    if (phone.length > 10) {
      setPhoneError('Phone number cannot exceed 10 digits.');
    } else if (phone.length < 10) {
      setPhoneError('Phone number must be exactly 10 digits.');
    } else {
      setPhoneError('');
    }
  };

  const validateAdhar = (adharNumber: string) => {
    if (adharNumber.length > 12) {
      setAdharError('Aadhar number cannot exceed 12 digits.');
    } else if (adharNumber.length < 12) {
      setAdharError('Aadhar number must be exactly 12 digits.');
    } else {
      setAdharError('');
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone and Aadhar number on form submission
    if (phone.length !== 10 || adharNumber.length !== 12) {
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      return;
    }

    // Perform signup logic here (e.g., send data to API)
    console.log('Signing up with details:', { name, phone, adharNumber, password });

    // Redirect to login page after successful signup
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                validatePhone(e.target.value);
              }}
              placeholder="Enter your phone number"
              maxLength={10}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {phoneError && <p className="text-red-600 text-sm">{phoneError}</p>}
          </div>

          <div>
            <label htmlFor="adharNumber" className="block text-sm font-medium text-gray-700">Aadhar Card Number</label>
            <input
              id="adharNumber"
              type="text"
              value={adharNumber}
              onChange={(e) => {
                setAdharNumber(e.target.value);
                validateAdhar(e.target.value);
              }}
              placeholder="Enter your Aadhar Card number"
              maxLength={12}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {adharError && <p className="text-red-600 text-sm">{adharError}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {passwordError && <p className="text-red-600 text-sm">{passwordError}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <button
              className="text-green-600 font-medium hover:underline"
              onClick={() => navigate('/login')}
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
