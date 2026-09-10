const portfolioContext = require('../data/portfolioContext');

/* OFFLINE BRAIN: keyword -> intent -> truthful answer (no API, no cost) */
function offlineAnswer(message) {
  const m = message.toLowerCase();
  const has = (...words) => words.some((w) => m.includes(w));

  if (m === 'hi' || m.startsWith('hi ') || has('hello', 'hey', 'salam')) {
    return "Hello! I'm Abdullah's AI assistant. Ask me about his projects, skills, education, experience, availability, or how to contact him.";
  }

  if (has('studiction', 'final year', 'fyp', 'addiction')) {
    const p = portfolioContext.projects[0];
    return `${p.name} is Abdullah's ${p.label}: ${p.summary} Live demo: ${p.live}`;
  }
  if (has('neardrop', 'file sharing', 'file-share')) {
    const p = portfolioContext.projects[1];
    return `${p.name} is a ${p.label}: ${p.summary} Code: ${p.github}`;
  }
  if (has('ecommerce', 'e-commerce', 'malltun', 'shop', 'store')) {
    const p = portfolioContext.projects[2];
    return `${p.name} is a ${p.label}: ${p.summary} Live: ${p.live}`;
  }
  if (has('cybit', 'dashboard')) {
    const p = portfolioContext.projects[3];
    return `${p.name} is a ${p.label}: ${p.summary}`;
  }

  if (has('experience', 'intern', 'company', 'job role', 'employment')) {
    return `Abdullah is currently ${portfolioContext.experience}.`;
  }
  if (has('project', 'work', 'built', 'portfolio', 'case study')) {
    const list = portfolioContext.projects.map((p) => `• ${p.name} — ${p.label}`).join('\n');
    return `Abdullah's selected work:\n${list}\nAsk me about any project by name for details.`;
  }
  if (has('skill', 'tech', 'stack', 'tool', 'language')) {
    return `Abdullah works with: ${portfolioContext.skills.join(', ')}. Currently exploring: ${portfolioContext.exploring.join(' and ')}.`;
  }
  if (has('education', 'university', 'degree', 'cgpa', 'study')) {
    return portfolioContext.education + '.';
  }
  if (has('contact', 'email', 'mail', 'reach', 'linkedin', 'github', 'phone')) {
    return `You can reach Abdullah at ${portfolioContext.email}. GitHub: ${portfolioContext.github} — LinkedIn: ${portfolioContext.linkedin}.`;
  }
  if (has('available', 'hire', 'hiring', 'freelance', 'open to')) {
    return 'Yes — Abdullah is available for freelance work and full-time Software Engineer / MERN Stack Developer roles.';
  }
  if (has('who are you', 'about abdullah', 'who is abdullah', 'yourself')) {
    return `${portfolioContext.name} is a ${portfolioContext.role} based in ${portfolioContext.location}. ${portfolioContext.education}.`;
  }

  return "I can talk about Abdullah's projects (Studiction, NearDrop, E-Commerce, CYBIT_SOL dashboard), skills, education, experience, availability, or contact details. What would you like to know?";
}

async function answer(message) {
  return { reply: offlineAnswer(message), source: 'offline' };
}

module.exports = { answer };