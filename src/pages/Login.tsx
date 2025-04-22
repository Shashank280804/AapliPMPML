import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validatePhone = (phone: string) => {
    if (phone.length > 10) {
      setPhoneError('Phone number cannot exceed 10 digits.');
    } else if (phone.length < 10) {
      setPhoneError('Phone number must be exactly 10 digits.');
    } else {
      setPhoneError('');
    }
  };

  const validatePassword = (password: string) => {
    if (!password) {
      setPasswordError('Password cannot be empty.');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform login logic here (e.g., validating phone and password)
    if (phone.length !== 10 || !password) {
      return; // Prevent form submission if validation fails
    }

    console.log('Logging in with phone:', phone, 'and password:', password);

    // After login is successful, redirect to the home page
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              id="phone"
              type="tel"
              maxLength={10}
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                validatePhone(e.target.value);
              }}
              placeholder="Enter your phone number"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {phoneError && <p className="text-red-600 text-sm">{phoneError}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              placeholder="Enter your password"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {passwordError && <p className="text-red-600 text-sm">{passwordError}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Haven't you signed up?{' '}
            <button
              className="text-green-600 font-medium hover:underline"
              onClick={() => navigate('/signup')}
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
