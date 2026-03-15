export type JourneyItem = {
  title: string;
  period: string;
  details: string;
  bullets: string[];
};

export type Project = {
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  impact: string;
};

export type StackGroup = {
  category: string;
  description: string;
  items: string[];
};

export type ResumeExperience = {
  role: string;
  track: string;
  year: string;
  summary: string;
};

export type HackathonExperience = {
  event: string;
  role: string;
  period: string;
  highlights: string[];
  repo?: string;
};

export type SkillsGroup = {
  category: string;
  items: string[];
};

export const portfolioData = {
  identity: {
    fullName: "John Loyd Viray",
    preferredName: "Loyd",
    location: "Philippines",
    headline:
      "AI Engineer Intern | BSIT Student | Building AI-powered ERP/CRM automation",
    rotatingRoles: [
      "AI Engineer Intern",
      "Full-Stack Developer",
      "AI-Powered Business Automation Builder",
      "Aspiring ML/LLMOps Engineer"
    ],
    shortPositioning:
      "I build AI-powered features for ERP/CRM workflows and business automation. I work end-to-end across backend, frontend, databases, and deployment with focus on clean architecture, reliability, and real-world product delivery.",
    about:
      "I am a fourth-year BSIT student and AI Engineer Intern building end-to-end AI-powered web applications for real business workflows. My stack includes Python, FastAPI, SQLAlchemy, PostgreSQL, React, TypeScript, Docker, and deployment platforms like Coolify.",
    aboutExtended:
      "My interests center on LLM applications, RAG systems, tool-calling agents, backend architecture, production reliability, and business automation. I prioritize separation of concerns, maintainability, and product thinking over demo-only implementations.",
    longTerm:
      "I am growing toward AI engineering, MLOps/LLMOps, and production-ready intelligent systems that combine backend engineering, data systems, frontend UX, deployment, and evaluation."
  },
  availability: {
    status: "Open to internship opportunities",
    note: "Available for AI engineering, backend, and product-focused collaborations."
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Journey", href: "#journey" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Learning", href: "#learning" },
    { label: "Contact", href: "#contact" }
  ],
  quickFacts: [
    { label: "Education", value: "BSIT, PUP Biñan Campus" },
    { label: "Year Level", value: "4th-year student" },
    { label: "Expected Graduation", value: "October 2026" },
    { label: "Core Track", value: "AI-powered ERP/CRM automation" }
  ],
  heroStat: {
    label: "Internship Readiness Index",
    score: "PH-100",
    detail: "Focused on production-style AI system delivery"
  },
  currentFocus: [
    "AI-powered ERP/CRM workflows",
    "FastAPI backend architecture",
    "React + TypeScript frontend development",
    "Docker and deployment",
    "RAG systems",
    "LangChain / LangGraph",
    "Tool-calling AI assistants",
    "Production-ready AI applications",
    "LLMOps / MLOps growth"
  ],
  workValues: [
    {
      title: "System Thinking",
      description:
        "I design features with clear boundaries across API layers, business logic, and persistence."
    },
    {
      title: "Reliability First",
      description:
        "I focus on maintainability, observability, and real-world edge handling before adding complexity."
    },
    {
      title: "Product Mindset",
      description:
        "I build with end users and business workflow outcomes in mind, not just technical novelty."
    }
  ],
  journey: [
    {
      title: "AI Engineer Intern",
      period: "Current",
      details:
        "Building AI-enabled workflow features with practical delivery standards and full-stack ownership.",
      bullets: [
        "Contribute to AI-powered ERP/CRM workflow automation",
        "Implement backend APIs, data models, and frontend workflows",
        "Apply clean architecture patterns for production readiness"
      ]
    },
    {
      title: "BSIT Academic Journey",
      period: "4th Year • Expected graduation: October 2026",
      details:
        "Formal IT training combined with strong project-first execution in software and data-driven systems.",
      bullets: [
        "Bachelor of Science in Information Technology",
        "Polytechnic University of the Philippines (PUP) Biñan Campus",
        "Consistent focus on practical software engineering and applied AI"
      ]
    },
    {
      title: "Portfolio Project Builder",
      period: "Ongoing",
      details:
        "Developing end-to-end projects that mirror real client constraints and production architecture.",
      bullets: [
        "FastAPI + PostgreSQL backend design",
        "React + TypeScript interface delivery",
        "Dockerized local and deployment-ready workflows"
      ]
    },
    {
      title: "Continuous AI Growth",
      period: "Current focus",
      details:
        "Structured learning path across LLM apps, RAG, tool calling, and operational maturity.",
      bullets: [
        "LangChain / LangGraph orchestration approaches",
        "LLMOps and MLOps fundamentals for production systems",
        "Evaluation-driven iteration for assistant quality"
      ]
    }
  ] as JourneyItem[],
  stack: [
    {
      category: "Frontend",
      description: "Modern, responsive interfaces with clean component architecture.",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"]
    },
    {
      category: "Backend",
      description: "API-focused architecture and robust data-layer design.",
      items: [
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "Pydantic",
        "Java",
        "PostgreSQL",
        "MySQL"
      ]
    },
    {
      category: "AI / Data",
      description: "LLM application workflows and retrieval-driven intelligence patterns.",
      items: [
        "OpenAI API",
        "LangChain",
        "LangGraph",
        "RAG",
        "Prompt Engineering",
        "AI Agent Building",
        "pandas",
        "NumPy",
        "scikit-learn",
        "Matplotlib",
        "Data Cleaning",
        "Preprocessing",
        "Feature Engineering",
        "Model Evaluation",
        "Embeddings",
        "Vector Databases",
        "Classic ML Basics"
      ]
    },
    {
      category: "DevOps / Tools",
      description: "Containerization, deployment, and team-ready collaboration workflows.",
      items: [
        "Docker",
        "Docker Compose",
        "Coolify",
        "Git",
        "GitHub",
        "GitHub Actions",
        "Postman",
        "Jupyter Notebook",
        "VS Code",
        "Excel",
        "Power BI"
      ]
    }
  ] as StackGroup[],
  skillsGroups: [
    {
      category: "Core Strengths",
      items: [
        "Problem-solving",
        "Analytical thinking",
        "Quick Learner",
        "Adaptability",
        "Attention to Detail",
        "Clear Communication",
        "Teamwork and Collaboration",
        "Time Management"
      ]
    }
  ] as SkillsGroup[],
  projects: [
    {
      title: "AI CRM Assistant",
      summary:
        "Production-style AI CRM platform designed as an end-to-end business system, from service architecture to user workflows.",
      highlights: [
        "FastAPI backend with clean architecture and separated service layers",
        "React + TypeScript frontend with business-focused user flows",
        "PostgreSQL + SQLAlchemy integration for core CRM entities",
        "Dockerized development and deployment-ready structure"
      ],
      stack: ["FastAPI", "React", "TypeScript", "PostgreSQL", "SQLAlchemy", "Docker"],
      impact:
        "Built to mirror real client-style constraints and demonstrate full product ownership from database to UI."
    },
    {
      title: "AI Customer Support Copilot (Memory + RAG + Tool Calling)",
      summary:
        "End-to-end assistant for support operations that answers policy questions, routes intent, and triggers escalation when needed.",
      highlights: [
        "RAG pipeline for grounded support answers",
        "Session memory for context-aware responses",
        "Tool-calling for structured lookup actions",
        "Routing and escalation logic for safer support flow"
      ],
      stack: [
        "FastAPI",
        "React",
        "LangChain",
        "LangGraph",
        "RAG",
        "Tool Calling"
      ],
      impact:
        "Demonstrates multi-step orchestration and practical AI behavior beyond single-shot chatbot interactions."
    },
    {
      title: "RAG Policy Assistant",
      summary:
        "Document-aware assistant for employee handbook and policy use cases with retrieval quality and response trust as priorities.",
      highlights: [
        "PDF ingestion, chunking, and embedding pipeline",
        "Vector retrieval for context-aware answering",
        "Citation-aware responses with fallback behavior",
        "Backend API service integrated with frontend query flow"
      ],
      stack: ["Python", "FastAPI", "RAG", "Embeddings", "Vector Search", "React"],
      impact:
        "Transforms static policy documents into usable operational knowledge for internal teams."
    },
    {
      title: "Credit Risk Predictor",
      summary:
        "Machine learning project focused on practical risk prediction workflow, evaluation discipline, and business-driven outputs.",
      highlights: [
        "Structured ML workflow from feature prep to scoring concepts",
        "Evaluation mindset centered on model behavior and tradeoffs",
        "Business use-case framing for risk-related decision support",
        "Deployment-aware thinking for real implementation constraints"
      ],
      stack: ["Python", "Machine Learning", "Data Analysis", "Model Evaluation"],
      impact:
        "Showcases data and ML fundamentals with attention to reliability and real decision contexts."
    }
  ] as Project[],
  hackathons: [
    {
      event: "Hack-A-Street Challenge",
      role: "Hackathon Participant",
      period: "Jan 2025",
      highlights: [
        "Contributed to UI/UX, user research, and pitching for a pedestrian-safety solution."
      ]
    },
    {
      event: "Ship or Be Shipped 2025 (Build & Ship PH)",
      role: "Hackathon Participant",
      period: "2025",
      highlights: [
        "Built 7 MVP AI agent applications during a 24-hour sprint.",
        "Collaborated on product design and pitching."
      ]
    },
    {
      event: "Pie & AI: Manila (AI Hive IOML Vibe Hack 2.0)",
      role: "Hackathon Participant",
      period: "Oct 2025",
      highlights: [
        "Built LabLens AI, an AI agent that helps users analyze lab results by extracting values, checking reference ranges, and generating easy-to-understand insights with basic recommendations (with disclaimer)."
      ],
      repo: "https://github.com/Loyd22/LabLens-AI"
    }
  ] as HackathonExperience[],
  recentCertifications: [
    {
      title: "Huawei Datacom 1st Level",
      source: "Huawei ICT Academy"
    },
    {
      title: "Software Engineering Foundations",
      source: "Continuous learning track"
    },
    {
      title: "Prompt Engineering Practice",
      source: "Applied portfolio workflow"
    }
  ],
  experienceResume: [
    {
      role: "AI Engineer Intern",
      track: "Practical AI engineering",
      year: "Current",
      summary:
        "Contributing to ERP/CRM automation features with backend APIs, workflow logic, and production-minded architecture."
    },
    {
      role: "Aspiring Full-Stack Developer",
      track: "End-to-end delivery",
      year: "Ongoing",
      summary:
        "Building complete systems across React + TypeScript frontend, FastAPI backend, and PostgreSQL data models."
    },
    {
      role: "Software Engineering Builder",
      track: "Portfolio execution",
      year: "2025",
      summary:
        "Shipped project implementations for CRM workflows, RAG support assistants, and ML-oriented business use cases."
    },
    {
      role: "BSIT Student",
      track: "Academic progression",
      year: "Expected graduation: October 2026",
      summary:
        "Completing Information Technology degree at Polytechnic University of the Philippines (PUP) Biñan Campus."
    }
  ] as ResumeExperience[],
  recommendations: [
    {
      title: "What I value in my work",
      body:
        "Clear architecture, responsible AI behavior, and delivery quality that teams can trust in production."
    },
    {
      title: "Working style",
      body:
        "I break down complex problems into maintainable modules and build with long-term reliability in mind."
    }
  ],
  experiments: [
    {
      title: "AI Presentation Generation Concepts",
      description:
        "Exploring workflow pipelines that transform business briefs into structured slide drafts with reusable templates."
    },
    {
      title: "Automation Prototypes",
      description:
        "Testing AI-assisted ERP/CRM automations for repetitive operations, notifications, and cross-system orchestration."
    },
    {
      title: "ML and Data Experiments",
      description:
        "Hands-on modeling and data iteration exercises to strengthen practical intuition for prediction systems."
    },
    {
      title: "Future LLMOps Build Track",
      description:
        "Preparing for robust evaluation, monitoring, and deployment patterns for reliable LLM-enabled applications."
    }
  ],
  gallery: [
    { src: "/gallery/work-1.svg", alt: "Project snapshot placeholder 1" },
    { src: "/gallery/work-2.svg", alt: "Project snapshot placeholder 2" },
    { src: "/gallery/work-3.svg", alt: "Project snapshot placeholder 3" },
    { src: "/gallery/work-4.svg", alt: "Project snapshot placeholder 4" },
    { src: "/gallery/work-5.svg", alt: "Project snapshot placeholder 5" }
  ],
  learning: [
    {
      title: "LLM App Engineering",
      status: "Active",
      description:
        "Advancing practical skills in retrieval quality, tool orchestration, and agent reliability."
    },
    {
      title: "MLOps / LLMOps Foundations",
      status: "In Progress",
      description:
        "Developing a stronger approach to testing, deployment workflows, and operational observability."
    },
    {
      title: "Backend System Design",
      status: "Ongoing",
      description:
        "Deepening architecture decisions around service boundaries, data integrity, and scaling patterns."
    }
  ],
  contact: {
    github: "https://github.com/Loyd22",
    linkedin: "https://www.linkedin.com/in/loydviray/",
    email: "mailto:johnloydviray22@gmail.com",
    phone: "tel:0929249953"
  }
};

export type PortfolioData = typeof portfolioData;
