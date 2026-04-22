export const SERVICES = [
  {
    id: "web-dev",
    title: "Web Engineering",
    description: "Architecting high-performance digital ecosystems with Next.js and Go.",
    icon: "Globe",
    details: "Our web engineering team designs scalable, resilient infrastructures that handle millions of requests. We prioritize Core Web Vitals and edge-computing for peak performance.",
    features: ["Serverless Architecture", "Headless CMS Integration", "Edge Runtime Optimization", "Full-stack SSR/ISR"]
  },
  {
    id: "app-dev",
    title: "Mobile Innovation",
    description: "Next-gen native experiences for iOS and Android.",
    icon: "Smartphone",
    details: "We build intuitive, fluid mobile applications using React Native and Swift, focusing on micro-interactions and seamless offline capabilities.",
    features: ["Biometric Authentication", "Real-time Sync", "Native Bridge Modules", "App Store Optimization"]
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "Custom LLM integrations and automated agentic workflows.",
    icon: "Brain",
    details: "Leverage the power of generative AI to transform your business processes. We specialize in custom LLM fine-tuning and autonomous agent development.",
    features: ["Vector Database Setup", "Custom Agent Workflows", "Sentiment Analysis", "Predictive Analytics"]
  },
  {
    id: "cloud-solutions",
    title: "Cloud Infrastructure",
    description: "Enterprise-grade multi-cloud scaling and disaster recovery.",
    icon: "Cloud",
    details: "Zero-downtime migrations and kubernetes-orchestrated environments. We manage your devops so you can focus on code.",
    features: ["K8s Orchestration", "CI/CD Pipeline Design", "Auto-scaling Groups", "Security Auditing"]
  }
];

export const PRODUCTS = [
  {
    id: "forge-erp",
    title: "ForgeOS ERP",
    type: "Enterprise Intelligence",
    description: "The neural network for your modern manufacturing plant.",
    icon: "LayoutDashboard",
    features: ["Predictive Maintenance", "Smart Inventory", "Global Supply Chain Sync"],
    overview: "ForgeOS is not just an ERP. It is an intelligent layer that sits above your operations, predicting bottlenecks before they happen."
  },
  {
    id: "nexus-crm",
    title: "Nexus CRM",
    type: "Customer Relationship Management",
    description: "AI-driven customer insights and workflow automation.",
    icon: "Users",
    features: ["Lead Scoring", "Automated Outreach", "Predictive Analytics"],
    overview: "A highly intelligent CRM that learns from your sales team's successes and builds tailored outreach campaigns."
  },
  {
    id: "horizon-hr",
    title: "Horizon HRMS",
    type: "Human Resources",
    description: "Next-generation talent management and payroll processing.",
    icon: "Briefcase",
    features: ["Automated Onboarding", "Global Payroll Sync", "Performance Tracking"],
    overview: "Manage your global workforce with seamless compliance tracking and AI-powered performance reviews."
  },
  {
    id: "aegis-security",
    title: "Aegis CyberSec",
    type: "Security & Analytics",
    description: "Military-grade threat detection & continuous monitoring.",
    icon: "ShieldAlert",
    features: ["Zero-Trust Architecture", "Anomaly Detection", "Automated Penetration Testing"],
    overview: "Keep your infrastructure secure with continuous monitoring and automated defensive countermeasures."
  },
  {
    id: "pulse-analytics",
    title: "Pulse BI Analytics",
    type: "Data Intelligence",
    description: "Real-time interactive dashboards powered by machine learning.",
    icon: "BarChart3",
    features: ["Real-time Data Sync", "Custom Dashboards", "Predictive Modeling"],
    overview: "Turn raw data into actionable business intelligence with instant, stunning visualizations."
  },
  {
    id: "quantum-ecommerce",
    title: "Quantum E-Commerce",
    type: "Retail Platform",
    description: "Headless, high-performance digital storefronts.",
    icon: "ShoppingCart",
    features: ["Headless CMS", "One-Click Checkout", "Global Tax Compliance"],
    overview: "A fully custom digital retail experience meant for massive scaling and lightning-fast checkout."
  }
];

