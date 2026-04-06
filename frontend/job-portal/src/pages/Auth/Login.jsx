import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import { validateEmail } from "../../utils/helper";
import { validatePassword } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

const Login = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [formState, setFormState] = useState({
    loading: false,
    errors: {},
    ShowPassword: false,
    success: null,
  });

  const validateForm = () => {
    const errors = {
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
    };

    Object.keys(errors).forEach((key) => {
      if (!errors[key]) delete errors[key];
    });

    setFormState((prev) => ({ ...prev, errors }));

    return !Object.values(errors).some((v) => !!v);
  };

  //Handle input changes

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setFormState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        [name]: null,
      },
    }));
  };

  //Handle form submission

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    setFormState((prev) => ({ ...prev, loading: true }));

    //Simulate API call
    try {
      //Login API Integration
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe,
      });

      setFormState((prev) => ({
        ...prev,
        loading: false,
        success: true,
        errors: {},
      }));

      const { token, role } = response.data;

      if (token) {
        login(response.data, token);

        //Redirect based on role
        setTimeout(() => {
          window.location.href =
            role === "employer" ? "/employer-dashboard" : "/find-jobs";
        }, 2000);
      }
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        loading: false,
        errors: { form: "Failed to login. Please check your credentials." },
      }));
    }
  };

  if (formState.success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
        >
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
            Login Successful!
          </h2>
          <p className="text-gray-600 text-center">
            You have successfully logged in. Redirecting to dashboard...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-600">Please login to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="">
          {/*Email Field*/}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={`w-full pl-10 pr-4 py-3 border ${
                formState.errors.email ? "border-red-500" : "border-gray-300"
              } 
                          rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150`}
            />
          </div>

          {formState.errors.email && (
            <p className="text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4 mr-1" />
              {formState.errors.email}
            </p>
          )}

          {/*Password Field*/}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-500" />
              <input
                type={formState.ShowPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className={`w-full pl-10 pr-12 py-3 rounded-lg border ${
                  formState.errors.password
                    ? "border-red-500"
                    : "border-gray-300"
                } 
                              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150`}
              />

              <button
                type="button"
                onClick={() =>
                  setFormState((prev) => ({
                    ...prev,
                    ShowPassword: !prev.ShowPassword,
                  }))
                }
                className="absolute right-3 top-3.5 text-gray-500 focus:outline-none"
              >
                {formState.ShowPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {formState.errors.password && (
              <p className="text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4 mr-1" />
                {formState.errors.password}
              </p>
            )}
          </div>

          {/*Remember Me and Forgot Password*/}
          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="text-gray-700">Remember Me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/*Submit Button*/}
          <button
            type="submit"
            disabled={formState.loading}
            className={`w-full mt-6 py-3 flex items-center justify-center gap-2 
    bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold 
    rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
    transition duration-150
    ${formState.loading ? "cursor-not-allowed opacity-70" : "hover:to-purple-700"}
  `}
          >
            {formState.loading ? (
              <>
                <Loader className="animate-spin w-5 h-5" />
                <span>Logging in...</span>
              </>
            ) : (
              <span>Login</span>
            )}
          </button>

          {/*Success Message*/}
          {formState.success && (
            <p className="text-green-500 mt-4 flex items-center gap-1">
              <CheckCircle className="w-4 h-4 mr-1" />
              {formState.success}
            </p>
          )}

          {/*signup link*/}
          <p className="text-gray-600 mt-4 text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
