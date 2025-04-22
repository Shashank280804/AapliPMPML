import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  User,
  Settings,
  LogOut,
  HelpCircle,
  Contact,
  Menu,
  MessageCircle,
} from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  const gotoHome = () => {
    setIsMenuOpen(false);
    navigate("/");
  };

  const handleLogout = () => {
    setIsMenuOpen(false);
    // Add logout logic here
    navigate("/login");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <header
        className="flex justify-between w-full h-16 sm:h-20 items-center px-4 sm:px-6 py-2 sm:py-4"
        style={{ background: "#639359" }}
      >
        <div className="flex items-center space-x-4">
          <Menu
            className="text-white h-6 w-6 cursor-pointer"
            onClick={toggleSidebar}
          />
          <img
            onClick={gotoHome}
            className="h-12 sm:h-16 cursor-pointer object-contain"
            src="/pmpml.png"
            alt="Apli PMPML"
          />
        </div>

        <div className="text-white text-sm sm:text-md font-bold">
          <p>Welcome, User</p>
        </div>

        <div className="relative" ref={menuRef}>
          <div
            className="flex items-center space-x-2 sm:space-x-4 cursor-pointer"
            onClick={toggleMenu}
          >
            <img
              src="/profile.png"
              alt="User Profile"
              className="h-10 rounded-full"
            />
            <ChevronDown
              className={`h-4 w-4 sm:h-5 sm:w-5 text-white transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
            />
          </div>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <Link
                to="/profile"
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-4 w-4 mr-2" />
                Profile
              </Link>
              <Link
                to="https://pmpml.org/"
                target="_blank"
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Contact className="h-4 w-4 mr-2" />
                About PMPML
              </Link>
              <Link
                to="/help"
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <HelpCircle className="h-4 w-4 mr-2" />
                Help
              </Link>
              <Link
                to="/complaints"
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Settings className="h-4 w-4 mr-2" />
                Complaints
              </Link>
              <Link
                to="/feedback"
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Feedback
              </Link>
              <div className="border-t border-gray-100"></div>
              <div
                className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center cursor-pointer"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Log out
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-green-700">Menu</h2>
            <button onClick={toggleSidebar} className="text-gray-600 text-2xl">
              ×
            </button>
          </div>
          <nav className="space-y-4">
            <Link to="/" onClick={toggleSidebar} className="block text-gray-700 hover:text-green-600">
              Home
            </Link>
            <Link to="/profile" onClick={toggleSidebar} className="block text-gray-700 hover:text-green-600">
              Profile
            </Link>
            <Link to="/help" onClick={toggleSidebar} className="block text-gray-700 hover:text-green-600">
              Help
            </Link>
            <Link to="/complaints" onClick={toggleSidebar} className="block text-gray-700 hover:text-green-600">
              Complaints
            </Link>
            <Link to="/feedback" onClick={toggleSidebar} className="block text-gray-700 hover:text-green-600">
              Feedback
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
