// ========= PROFILE IMAGE
import profileSrc from '../components/img/Sample-Profile.jpg';
export const profileImage = profileSrc;

// ========= NAVIGATION ITEMS
export type NavigationItem = {
  name: string;
  href: string;
  icon: string;
};

export const navigation = [
    {name: "Home", href: "/", icon: "bx:home-alt-2"},
    {name: "Projects", href: "/projects", icon: "material-symbols:work-outline"},
    {name: "About", href: "/about", icon: "iconamoon:profile"},
];


// ========= SOCIAL LINKS
export type SocialLink = {
  icon: string;
  href: string;
};

export const socials = [
    {icon: "ri:github-fill", href: "https://github.com/L3iCodes"},
    {icon: "mdi:linkedin", href: "https://www.linkedin.com/in/jan-wilhelm-sy-8665b9379"},
    {icon: "ic:baseline-facebook", href: "https://www.facebook.com/janwilhelm.sy/"},
];


// ========= TECH STACKS
export type TechStackItems = {
    name: string;
    icon: string;
    color?: string;
};

export const technologies: Record<string, TechStackItems> = {
  react:        { name: "React", icon: "akar-icons:react-fill", color: "#4A90E2" },
  nextjs:       { name: "NextJS", icon: "ri:nextjs-fill", color: "#F9A825" },
  tailwind:     { name: "Tailwind", icon: "mdi:tailwind", color: "#06B6D4" },
  daisyui:      { name: "DaisyUI", icon: "simple-icons:daisyui", color: "#EFCB68" },

  nodejs:       { name: "NodeJS", icon: "mdi:nodejs", color: "#68A063" },
  express:      { name: "Express", icon: "simple-icons:express", color: "#F9A825" },
  mongodb:      { name: "MongoDB", icon: "simple-icons:mongodb", color: "#47A248" },
  mysql:        { name: "MySQL", icon: "devicon:mysql", color: "#00758F" },

  zustand:      { name: "Zustand", icon: "fluent:border-none-24-regular", color: "#FBBF24" },
  socketio:     { name: "Socket.io", icon: "simple-icons:socketdotio", color: "#010101" },

  python:       { name: "Python", icon: "proicons:python", color: "#3776AB" },
  tensorflow:   { name: "Tensorflow", icon: "simple-icons:tensorflow", color: "#FF6F00" },

  github:       { name: "GitHub", icon: "meteor-icons:github", color: "#333333" },
  vscode:       { name: "VS Code", icon: "codicon:vscode", color: "#007ACC" },
  figma:        { name: "Figma", icon: "solar:figma-bold", color: "#A948FF" },
};


export const allStack: Record<string, TechStackItems> = {
  React: { name: "React", icon: "akar-icons:react-fill", color: "#4A90E2" },
  NextJS: { name: "NextJS", icon: "ri:nextjs-fill", color: "#F9A825" },
  Tailwind: { name: "Tailwind", icon: "mdi:tailwind", color: "#06B6D4" },
  NodeJS: { name: "NodeJS", icon: "mdi:nodejs", color: "#68A063" },
  Express: { name: "Express", icon: "simple-icons:express", color: "#F9A825" },
  MongoDB: { name: "MongoDB", icon: "lineicons:mongodb", color: "#47A248" },
  MySQL: { name: "MySQL", icon: "lineicons:mongodb", color: "#00758F" },
  Python: { name: "Python", icon: "proicons:python", color: "#3776AB" },
  Tensorflow: { name: "Tensorflow", icon: "simple-icons:tensorflow", color: "#FF6F00" },
  GitHub: { name: "GitHub", icon: "meteor-icons:github", color: "#333333" },
  "VS Code": { name: "VS Code", icon: "codicon:vscode", color: "#007ACC" },
  Figma: { name: "Figma", icon: "solar:figma-bold", color: "#A948FF" },
};


export const featuredStack: Record<string, TechStackItems> = {
    React: { name: "React", icon: "akar-icons:react-fill", color: "#4A90E2" },
    NextJS: { name: "NextJS", icon: "ri:nextjs-fill", color: "#F9A825" },
    NodeJS: { name: "NodeJS", icon: "mdi:nodejs", color: "#68A063" },
    Express: { name: "Express", icon: "simple-icons:express", color: "#F9A825" },
    MongoDB: { name: "MongoDB", icon: "lineicons:mongodb", color: "#47A248" },
    MySQL: { name: "MySQL", icon: "lineicons:mongodb", color: "#00758F" },
    "VS Code": { name: "VS Code", icon: "codicon:vscode", color: "#007ACC" },
    "Figma": { name: "Figma", icon: "solar:figma-bold", color: "#A948FF" },
};


// ========= QUICK ACCESS ITEMS
type QuickAccessItems = {
    text?: string;
    icon?: string;
    customStyle?: string;
    href?: string;
    withStyle: boolean;
};

export const quickAccess: QuickAccessItems[] = [
    {icon: "ri:github-fill", withStyle: true, href: "https://github.com/L3iCodes"},
    {icon: "mdi:linkedin", withStyle: true, href: "https://www.linkedin.com/in/jan-wilhelm-sy-8665b9379"},
    {text: "Email", withStyle: true, customStyle: "px-5!"},
    {text: "(+69) 961 365 5723", withStyle: false, customStyle: "hover:bg-base-200"},
];

// ========= EXPERIENCES ITEM(S)
export type ExperienceItems = {
    company: string;
    location: string;
    role: string;
    date: string;
    desc: string;
    contributions?: string[];
};

export const experiences: ExperienceItems[] = [
    {
        company: 'Iraya Energies',
        location: 'Kuala Lumpur, Malaysia (Remote)',
        role: 'Student Intern',
        date: 'June 2024 - July 2024',
        desc: 'Engineered and deployed Raya, an advanced AI chatbot application for conversational document retrieval.',
        contributions: [
            'Architected and implemented Retrieval-Augmented Generation (RAG) architecture.',
            'Developed core AI logic using OLLAMA and LlamaIndex for multi-document agent capabilities.',
            'Built a responsive UI with Streamlit and containerized the application using Docker.',
        ]
    },
];


// ========= EDUCATIONS ITEMS
export type EducationItems = {
    school: string;
    course: string;
    date: string;
};

export const educations: EducationItems[] = [
    {
        school: "Bicol University - College of Science",
        course: "BS Computer Science - cum laude",
        date: "August 2021 - June 2025",
    },
    {
        school: "STI College of Legazpi",
        course: "Information Communication Technology",
        date: "August 2019 - June 2021",
    },
];