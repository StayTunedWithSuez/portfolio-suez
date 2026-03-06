import { IoBody } from "react-icons/io5";
import { FaHome, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';


export const biographyInfo = [
  { keyName: "Age", value: "23 Years", icon: IoBody },
  { keyName: "Residence", value: "Bangladesh", icon: FaHome },
  { keyName: "Address", value: "Home#, Road #, CUET Campus, Chattogram", icon: FaHome },
  { keyName: "Email", value: "swez.sohan@gmail.com", icon: FaEnvelope },
  { keyName: "Phone", value: "017XXXXXXXX", icon: FaPhone },
  { keyName: "Work", value: "N/A", icon: IoBody },
];


export const educationData = [
  {
    year: "2026",
    title: "BSc in Mechanical Engineering",
    institution: "Chittagong University of Engineering and Technology (CUET)",
    description: "Completed core mechanical engineering coursework with a CGPA of 3.73/4.00, and conducted a simulation-based thesis project as part of the final year research."
  },
  {
    year: "2020",
    title: "Higher Secondary Certificate",
    institution: "Dhaka City College",
    description: "Completed Higher Secondary Certificate (HSC) from the Science group under the Dhaka Education Board with a GPA of 5.00/5.00."
  }
];


export const skillData = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Vue.js', 'Angular', 'TypeScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Django', 'Laravel']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Webpack', 'Figma', 'Jest']
  }
];