export const PORTFOLIO = [
  {
    id: "nexus-finance",
    title: "Nexus Digital Banking",
    client: "Global Capital",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    description: "Redefining trust in digital assets with military-grade security.",
    overview: "We built a zero-trust banking interface for the next generation of financial institutions.",
    challenge: "Global Capital was facing frequent intrusion attempts and an outdated legacy AS400 core banking system, making mobile banking impossible.",
    solution: "We implemented a complete strangler-fig migration to a microservices architecture hosted on AWS with zero-trust network protocols and a React frontend.",
    demo: "https://example.com/nexus",
    technologies: ["React", "FastAPI", "PostgreSQL", "Tailwind"]
  },
  {
    id: "aether-med",
    title: "Aether Health Suite",
    client: "BioLogic Systems",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1576091160550-217359f41f18?auto=format&fit=crop&q=80&w=2000",
    description: "AI-assisted diagnostics platform for precision medicine.",
    overview: "Connecting practitioners with real-time patient data streams and predictive diagnostic tools.",
    challenge: "Patient data was siloed across hospitals, resulting in delayed diagnoses and fragmented care records.",
    solution: "A unified SaaS platform utilizing HIPAA-compliant AWS pipelines and machine-learning models to pre-analyze radiology images.",
    demo: "https://example.com/aether",
    technologies: ["Python", "TensorFlow", "React", "AWS"]
  },
  {
    id: "stratos-aero",
    title: "Stratos Avionics UI",
    client: "Stratos Aerospace",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000",
    description: "Next-gen flight management interface for commercial jets.",
    overview: "A highly responsive, error-tolerant interface designed for pilot efficiency under critical conditions.",
    challenge: "Existing UIs were prone to visual clutter, increasing pilot cognitive load during emergencies.",
    solution: "We engineered a WebGL-based UI that strictly adheres to aviation visual standards, providing contextual UI elements that only appear when necessary.",
    demo: "https://example.com/stratos",
    technologies: ["React Native", "WebGL", "Rust", "embedded Linux"]
  },
  {
    id: "omnislash-gaming",
    title: "Omnislash E-Sports",
    client: "Omnislash",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2000",
    description: "A social nexus for competitive gamers to share real-time stats.",
    overview: "A deep integration with global gaming APIs to track, rank, and visualize player statistics worldwide.",
    challenge: "Handling millions of concurrent websocket connections during major global esports tournaments without lag.",
    solution: "A globally distributed Redis caching layer alongside a Next.js edge-rendered frontend to serve real-time stats.",
    demo: "https://example.com/omnislash",
    technologies: ["Next.js", "GraphQL", "Redis", "Framer Motion"]
  },
  {
    id: "forge-manufacturing",
    title: "ForgeOS Factory Control",
    client: "Industrial Core",
    category: "ERP",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=2000",
    description: "Enterprise resource planning for smart manufacturing floors.",
    overview: "Connecting IoT sensors with a powerful AI backend to predict assembly bottlenecks.",
    challenge: "Massive influx of IoT data from factory machinery was crashing legacy monitoring tools.",
    solution: "Built a highly resilient Kubernetes backend that processes streaming data and displays it on an interactive control dashboard.",
    demo: "https://example.com/forgeos",
    technologies: ["React", "Node.js", "MongoDB", "Kubernetes"]
  },
  {
    id: "lumina-retail",
    title: "Lumina Point of Sale",
    client: "Lumina Boutiques",
    category: "POS",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000",
    description: "Lightning-fast global retail checkout system.",
    overview: "A deeply optimized offline-first inventory and checkout system for massive retail chains.",
    challenge: "Stores suffered downtime when internet connections dropped, halting all sales globally.",
    solution: "An offline-first Electron application that syncs transparently via GraphQL mutations when connectivity is restored.",
    demo: "https://example.com/lumina",
    technologies: ["Vue", "Electron", "GraphQL", "Docker"]
  },
  {
    id: "zenith-marketplace",
    title: "Zenith Storefront",
    client: "Zenith Goods",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=2000",
    description: "Headless E-commerce engine handling millions in daily volume.",
    overview: "Ultra-fast headless architecture integrating global shipping logistics.",
    challenge: "The previous monolithic eCommerce site was slow and struggled during Black Friday traffic spikes.",
    solution: "A complete headless rebuild using Next.js on Vercel, decoupled from Shopify backend to ensure instantaneous load times.",
    demo: "https://example.com/zenith",
    technologies: ["Next.js", "Shopify", "Tailwind", "Vercel"]
  }
];

