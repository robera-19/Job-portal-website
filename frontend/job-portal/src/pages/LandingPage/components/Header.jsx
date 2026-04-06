import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const Header = () => {
  const { user, isAuthenticated, } = useAuth();
  const navigate = useNavigate();
  
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and site name */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center rounded">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">JobPortal</span>
          </div>

          {/* Navigation links */}
          <nav className="hidden md:flex space-x-6 items-center">
            <a
              onClick={() => navigate("/find-jobs")}
              className="text-gray-700 hover:text-gray-900 cursor-pointer transition-colors font-medium"
            >
              Find Jobs
            </a>
            <a
              onClick={() => {
                navigate(
                  isAuthenticated && user.role === "employer"
                    ? "/employer-dashboard"
                    : "/login",
                );
              }}
              className="text-gray-700 hover:text-gray-900 cursor-pointer transition-colors font-medium"
            >
              For Employers
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <span className="">Welcome, {user.name}</span>
                <a
                  href={
                    user.role === "employer"
                      ? "/employer-dashboard"
                      : "/find-jobs"
                  }
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded hover:from-blue-600 hover:to-purple-600 transition-colors font-medium"
                >
                  Dashboard
                </a>
              </div>
            ) : (
              <>
                <a
                  href="/login"
                  className="text-gray-700 hover:text-gray-900 rounded-lg cursor-pointer transition-colors font-medium"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded hover:from-blue-600 hover:to-purple-600 transition-colors font-medium"
                >
                  Sign Up
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
