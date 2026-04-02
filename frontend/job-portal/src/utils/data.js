import {
  Search,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  Shield,
  Clock,
  Award,
  Briefcase,
  Building2,
  LayoutDashboard,
  Plus,
} from "lucide-react";

export const jobSeekersFeatures = [
  {
    icon: Search,
    title: "Smart Job Matching",
    description:
      "Our AI-driven algorithm analyzes your skills, experience, and preferences to match you with the most relevant job opportunities.",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description:
      "Create a professional resume in minutes with our easy-to-use resume builder, tailored to highlight your strengths and achievements.",
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    description:
      "Access a library of interview questions and tips to help you prepare for your next job interview with confidence.",
  },

  {
    icon: Award,
    title: "Career Resources",
    description:
      "Explore a wealth of resources, including articles, webinars, and workshops, to help you advance your career and stay informed about industry trends.",
  },
];

export const employersFeatures = [
  {
    icon: Users,
    title: "Talent Acquisition",
    description:
      "Our platform connects you with a diverse pool of qualified candidates, making it easier to find the perfect fit for your organization.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description:
      "Gain valuable insights into your hiring process with our analytics tools, helping you make informed decisions and optimize your recruitment strategy.",
  },
  {
    icon: Shield,
    title: "Secure Hiring",
    description:
      "Our platform ensures the security and confidentiality of your hiring data, giving you peace of mind throughout the recruitment process.",
  },
  {
    icon: Clock,
    title: "Time-Saving Tools",
    description:
      "Streamline your hiring process with our suite of time-saving tools, including automated candidate screening and scheduling.",
  },
];

export const NAVIGATION_MENU = [
  { id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard },
  { id: "post-job", name: "Post a Job", icon: Plus },
  { id: "manage-jobs", name: "Manage Jobs", icon: Briefcase },
  { id: "company-profile", name: "Company Profile", icon: Building2 },
];

export const CATEGORIES = [
  { value: "Engineering", label: "Engineering" },
  { value: "Design", label: "Design" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "IT & Software", label: "IT & Software" },
  { value: "Customer-service", label: "Customer service" },
  { value: "Product", label: "Product" },
  { value: "Operations", label: "Operations" },
  { value: "Finance", label: "Finance" },
];

export const JOB_TYPES = [
  { value: "Remote", label: "Remote" },
  { value: "Full-time", label: "Full-time" },
  { value: "Part-time", label: "Part-time" },
  { value: "Contract", label: "Contract" },
  { value: "Internship", label: "Internship" },
];

export const SALARY_RANGES = [
  "Less than $1000",
  "$1000 - $15,000",
  "More than $15,000",
];
