export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  contributions: string[];
  results?: string[];
  problem?: string;
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "medvault",
    number: "01",
    title: "MedVault",
    category: "Full-Stack Development",
    shortDescription: "A comprehensive healthcare management system with appointment scheduling, EMR management, and chatbot integration.",
    fullDescription: "MedVault is a comprehensive healthcare management system developed during my Infosys Springboard full-stack development internship. The platform streamlines healthcare operations by providing appointment scheduling, electronic medical records management, authentication, emergency handling, digital prescriptions, and intelligent chatbot integration.",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "Tailwind CSS", "Python"],
    features: [
      "Appointment scheduling system",
      "Electronic Medical Records (EMR) management",
      "Secure authentication and authorization",
      "Emergency handling workflows",
      "Digital prescription generation",
      "Chatbot integration for patient queries"
    ],
    contributions: [
      "Engineered frontend UI components using React and Tailwind CSS",
      "Developed backend REST APIs with Spring Boot",
      "Designed and optimized MySQL database schema",
      "Integrated chatbot functionality for enhanced user experience"
    ],
    images: ["/projects/medvault/preview.jpg"],
  },
  {
    id: "safety-assessment",
    number: "02",
    title: "AI-powered safety risk assessment system",
    category: "Artificial Intelligence / Full-Stack Development",
    shortDescription: "An AI-powered workplace safety assessment application using RAG to analyze incidents and provide multi-dimensional risk scoring.",
    fullDescription: "An AI-powered workplace safety assessment application developed during my Tata Steel internship. The system leverages Retrieval-Augmented Generation (RAG) to analyze workplace incidents and provide automated risk assessments with explainable results.",
    technologies: ["Python", "Google Gemini", "RAG", "MySQL", "Streamlit"],
    features: [
      "Automated workplace incident assessment",
      "Retrieval of relevant historical incidents from database",
      "Multi-dimensional risk scoring algorithm",
      "Risk classifications: Low, Medium, High, and Extreme",
      "Explainability panel showing matched historical incidents",
      "Real-time analysis and reporting"
    ],
    contributions: [
      "Engineered RAG pipeline over 1,000 historical incidents stored in MySQL",
      "Integrated Google Gemini for intelligent incident analysis",
      "Developed interactive Streamlit interface for risk assessment",
      "Optimized retrieval algorithms for faster query processing"
    ],
    results: [
      "Reduced assessment time from 30 minutes (manual) to approximately 5 seconds",
      "360× faster incident evaluation process",
      "Improved consistency in risk classification"
    ],
    problem: "Manual workplace safety assessments were time-consuming, taking up to 30 minutes per incident, and lacked consistency in risk evaluation across different assessors.",
    images: ["/projects/safety-assessment/preview.jpg"],
  },
  {
    id: "fitwell",
    number: "03",
    title: "FitWell",
    category: "Full-Stack / Health Technology",
    shortDescription: "An AI-powered unified health tracking application with Google Fit integration and ML-based insights.",
    fullDescription: "FitWell is an AI-powered unified health tracking application designed to provide an integrated health monitoring experience. The platform combines real-time health data, diet planning, and machine learning insights to help users maintain a holistic view of their wellness.",
    technologies: ["React Native", "Django REST", "PostgreSQL", "Google Fit"],
    features: [
      "User authentication and secure access",
      "Comprehensive health dashboard",
      "AI-powered diet planner",
      "Real-time health monitoring",
      "Google Fit API integration",
      "RESTful API architecture",
      "ML-based health insight generation"
    ],
    contributions: [
      "Led UI/UX design for mobile application",
      "Integrated Google Fit API for health data synchronization",
      "Developed core health tracking modules",
      "Contributed to data pipeline architecture",
      "Implemented ML-based insights generation"
    ],
    images: ["/projects/fitwell/preview.jpg"],
  },
  {
    id: "campus-mart",
    number: "04",
    title: "Campus Mart: AI Bazar",
    category: "AI / Web Development",
    shortDescription: "An AI-powered hostel marketplace with blur detection and price prediction for student item exchanges.",
    fullDescription: "Campus Mart: AI Bazar is an AI-powered hostel marketplace designed to help students buy, sell, and exchange items efficiently and sustainably. The platform uses machine learning for image quality detection and price prediction to ensure fair transactions.",
    technologies: ["HTML", "CSS", "Python", "Machine Learning", "SMTP"],
    features: [
      "Student marketplace for buying and selling",
      "Product image blur detection model",
      "ML-based price prediction",
      "Email notification system via SMTP",
      "Product categorization",
      "User-friendly interface"
    ],
    contributions: [
      "Developed and integrated blur detection model",
      "Ensured clear product images for accurate price tag recognition",
      "Implemented image preprocessing pipeline",
      "Optimized model for real-time detection"
    ],
    images: ["/projects/campus-mart/preview.jpg"],
  },
  {
    id: "rice-weed",
    number: "05",
    title: "Rice weed detection",
    category: "Deep Learning / Computer Vision",
    shortDescription: "A real-time weed detection system for rice fields using YOLOX-tiny, achieving 0.980 mAP@50.",
    fullDescription: "A real-time weed detection system for rice fields using deep learning models. The project compared eight different detection architectures and implemented an optimized pipeline for precision agriculture applications.",
    technologies: ["Python", "YOLOv8", "YOLOX-tiny", "PyTorch", "OpenCV", "NumPy", "Pandas", "Matplotlib"],
    features: [
      "Real-time weed detection in rice fields",
      "Comparison of eight detection model architectures",
      "PyTorch-based training and inference pipeline",
      "OpenCV-based lightweight implementation",
      "Precision agriculture application",
      "Model performance visualization"
    ],
    contributions: [
      "Trained and evaluated multiple YOLO-based detection models",
      "Optimized YOLOX-tiny for real-time performance",
      "Implemented inference pipeline using PyTorch and OpenCV",
      "Conducted comparative analysis of model architectures"
    ],
    results: [
      "YOLOX-tiny achieved mAP@50 of 0.980",
      "Real-time detection suitable for field deployment",
      "Comparative analysis published in research documentation"
    ],
    problem: "Manual weed identification in rice fields is labor-intensive and time-consuming. Automated detection enables targeted herbicide application, reducing costs and environmental impact.",
    images: ["/projects/rice-weed/preview.jpg"],
  },
  {
    id: "club-management",
    number: "06",
    title: "Club management system",
    category: "Web Development",
    shortDescription: "A university club management website for exploring clubs, events, and accessing club-specific information.",
    fullDescription: "A university club management website designed to help students and faculty explore clubs and access event-related information. The platform provides comprehensive club profiles, event calendars, and image galleries.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Detailed club descriptions and profiles",
      "Previous event archives with information",
      "Upcoming events calendar",
      "Image galleries for each club",
      "Individual club-specific webpages",
      "Responsive design for mobile access"
    ],
    contributions: [
      "Led UI/UX design and research",
      "Conducted data collection from various clubs",
      "Designed and developed individual club webpage layouts",
      "Implemented responsive design patterns"
    ],
    images: ["/projects/club-management/preview.jpg"],
  },
  {
    id: "diabetes-prediction",
    number: "07",
    title: "Diabetes risk prediction model",
    category: "Machine Learning / Web Development",
    shortDescription: "Keras-based diabetes risk prediction model with web interface, built at NTU Singapore. Won Best Presenting Team.",
    fullDescription: "A machine learning model for predicting diabetes risk developed during a seven-day AI programme at Nanyang Technological University, Singapore. The project included both model development with Keras and a web-based interface for risk assessment.",
    technologies: ["Python", "Keras", "HTML", "CSS", "JavaScript"],
    features: [
      "ML model for diabetes risk prediction",
      "Web-based user interface for assessments",
      "Data preprocessing pipeline",
      "Model training and evaluation",
      "Risk score visualization",
      "User-friendly prediction interface"
    ],
    contributions: [
      "Developed Keras-based prediction model",
      "Built web interface for user interactions",
      "Performed data analysis and preprocessing",
      "Presented project findings to panel"
    ],
    results: [
      "Won Best Presenting Team award at NTU Singapore",
      "Successfully deployed functional web application",
      "Achieved accurate diabetes risk predictions"
    ],
    images: ["/projects/diabetes-prediction/preview.jpg"],
  },
];
