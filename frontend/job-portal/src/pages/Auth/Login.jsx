import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader,
  AlertCircle,
  ChechCircle,
} from "lucide-react";

const Login = () => {
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

  {
    /*validation function*/
  }

  const validateEmail = () => {};

  const validatePassword = () => {};

  //Handle input changes

  const handleInputChange = (e) => {};

  //Handle form submission

  const handleSubmit = (e) => {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <div className="">
          <h2 className="">Welcome Back</h2>
          <p className="">Please login to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="">
          {/*Email Field*/}
          <div>
            <label className="">Email Address</label>
          </div>
          <div className="">
            <Mail className="" />
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
            <p className="">
              <AlertCircle className="" />
              {formState.errors.email}
            </p>
          )}

          {/*Password Field*/}
          <div>
            <label className="">Password</label>
            <div className="">
              <Lock className="" />
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
                className=""
              >
                {formState.ShowPassword ? (
                  <EyeOff className="" />
                ) : (
                  <Eye className="" />
                )}
              </button>
            </div>

            {formState.errors.password && (
              <p className="">
                <AlertCircle className="" />
                {formState.errors.password}
              </p>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
