export const profile = {
  name: "Anwesha Chatterjee",
  firstName: "Anwesha Chatterjee",
  role: "Computer Science Engineer and full-stack developer",
  shortRole: "Computer Science Engineer & full-stack developer",
  email: "anwesha0319@gmail.com",
  phone: "+91 8092820866",
  location: "Jamshedpur, India",
  pitch: " I have a strong proficiency in Java programming and a creative edge in graphic design with knowledge of full-stack web development as well. I also possess strong leadership qualities and effective communication skills.",
  currently: { line1: "M.Tech in Computer Science and Engineering", line2: "Birla Institute of Technology, Mesra" },
  languages: "English, Hindi, Bengali, and a little German",
  portrait: "/me.jpeg",
  portraitAlt: "Portrait of Anwesha Chatterjee",
  availability: "Open to internships and full-time roles",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/anwesha-chatterjee-567547251" },
    { label: "GitHub", href: "https://github.com/anwesha0319" },
  ],
};

export const skillGroups = [
  { title: "AI and machine learning",
    blurb: "RAG pipelines, deep learning, and predictive modeling.",
    skills: [
      { name: "Python", featured: true }, { name: "LLMs", featured: true }, 
      { name: "RAG", featured: true }, { name: "Google Gemini", featured: true },
      { name: "Keras" }, { name: "PyTorch" }, { name: "OpenCV" }, 
      { name: "Scikit-learn" }, { name: "YOLO" }, { name: "NumPy" },
      { name: "Pandas" }, { name: "Matplotlib" }, { name: "Streamlit" },
    ] },
  { title: "Languages and frameworks",
    blurb: "REST API design, full-stack web and mobile builds.",
    skills: [
      { name: "Java", featured: true }, { name: "Spring Boot", featured: true },
      { name: "Python", featured: true }, { name: "Django REST" },
      { name: "React", featured: true }, { name: "React Native" },
      { name: "JavaScript" }, { name: "HTML and CSS" }, 
      { name: "Tailwind CSS" }, { name: "C" },
    ] },
  { title: "Databases, cloud, and core CS",
    blurb: "Data management, analytics, and engineering workflows.",
    skills: [
      { name: "MySQL", featured: true }, { name: "PostgreSQL" }, 
      { name: "Tableau" }, { name: "Data structures and algorithms", featured: true },
      { name: "Agile methodologies" }, { name: "DevOps fundamentals" },
      { name: "Blockchain fundamentals" },
    ] },
];

export const projectsSection = {
  heading: "Featured projects",
  intro: "Open a folder to read about a project.",
};

