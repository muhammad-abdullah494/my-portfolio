/*
  Studiction case-study content.
  Overview → Development Approach: derived strictly from the verified project description.
  Future Work: taken verbatim from the official FYP report, section 7.3.
  Challenges / Outcome: conservative drafts — Abdullah, replace with your own
  first-hand notes (or report excerpts) during the polish phase.
*/
export const studictionCaseStudy = {
  eyebrow: 'Final Year Project — Case Study',
  title: 'AI-Assisted Digital & Nicotine Addiction Screening and Recovery Platform',
  summary:
    'An AI-assisted platform for digital and nicotine addiction screening and recovery, applying sentiment analysis and Just-in-Time Adaptive Intervention (JITAI) techniques to support personalized user recovery.',
  liveUrl: 'https://studictionui.vercel.app/',
  stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AI'],
  sections: [
    {
      heading: 'Overview',
      paragraphs: [
        'Studiction is my Final Year Project as a Computer Science student at Khushal Khan Khattak University. It is an AI-assisted platform for digital and nicotine addiction screening and recovery.',
        'The platform applies sentiment analysis and Just-in-Time Adaptive Intervention (JITAI) techniques to support personalized user recovery, built on a full MERN architecture.',
      ],
    },
    {
      heading: 'Problem',
      paragraphs: [
        'Digital and nicotine addiction can quietly affect daily well-being, focus and routines, while accessible screening and structured recovery support remain limited.',
        'People who want to change their habits often lack timely, personalized guidance that adapts to their current emotional state instead of offering generic advice.',
      ],
    },
    {
      heading: 'Solution',
      paragraphs: [
        'Studiction combines a MERN web platform with an AI assistance layer: users are screened for digital and nicotine addiction patterns, the system analyzes sentiment signals, and JITAI techniques deliver adaptive, personalized recovery support at meaningful moments.',
      ],
    },
    {
      heading: 'Key Features',
      items: [
        'Addiction screening flows for digital and nicotine use',
        'Sentiment analysis to understand the user’s state',
        'Just-in-Time Adaptive Interventions (JITAI) for personalized recovery support',
        'Responsive web interface built with React',
        'RESTful backend services with Node.js and Express.js',
        'MongoDB as the data store',
      ],
    },
    {
      heading: 'AI Component',
      paragraphs: [
        'The AI layer applies sentiment analysis to user inputs and uses Just-in-Time Adaptive Intervention (JITAI) principles to decide supportive, personalized recovery actions.',
        'This AI component is the core differentiator of the project — it moves Studiction beyond a standard CRUD web application into an adaptive, user-aware system.',
      ],
    },
    {
      heading: 'Technology Stack',
      items: [
        'React — responsive frontend interface',
        'Node.js — server-side runtime',
        'Express.js — RESTful API layer',
        'MongoDB — database',
        'AI — sentiment analysis & JITAI intervention logic',
      ],
    },
    {
      heading: 'Development Approach',
      paragraphs: [
        'The project follows a clear separation of concerns: a React frontend consumes REST APIs served by Node.js and Express.js, with MongoDB as the data store and an AI service layer for sentiment analysis and intervention logic.',
        'Development progressed from core screening flows toward the AI-assisted recovery experience, keeping the MERN architecture clean as the AI layer evolved.',
      ],
    },
    {
      heading: 'Screenshots',
      images: [
        { src: '/projects/studiction.jpg', alt: 'Studiction web interface screenshot' },
      ],
    },
    {
      heading: 'Challenges',
      paragraphs: [
        'Designing screening and intervention flows that feel supportive rather than clinical.',
        'Combining sentiment analysis outputs with JITAI timing so interventions arrive at useful moments.',
        'Keeping the MERN architecture organized while the AI layer evolved during the final year.',
      ],
    },
    {
      heading: 'Outcome',
      paragraphs: [
        'Studiction delivers a complete full-stack system with a real AI component: screening, sentiment-informed insight and adaptive recovery support in one platform.',
        'It stands as the strongest project in this portfolio and the foundation for my continued work with AI-assisted applications.',
      ],
    },
    {
      heading: 'Future Work',
      items: [
        {
          title: 'Wearable Integration',
          detail: 'Incorporating data from wearable sensors (e.g., heart rate variability from smartwatches) to enable fully passive, physiological JITAI triggering without reliance on self-reporting.',
        },
        {
          title: 'Clinical Validation Study',
          detail: "Conducting a randomized controlled trial in partnership with a health institution to rigorously measure Studiction's real-world efficacy against control conditions.",
        },
        {
          title: 'Expanded Substance Coverage',
          detail: 'Extending the diagnostic and tapering modules to cover a broader range of substances, including alcohol and caffeine dependency.',
        },
        {
          title: 'Multilingual Support',
          detail: 'Adding Urdu-language NLP capabilities to improve accessibility for the broader Pakistani student population.',
        },
        {
          title: 'Gamification Layer',
          detail: 'Introducing evidence-based gamification elements (points, social accountability groups) to further improve long-term user engagement and retention.',
        },
        {
          title: 'Clinical Expert Review',
          detail: "Engaging licensed addiction specialists to review and validate the expert system's clinical recommendation logic.",
        },
      ],
    },
  ],
};