/**
 * ============================================================
 *  PORTFOLIO CONFIG — Devang Jain
 * ============================================================
 *  This is the ONLY file you need to touch to update links,
 *  project data, experience, certifications and achievements.
 *  The rest of the site reads from this object automatically.
 * ============================================================
 */

window.PORTFOLIO_CONFIG = {

  // ---------- IDENTITY ----------
  name: "Devang Jain",
  location: "Jaipur, Rajasthan, India",
  email: "devangjainwork@gmail.com",
  phone: "+91 7073002857",

  // ---------- PRIMARY LINKS ----------
  links: {
    github: "https://github.com/devangjain999",
    linkedin: "https://www.linkedin.com/in/devangjain999",
    leetcode: "https://leetcode.com/u/devangjn999/",
    facebook: "https://www.facebook.com/share/19NXsUJJz2/",
    twitter: "https://x.com/devang_jn999",
    instagram: "https://www.instagram.com/dev.jn.pvtt?stkn=MTFtczRmczZkM2xldw==",
    resume: "assets/resume/Resume.pdf" // existing resume file, already wired up
  },

  // ---------- EDUCATION ----------
  education: [
    {
      degree: "B.Tech — Computer Science & Engineering",
      institution: "Poornima Institute of Engineering & Technology",
      location: "Jaipur, Rajasthan",
      duration: "2023 — 2027",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Maa Bharti Sr. Secondary School",
      location: "Kota, Rajasthan",
      duration: "2021 — 2023",
    }
  ],

  // ---------- EXPERIENCE ----------
  experience: [
    {
      role: "Data Analytics Intern",
      company: "CodeSpazio Solutions Pvt. Ltd.",
      start: "June 2026",
      end: "June 2026",
      description: "Analyzed and visualized data to generate actionable insights and support data-driven decision-making.",
      responsibilities: [],
      tech: ["Python", "Pandas", "NumPy", "Data Visualization", "Power BI", "Excel"],
    },
    {
      role: "UI/UX Developer Intern",
      company: "Euonus IT Pvt. Ltd.",
      start: "July 2025",
      end: "July 2025",
      description: "Designed user-friendly wireframes and prototypes to enhance user experience and interface usability.",
      responsibilities: [],
      tech: ["Wireframing", "Prototyping", "UI/UX Design", "HTML", "CSS"],
    },
    {
      role: "Frontend Developer Intern",
      company: "Vilsa Technologies Pvt. Ltd.",
      start: "July 2024",
      end: "July 2024",
      description: "Developed responsive and interactive web interfaces using modern front-end technologies.",
      responsibilities: [],
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design", "REST APIs"],
    }
  ],

  // ---------- SKILLS ----------
  skills: {
    "Programming": ["Python", "JavaScript", "SQL"],
    "Data Analytics": ["Pandas", "NumPy", "Power BI", "Power Query", "Excel", "Jupyter Notebook", "Matplotlib", "Seaborn"],
    "Web Development": ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js"],
    "AI & Generative AI": ["Generative AI", "LLMs", "RAG", "Multimodal LLM"],
    "Tools": ["Git", "GitHub", "VS Code", "Git Bash"]
  },

  // ---------- FEATURED PROJECTS ----------
  // Shown first, larger cards.
  featuredProjects: [
    {
      name: "DataSage",
      category: "Data Analytics / AI",
      description: "An automated EDA & ML recommendation platform — handles data quality analysis and data cleaning, then recommends ML models using AutoML and feature importance to streamline analysis.",
      tech: ["Python", "Pandas", "Streamlit", "AutoML", "Scikit-learn"],
      github: "https://github.com/devangjain999/DataSage",
      demo: "https://datasage-analysis.streamlit.app/",
      demoLabel: "Live Demo",
      image: "assets/images/DataSage.jpeg"
    },
    {
      name: "LeetCode Profile Analyzer",
      category: "Web Development / Data Visualization",
      description: "A premium, animated LeetCode profile analyzer with real-time stats, skill breakdowns, contest tracking, and side-by-side profile comparison.",
      tech: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "Recharts"],
      github: "https://github.com/devangjain999/Leetcode-Profile-Analyzer",
      demo: "https://leetcode-profile-analyzer-client.vercel.app/",
      demoLabel: "Live Demo",
      image: "assets/images/LeetcodeProfileAnalyzer.jpeg"
    },
    {
      name: "ResumeX AI",
      category: "AI / Generative AI",
      description: "AI-powered resume analyzer that evaluates ATS compatibility, detects skills, and generates professional resume reports.",
      tech: ["Python", "Streamlit", "pdfplumber", "PyPDF2", "Pandas", "Plotly", "ReportLab"],
      github: "https://github.com/devangjain999/ResumeX-AI",
      demo: "https://resume-x-ai-self.vercel.app/",
      demoLabel: "Live Demo",
      image: "assets/images/ResumeX_AI.jpeg"
    },
    {
      name: "Student Exam Performance Analysis",
      category: "Data Analytics",
      description: "Analyzed student performance data using Python, Pandas, and Power BI to identify the impact of attendance, study hours, motivation, and other academic factors on exam scores.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"],
      github: "https://github.com/devangjain999/Student-Exam-Performance-Analysis",
      demo: "POWERBI_LINK_HERE",
      demoLabel: "View Live Dashboard",
      image: "assets/images/Student_Exam_Performance.png"
    }
  ],

  // ---------- OTHER PROJECTS ----------
  otherProjects: [
    {
      name: "Netflix Data Analysis",
      category: "Data Analytics",
      description: "Cleaned, analyzed, and visualized Netflix content data using Python, Pandas, and Power BI to uncover content distribution trends and actionable insights.",
      tech: ["Python", "Pandas", "Power BI", "Jupyter Notebook"],
      github: "https://github.com/devangjain999/Netflix-Data-Analysis",
      demo: "POWERBI_LINK_HERE",
      demoLabel: "View Live Dashboard",
      image: "assets/images/Netflix.png"
    },
    {
      name: "Chat-Assistant",
      category: "Web Development",
      description: "Fast, friendly, and flawlessly smart chat support widget.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/devangjain999/Chat-Assistant",
      demo: "https://chat-assistant-gray.vercel.app/",
      demoLabel: "Live Demo",
      image: "assets/images/ChatAssistant.png"
    },
    {
      name: "Coffee-Creation",
      category: "Web Development",
      description: "Transform your coffee cravings into personalized perfection.",
      tech: ["HTML5", "CSS3"],
      github: "https://github.com/devangjain999/Coffee-Creation",
      demo: "https://coffee-creation.vercel.app/",
      demoLabel: "Live Demo",
      image: "assets/images/Coffee.png"
    },
    {
      name: "Travel Website",
      category: "Web Development",
      description: "Discover new destinations and create memories that last forever.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/devangjain999/Travel-Website",
      demo: "https://travel-website-blue-alpha.vercel.app/",
      demoLabel: "Live Demo",
      image: "assets/images/Travel.png"
    },
    {
      name: "BeautyCare Ecommerce Site",
      category: "Web Development",
      description: "Elevate your glow with premium beauty essentials at your fingertips.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/devangjain999/BeautyCare-Ecommerce-Site",
      demo: "https://beauty-care-ecommerce-site.vercel.app/",
      demoLabel: "Live Demo",
      image: "assets/images/BeautyCare.png"
    },
    {
      name: "Social-Links Platform",
      category: "Web Development",
      description: "One click, every connection — a clean hub for all your social profiles.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/devangjain999/Social-Links",
      demo: "https://allsociallinks.vercel.app/",
      demoLabel: "Live Demo",
      image: "assets/images/Socials.png"
    }
  ],

  // EmailJS — existing values carried over from the previous project.
  // If the form stops working, replace these three with fresh values
  // from your EmailJS dashboard (Account > API Keys, and Email Services / Templates).
  emailjs: {
    publicKey: "sm08AnEPv9i2Vfjzu",
    serviceId: "service_jtnlzjh",
    templateId: "template_1g0ebr8"
  }
};