export const TECHNOLOGIES_LIST = [
  { name: "React", icon: "⚛" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "Node.js", icon: "🟢" },
  { name: "Laravel", icon: "🟣" },
  { name: "Vue.js", icon: "💚" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "AWS", icon: "☁" },
  { name: "Docker", icon: "🐳" }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Alex Rivers",
    position: "CTO, TechFlow",
    text: "PitchForge transformed our legacy systems into a high-performance marvel. Their attention to futuristic design is unmatched.",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    id: 2,
    name: "Sarah Chen",
    position: "Founder, Bloom Digital",
    text: "The speed and quality of delivery were exceptional. They didn't just build an app; they built a vision.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 3,
    name: "Marcus Thorne",
    position: "Product Lead, Stellar",
    text: "Working with PitchForge felt like having a partner from the future. Their tech stack is truly cutting-edge.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  }
];

export const TEAM = [
  {
    name: "Ethan Wright",
    role: "CEO & Founder",
    image: "https://i.pravatar.cc/300?u=ethan"
  },
  {
    name: "Lila Vance",
    role: "Head of Design",
    image: "https://i.pravatar.cc/300?u=lila"
  },
  {
    name: "Julian Cross",
    role: "Chief Architect",
    image: "https://i.pravatar.cc/300?u=julian"
  },
  {
    name: "Sophia Reed",
    role: "Product Manager",
    image: "https://i.pravatar.cc/300?u=sophia"
  }
];

export const FAQS = [
  {
    question: "How long does a typical project take?",
    answer: "Most medium-sized projects take 8-12 weeks from discovery to deployment."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we provide 24/7 maintenance and support packages tailored to your needs."
  },
  {
    question: "What tech stack do you recommend?",
    answer: "We primarily work with React, Next.js, and Node.js for high-performance web solutions, but we adapt to the best tool for the specific job."
  }
];

export const TECHNOLOGIES = [
  "ReactJS", "Next.js", "TypeScript", "Java", "Python", ".NET", "Laravel", "Vue.js", "Node.js", "Go", "Docker", "AWS", "Kubernetes", "MongoDB", "PostgreSQL", "TensorFlow"
];

export const CLIENTS = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg"
];

export const INSIGHTS = [
  {
    id: 1,
    title: "The Future of Scalable Microservices",
    category: "Architecture",
    date: "March 12, 2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
    excerpt: "Exploring how distributed systems are evolving to handle billions of requests per second."
  },
  {
    id: 2,
    title: "AI-Driven Digital Transformation",
    category: "AI/ML",
    date: "April 05, 2024",
    image: "https://images.unsplash.com/photo-1620825937374-87fc7d628302?auto=format&fit=crop&q=80&w=2000",
    excerpt: "How enterprises are leveraging LLMs to automate complex decision-making processes."
  },
  {
    id: 3,
    title: "Design Systems in Modern SaaS",
    category: "Design",
    date: "April 18, 2024",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2000",
    excerpt: "Building cohesive visual languages that scale across multiple product lines."
  }
];
