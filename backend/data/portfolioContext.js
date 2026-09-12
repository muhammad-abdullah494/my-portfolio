/* The AI's memory — verified facts ONLY. */
const portfolioContext = {
  name: 'Muhammad Abdullah',
  role: 'MERN Stack Developer and Software Engineer',
  location: 'Islamabad, Pakistan',
  email: 'mr.muhammad.abdullah23@gmail.com',
  github: 'https://github.com/muhammad-abdullah494',
  linkedin: 'https://linkedin.com/in/muhammad-abdullah23',
   education: 'BS Computer Science, Khushal Khan Khattak University, Karak (Graduated 2026)',
  experience: 'Junior Web Developer at Cybit Sol. Contributed to the CYBIT_SOL admin dashboard building a full MERN stack solution from scratch, including JWT auth, CRUD, real-time notifications, and React/Vite/Tailwind UI. Also helped shape their social media brand identity.',
  skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'Git'],
  exploring: ['AI/LLM integration', 'React Native'],
  projects: [
    {
      name: 'Studiction',
      label: 'Final Year Project',
      summary: 'AI-assisted digital & nicotine addiction screening and recovery platform using sentiment analysis and Just-in-Time Adaptive Intervention (JITAI) techniques.',
      live: 'https://studictionui.vercel.app/',
    },
    {
      name: 'NearDrop',
      label: 'MERN stack project',
      summary: 'Local network file sharing application with a responsive interface and practical full-stack development.',
      github: 'https://github.com/muhammad-abdullah494/NearDrop',
    },
        {
      name: 'Meridian Clinic Management System',
      label: 'Full-Stack MERN Project',
      summary: 'Full-stack clinic management platform with JWT auth (admin/doctor/patient roles), appointment booking with real-time conflict detection, billing/invoicing, and admin analytics dashboard. Frontend built with React, Three.js (React Three Fiber), Framer Motion and Tailwind CSS. Designed and implemented end-to-end.',
      github: 'https://github.com/muhammad-abdullah494/clinic-management-system',
    },
    {
      name: 'CYBIT_SOL Admin Dashboard',
      label: 'Personal practice project (not a company production system)',
      summary: 'Practice MERN dashboard for authentication, CRUD operations, API integration and dashboard architecture.',
    },
  ],
};

module.exports = portfolioContext;