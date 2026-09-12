export const projects = [
  {
    id: "studiction",
    title: "Studiction",
    label: "Final Year Project",
    description: "An AI-assisted platform for digital and nicotine addiction screening and recovery, applying sentiment analysis and Just-in-Time Adaptive Intervention (JITAI) techniques to support personalized user recovery.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "AI"],
    liveUrl: "https://studictionui.vercel.app/",
    githubUrl: null,
    image: "/projects/studiction.jpg",
    isFeatured: true,
    hasCaseStudy: true
  },

{
    id: "meridian-clinic-management-system",
    title: "Meridian — Clinic Management System (MERN Stack)",
    label: "Full-Stack Project",
    description:
      'A full-stack clinic management platform built with MongoDB, Express, React and Node.js — featuring JWT authentication with role-based access for admin, doctor and patient users, appointment booking with real-time conflict detection, billing/invoicing and an admin analytics dashboard. The frontend uses a 3D, animated interface built with Three.js (React Three Fiber) and Framer Motion.',
    note: 'End-to-end build: designed and implemented both the backend REST API (Node/Express/MongoDB, JWT auth, role-based access) and the frontend (React, Three.js, Tailwind CSS, Framer Motion).',
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Three.js / React Three Fiber", "Framer Motion", "JWT Auth", "Recharts"],
    liveUrl: "https://clinic-management-system-six-tan.vercel.app/",
    githubUrl: "https://github.com/muhammad-abdullah494/clinic-management-system.git",
    image: "/projects/meridian.jpg",
    isFeatured: true,
    hasCaseStudy: false
  },

  {
    id: "neardrop",
    title: "NearDrop",
    label: "MERN Stack Project",
    description: "Local network file sharing application built with the MERN stack, emphasizing responsive interface and practical full-stack development.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
     liveUrl: null, // No live demo yet
    githubUrl: "https://github.com/muhammad-abdullah494/neardrop",
    image: "/projects/nearDrop.jpg",
    isFeatured: true,
    hasCaseStudy: false
  },
  {
    id: "cybitsol-dashboard",
    title: "CYBIT_SOL Admin Dashboard",
    label: "Practice Project",
    description: "Personal practice MERN dashboard developed to strengthen skills in authentication, CRUD operations, API integration, database management, responsive UI and dashboard architecture.",
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Authentication"],
    liveUrl: null,
    githubUrl: null,
     image: "/projects/dashboard.jpg",
    isFeatured: true,
    hasCaseStudy: false,
    note: "This is a personal practice project, not a company production dashboard."
  },
  
];