export const projects = [
  {
    slug: "safety-risk-rag",
    title: "Safety risk assessment",
    tagline: "RAG system built at Tata Steel",
    kind: "case-study" as const,
    label: "Professional case study",
    org: "Tata Steel, AI project intern, May 2026",
    image: "/projects/safety-risk-rag.png",
    highlight: "5 seconds instead of 30 minutes",
    stack: ["Python", "Google Gemini", "RAG", "MySQL", "Streamlit"],
    href: "",
    lead: "From a 30-minute manual assessment to a 5-second answer that people can check.",
    sections: [
      { heading: "The challenge", body: "Assessing a workplace safety incident meant manually comparing it against past cases and scoring the risk, which took about 30 minutes per incident." },
      { heading: "What I built", body: "A retrieval-augmented generation system that searches 1,000 historical incidents, finds the closest matches, and uses Google Gemini to produce multi-dimensional risk scores. An explainability panel shows which past incidents shaped each score." },
      { heading: "The result", body: "An assessment now takes about 5 seconds. Because every score points back to the incidents behind it, people stay in control of the final decision." },
    ],
    note: "Details are limited to what I can share publicly.",
  },
  {
    slug: "medvault",
    title: "MedVault",
    tagline: "Healthcare management system",
    kind: "project" as const,
    image: "/projects/medvault.png",
    highlight: "Full-stack build with chatbot integration",
    stack: ["Spring Boot", "React", "MySQL", "Tailwind CSS", "Python"],
    href: "",
    description: "A healthcare management system for appointments, records, and prescriptions.",
    longDescription: "Covers appointment scheduling, electronic medical records, authentication, emergency handling, and digital prescriptions. I designed and built it during the Infosys Springboard internship, with a Spring Boot backend, a React interface, MySQL storage, and a chatbot integration.",
  },
  {
    slug: "fitwell",
    title: "FitWell",
    tagline: "Unified health tracking",
    kind: "project" as const,
    image: "/projects/fitwell.png",
    highlight: "Led UI/UX design and the Google Fit integration",
    stack: ["React Native", "Django REST", "PostgreSQL"],
    href: "",
    description: "An AI-powered health tracker with a dashboard, diet planner, and Google Fit sync.",
    longDescription: "I led the UI/UX design and the Google Fit integration for this health tracker, which brings activity data, a dashboard, and a diet planner into one app. I also co-authored a research paper on AI-driven health analytics.",
  },
  {
    slug: "weed-detection",
    title: "Rice weed detection",
    tagline: "Deep learning for precision agriculture",
    kind: "project" as const,
    image: "/projects/weed-detection.png",
    highlight: "0.980 mAP@50",
    stack: ["Python", "PyTorch", "OpenCV", "YOLOv8", "YOLOX-tiny"],
    href: "",
    description: "Real-time weed detection in rice fields using object detection models.",
    longDescription: "I compared eight object detection models for spotting weeds in rice fields and found that YOLOX-tiny gave the best balance of speed and accuracy, reaching 0.980 mAP@50.",
  },
  {
    slug: "campus-mart",
    title: "Campus Mart",
    tagline: "AI-powered hostel marketplace",
    kind: "project" as const,
    image: "/projects/campus-mart.png",
    highlight: "Blur detection and price prediction models",
    stack: ["Python", "React", "Figma"],
    href: "",
    description: "AI-powered hostel marketplace with a blur-detection model and price prediction.",
    longDescription: "Built a marketplace platform for hostel students with AI-powered blur detection to ensure image quality and machine learning-based price prediction. Designed the complete UI in Figma before development.",
  },
  {
    slug: "club-management",
    title: "Club Management System",
    tagline: "University club platform",
    kind: "project" as const,
    image: "/projects/club-management.png",
    highlight: "Event management and galleries",
    stack: ["React", "Node.js", "MongoDB"],
    href: "",
    description: "Website for university clubs with events, past event details, and image galleries.",
    longDescription: "Developed a comprehensive platform for university clubs to manage their events, showcase past activities, and maintain image galleries for student engagement.",
  },
  {
    slug: "campus-navigation",
    title: "Campus Navigation",
    tagline: "Smart campus wayfinding",
    kind: "project" as const,
    image: "/projects/campus-navigation.png",
    highlight: "Real-time room availability",
    stack: ["React", "Node.js", "Google Maps API"],
    href: "",
    description: "Helps students find classrooms, faculty cabins, and free rooms by time slot.",
    longDescription: "Created a navigation system that helps students locate classrooms, faculty cabins, and find available rooms based on time slots, improving campus accessibility.",
  },
  {
    slug: "diabetes-prediction",
    title: "Diabetes risk prediction",
    tagline: "Healthcare ML model",
    kind: "project" as const,
    image: "/projects/diabetes-prediction.png",
    highlight: "Best Presenting Team at NTU",
    stack: ["Python", "Keras", "Flask"],
    href: "",
    description: "Keras model and web interface built at Nanyang Technological University.",
    longDescription: "Built a diabetes risk prediction model using Keras with a Flask web interface during the AI programme at Nanyang Technological University, Singapore. Won Best Presenting Team award.",
  },
];

