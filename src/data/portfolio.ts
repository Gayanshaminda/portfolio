import aiEvaluatorImage from "@/assets/project-ai-evaluator.jpg";
import ecommerceDevOpsImage from "@/assets/project-ecommerce-devops.jpg";
import jobStreamImage from "@/assets/project-job-stream.jpg";
import kafkaAvroImage from "@/assets/project-kafka-avro.jpg";
import secureEvalImage from "@/assets/project-secure-eval.jpg";
import smartCartsImage from "@/assets/project-smart-carts.jpg";
import visionGateImage from "@/assets/project-vision-gate.jpg";

export type Project = {
  title: string;
  completed: string;
  description: string;
  highlights: string[];
  technologies: string[];
  github: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    title: "AI-Powered Project Evaluator & Viva Examiner",
    completed: "Sep 2026",
    description:
      "A full-stack AI-powered platform for conducting project viva examinations with live video sessions, role-based dashboards and AI-generated questioning.",
    highlights: [
      "Django backend with 25+ data models",
      "Next.js frontend with 90+ components",
      "RAG-based question generation",
      "Dual-tier LLM routing",
      "Sentence-transformer retrieval",
      "Agora real-time video and cloud recording",
      "Asynchronous post-session analysis",
      "PostgreSQL and Azure Blob Storage",
    ],
    technologies: [
      "Python",
      "Django",
      "Next.js",
      "React",
      "PostgreSQL",
      "LLM APIs",
      "RAG",
      "sentence-transformers",
      "Agora SDK",
      "Azure",
    ],
    github: "https://github.com/Gayanshaminda/AI_Project_Evaluator_Backend",
    image: aiEvaluatorImage,
    imageAlt: "Abstract connected data network representing the AI project evaluator",
  },
  {
    title: "SecureEval — End-to-End Encrypted File Exchange",
    completed: "May 2026",
    description:
      "A zero-trust secure file-sharing platform designed so that sensitive file content remains encrypted before reaching the server.",
    highlights: [
      "Browser-side AES-256-GCM encryption",
      "RSA-OAEP per-recipient key wrapping",
      "Django REST API and PostgreSQL",
      "Role-based access control",
      "JWT authentication with rotating refresh tokens",
      "SHA-256 hash-chained audit log",
      "Containerized with Docker",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Django REST Framework",
      "PostgreSQL",
      "Docker",
      "Web Crypto API",
    ],
    github: "https://github.com/Adeeshalytics/Secure-End-to-End-File-Transfer",
    image: secureEvalImage,
    imageAlt: "Abstract cryptographic shield representing the SecureEval platform",
  },
  {
    title: "VisionGate — Face Recognition Attendance System",
    completed: "Jun 2026",
    description:
      "A face-recognition attendance platform with liveness detection and a web-based management interface.",
    highlights: [
      "MediaPipe face detection",
      "dlib 128-dimensional embeddings",
      "LBPH classification",
      "5-fold cross-validation using LFW",
      "Blink-based liveness detection",
      "FastAPI backend and Next.js dashboard",
      "18-test automated test suite",
    ],
    technologies: ["Python", "FastAPI", "Next.js", "OpenCV", "MediaPipe", "dlib", "SQLite"],
    github: "https://github.com/Adeeshalytics/VisionGate-Attendence",
    image: visionGateImage,
    imageAlt: "Abstract facial landmark mesh representing the VisionGate system",
  },
  {
    title: "SmartCarts — Cloud-Native Microservices E-Commerce",
    completed: "Jan 2025",
    description:
      "A distributed e-commerce platform designed using independently separated backend services.",
    highlights: [
      "Four-service architecture",
      "API gateway, user, product and order services",
      "Isolated MongoDB databases",
      "HTTP inter-service communication",
      "Redis pub/sub for asynchronous stock updates",
      "Docker and Azure Container Apps",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redis", "Docker", "Azure"],
    github: "https://github.com/Isuru4043/E-commerce-Cloud",
    image: smartCartsImage,
    imageAlt: "Abstract distributed service network representing the SmartCarts platform",
  },
  {
    title: "Kafka Avro Order Processing Pipeline",
    completed: "Sep 2026",
    description:
      "An event-driven order-processing system using Avro-encoded Kafka messages, retry handling, dead-letter routing, live aggregates and a browser dashboard.",
    highlights: [
      "Avro schema and binary message serialization",
      "Kafka producer and real-time consumer",
      "Manual offset commits for reliable processing",
      "Exponential-backoff retry topic",
      "Dead Letter Queue for permanent and exhausted failures",
      "Idempotent forwarding and duplicate suppression",
      "Live running averages and event dashboard",
      "Docker Compose demo and Pytest coverage",
    ],
    technologies: ["Python", "Apache Kafka", "Apache Avro", "Docker", "Pytest", "JavaScript"],
    github: "https://github.com/Gayanshaminda/kafka-avro-order-processing",
    image: kafkaAvroImage,
    imageAlt: "Abstract event-stream pipeline representing Kafka order processing",
  },
  {
    title: "E-Commerce DevOps — Automated AWS Delivery",
    completed: "Apr 2025",
    description:
      "A full-stack e-commerce platform delivered through a containerized CI/CD pipeline with automated AWS infrastructure provisioning and configuration.",
    highlights: [
      "React storefront and administration interface",
      "Express API with MongoDB persistence",
      "JWT authentication, Redis caching and Stripe payments",
      "Dockerized frontend and backend services",
      "Jenkins build, image tagging and deployment pipeline",
      "Terraform-managed VPC, networking and EC2 infrastructure",
      "Ansible-based server configuration and deployment",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Docker",
      "Jenkins",
      "Terraform",
      "Ansible",
      "AWS",
    ],
    github: "https://github.com/Gayanshaminda/E-Commerce-DevOps",
    image: ecommerceDevOpsImage,
    imageAlt: "Abstract continuous-delivery pipeline representing the E-Commerce DevOps project",
  },
  {
    title: "Job Stream — Full-Stack Recruitment Platform",
    completed: "Jan 2026",
    description:
      "A full-stack recruitment platform for discovering jobs, managing company organizations and publishing location-aware job listings.",
    highlights: [
      "Next.js App Router application with TypeScript",
      "WorkOS authentication and organization membership",
      "MongoDB and Mongoose job data model",
      "Create and edit listing workflows using server actions",
      "Multi-field search and location-based filtering",
      "Cloudinary file-upload API",
      "Role-aware company and listing management",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "WorkOS",
      "Cloudinary",
      "Tailwind CSS",
    ],
    github: "https://github.com/Gayanshaminda/Job-Stream",
    image: jobStreamImage,
    imageAlt: "Abstract candidate-to-company matching network representing Job Stream",
  },
];

export const skillGroups = [
  { name: "Frontend", skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  {
    name: "Backend",
    skills: [
      "Python",
      "Node.js",
      "Express",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Spring Boot",
      "REST APIs",
      "WebSockets",
    ],
  },
  { name: "Databases", skills: ["PostgreSQL", "MongoDB", "Redis", "SQLite"] },
  {
    name: "AI / ML",
    skills: [
      "LLM APIs",
      "RAG",
      "sentence-transformers",
      "PyTorch",
      "scikit-learn",
      "OpenCV",
      "MediaPipe",
      "dlib",
    ],
  },
  {
    name: "Cloud / DevOps",
    skills: ["AWS", "Azure", "Docker", "Jenkins", "Terraform", "Ansible", "CI/CD", "Linux"],
  },
  {
    name: "Software Engineering",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Microservices",
      "Automated Testing",
      "Git",
      "GitHub",
      "Jira",
    ],
  },
];
