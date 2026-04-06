import { motion } from "framer-motion";
import { Search, ArrowRight, Building2, TrendingUp, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const Hero = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const stats = [
    { icon: Users, label: "Active users", value: "100K+" },
    { icon: Building2, label: "Companies", value: "5K+" },
    { icon: TrendingUp, label: "Jobs Posted", value: "10K+" },
  ];

  return (
    <section className="pt-24 bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/*Main heading*/}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight pt-1"
          >
            Find Your Dream Job with JobPortal
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Perfect Hire
            </span>
          </motion.h1>

          {/*Subheading*/}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Connecting Talent with Opportunity
          </motion.p>

          {/*CTA Button*/}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl items-center  font-semibold px-8 py-4 rounded-xl flex items-center space-x-2"
              onClick={() => navigate("/find-jobs")}
            >
              <Search className="w-5 h-5" />
              Explore Jobs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl  font-semibold text-lg hover:border-gray-400 hover:text-gray-900 transition-all duration-300 shadow-sm"
              onClick={() => {
                navigate(
                  isAuthenticated && user.role === "employer"
                    ? "/employer-dashboard"
                    : "/login",
                );
              }}
            >
              Post a Job
            </motion.button>
          </motion.div>

          {/*Stats*/}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                className="flex flex-col items-center text-center space-y-2 p-4 bg-gray-50 hover:rounded-xl transition-colors shadow-sm"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center rounded-xl mb-2">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="font-bold text-2xl text-gray-900">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/*subtle background Elements*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full blur-3xl opacity-20"></div>
      </div>
    </section>
  );
};

export default Hero;