export const journey = [
  { kind: "learning", period: "Jul 2026 – Present", title: "M.Tech Computer Science", org: "BIT Mesra",
    text: "Pursuing Master of Technology in Computer Science and Engineering at Birla Institute of Technology, Mesra." },
  { kind: "work", period: "May 2026", title: "AI intern", org: "Tata Steel",
    text: "Built a RAG-based safety risk assessment system over 1,000 historical incidents with an explainability panel." },
  { kind: "work", period: "Oct 2025", title: "Full-stack development intern", org: "Infosys Springboard",
    text: "Designed and built MedVault, a healthcare management system." },
  { kind: "learning", period: "Sep 2024", title: "Experiential learning programme", org: "VIT Bhopal",
    text: "Workshops with CDAC, TVS, BSNL, and Bahwan CyberTek on IoT, machine learning, and Industry 4.0 in Bangalore and Chennai." },
  { kind: "learning", period: "Jun 2024", title: "Artificial intelligence 7-day programme", org: "Nanyang Technological University",
    text: "Seven-day AI programme in Singapore. Built a diabetes risk model and won Best Presenting Team award." },
  { kind: "learning", period: "Aug 2022 – May 2026", title: "B.Tech Computer Science", org: "VIT Bhopal",
    text: "Bachelor of Technology in Computer Science and Engineering. CGPA: 8.98/10. Active in English Literary Association as VP." },
];

export const education = [
  { school: "Birla Institute of Technology, Mesra", degree: "M.Tech, Computer Science and Engineering", period: "Jul 2026 – Jul 2028" },
  { school: "VIT Bhopal University", degree: "B.Tech, Computer Science and Engineering", period: "Aug 2022 – May 2026", detail: "CGPA 8.98 / 10" },
];

export const beyondCode = {
  leadership: { role: "Vice President, English Literary Association", period: "Aug 2023 to Jan 2025",
    points: ["Led a club of 50+ members", "Organised open mics and an anti-ragging event drawing 200+ participants", "Secured ₹4,000 in sponsorship for the club"] },
  community: { title: "Service learning, Carmel Junior College", period: "2018 to 2022",
    points: ["Awareness sessions on LGBTQ+ inclusion and bystander intervention", "Eye Care, We Care preventive healthcare initiative", "Pollution check drive"] },
};

export const certifications = [
  "Backend Web Development with JavaScript, Node.js and Express (DevTown)",
  "Programming with JavaScript (Meta)",
  "Frontend Web Development with React.js (Google Developer Student Club)",
  "Software Engineering and Agile Development (Infosys)",
  "Data Structures and Algorithms using Java (Infosys)",
  "Programming using Java (Infosys)",
  "Data Behind LLMs (Infosys)",
  "Database Management System (Infosys)",
  "Blockchain Fundamentals (IBM)",
  "Blockchain Developer (IBM)",
  "DevOps Fundamentals (IBM)",
  "Agile Methodologies (IBM)",
  "Deloitte Australia Data Analytics Job Simulation (Forage)",
];

export const nav = [
  { label: "About", href: "#about" }, { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" }, { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const signoffs = [
  { text: "See you around.", lang: "en" }, { text: "फिर मिलेंगे", lang: "hi" },
  { text: "আবার দেখা হবে", lang: "bn" }, { text: "Bis bald", lang: "de" },
];

export const resume = { href: "" }; // set to "/resume.pdf" once the file is placed in /public

export const greetings = [
  { text: "Hello", lang: "en" },
  { text: "नमस्ते", lang: "hi" },
  { text: "নমস্কার", lang: "bn" },
  { text: "Hallo", lang: "de" },
];

export const about = {
  heading: "I build RAG pipelines, deep learning models, and full-stack web & mobile applications that automate workflows and deliver real-time insights.",
  paragraphs: [
    "I'm a computer science student currently pursuing B.Tech at Birla Institute of Technology, Mesra. I specialize in building AI systems, particularly RAG pipelines and deep learning models, alongside full-stack web and mobile applications.",
    "At Tata Steel, I built a RAG-based safety assessment system that reduced evaluation time from 30 minutes to 5 seconds. During my Infosys internship, I developed MedVault, a comprehensive healthcare management platform. I'm passionate about creating solutions that combine AI, robust backends, and intuitive interfaces.",
  ],
  facts: [
    { label: "Currently", value: "B.Tech in Computer Science & Engineering, BIT Mesra (Till July 2028)" },
    { label: "Previously", value: "B.Tech at VIT Bhopal University (CGPA: 8.98/10.0, graduated May 2026)" },
    { label: "Recent work", value: "AI intern at Tata Steel, Full-stack intern at Infosys" },
    { label: "Languages", value: "English, Hindi, Bengali, and a little German" },
  ],
};

export const skillsSection = {
  heading: "Skills",
  intro: "The tools I reach for most, grouped by the kind of work they do.",
};
