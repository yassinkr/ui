// data.js

// Importing various icons from react-icons/fa and other packages
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
  FaUserShield,
  FaStar,
  FaHandsHelping,
  FaCheckCircle,
} from "react-icons/fa";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaPhoneAlt,
  FaProjectDiagram,
} from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelope, FaBlog } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineFileText,
} from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

// Header items for navigation
export const headerItems = [
  { title: "Home", link: "/", icon: <FaHome className="w-5 h-5" /> },
  {
    title: "About",
    link: "/about",
    icon: <FaInfoCircle className="w-5 h-5" />,
  },
  {
    title: "Services",
    link: "/services",
    icon: <FaServicestack className="w-5 h-5" />,
  },
  {
    title: "Produits",
    link: "/produits",
    icon: <FaServicestack className="w-5 h-5" />,
  },
  {
    title: "Projects",
    link: "/projects",
    icon: <FaProjectDiagram className="w-5 h-5" />,
  }, // Added Projects
  { title: "Blog", link: "/blog", icon: <FaBlog className="w-5 h-5" /> },
  {
    title: "Contact",
    link: "/contact",
    icon: <FaPhoneAlt className="w-5 h-5" />,
  },
];

// Reasons to choose the service
export const reasons = [
  {
    id: 1,
    title: "Expert Team",
    description:
      "Our team consists of experienced professionals with diverse skill sets to handle all your needs.",
    icon: <FaUserShield className="text-4xl text-main-yellow" />,
  },
  {
    id: 2,
    title: "Customer Satisfaction",
    description:
      "We prioritize our clients, ensuring that your needs and expectations are met with excellence.",
    icon: <FaStar className="text-4xl text-main-yellow" />,
  },
  {
    id: 3,
    title: "Tailored Solutions",
    description:
      "We provide customized solutions that are tailored to meet the unique requirements of your business.",
    icon: <FaHandsHelping className="text-4xl text-main-yellow" />,
  },
  {
    id: 4,
    title: "Proven Track Record",
    description:
      "Our portfolio speaks for itself, showcasing successful projects and satisfied clients.",
    icon: <FaCheckCircle className="text-4xl text-main-yellow" />,
  },
];

// Testimonials from clients
export const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    position: "CEO, Tech Solutions",
    feedback:
      "Working with this team has transformed our business. Their expertise and dedication to our project were unparalleled.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    position: "Founder, Creative Agency",
    feedback:
      "The attention to detail and commitment to excellence exceeded our expectations. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Sarah Lee",
    position: "Director, Marketing Pros",
    feedback:
      "Their ability to understand our needs and deliver tailored solutions made all the difference. We are thrilled with the results!",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    position: "Product Manager, Innovate Inc.",
    feedback:
      "A fantastic experience from start to finish. Their support throughout the process was invaluable!",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

// Frequently Asked Questions (FAQs)
export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including web development, mobile app development, cloud solutions, and cybersecurity.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The timeline for each project depends on the scope and complexity, but we always aim to deliver high-quality results within an agreed timeframe.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is flexible and based on the specific needs of your project. We offer competitive rates and customized solutions for each client.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes, we offer post-launch support to ensure your project runs smoothly. Our support packages are customizable to suit your business needs.",
  },
  {
    question: "How do I get started with a project?",
    answer:
      "Simply reach out to us through our contact form, and we will set up a consultation to discuss your project requirements.",
  },
];

// Contact information for the footer or contact section
export const contactInfo = [
  {
    type: "address",
    title: "Address",
    detail: "123 Main Street, Your City",
    icon: <FaMapMarkerAlt className="text-main-yellow text-3xl mr-4" />,
  },
  {
    type: "phone",
    title: "Phone",
    detail: "+1 (234) 567-890",
    icon: <FaPhoneAlt className="text-main-yellow text-3xl mr-4" />,
  },
  {
    type: "email",
    title: "Email",
    detail: "contact@yourdomain.com",
    icon: <FaEnvelope className="text-main-yellow text-3xl mr-4" />,
  },
];

// Footer configuration
export const footerData = {
  companyInfo: {
    description:
      "Providing cutting-edge digital solutions to enhance your business. We specialize in web and mobile app development, cloud solutions, and cybersecurity.",
    address: "Tebessa, Algeria",
  },
  quickLinks: [
    { title: "Services", href: "/services" },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ],
  contactInfo: {
    email: "info@ourcompany.com",
    phone: "+213 555 123 456",
    address: "Tebessa, Algeria",
  },
  socialLinks: [
    {
      platform: "Facebook",
      url: "https://www.facebook.com",
      icon: FaFacebookF,
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com",
      icon: FaInstagram,
    },
    { platform: "Twitter", url: "https://www.twitter.com", icon: FaTwitter },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com",
      icon: FaLinkedinIn,
    },
  ],
};

// Dashboard items for navigation in the admin panel
export const DashboardItems = [
  {
    name: "Home",
    path: "/dashboard",
    icon: <AiOutlineHome className="mr-2" />,
  },
  {
    name: "Services",
    path: "/dashboardServices",
    icon: <BsFillGearFill className="mr-2" />,
  },
  {
    name: "Projects",
    path: "/dashboardProjects",
    icon: <AiOutlineProject className="mr-2" />,
  },
  {
    name: "Blogs",
    path: "/dashboardBlogs",
    icon: <AiOutlineFileText className="mr-2" />,
  },
];
