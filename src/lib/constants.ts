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

// ========= QUICK ACCESS ITEMS
export type QuickAccessItems = {
    text?: string;
    icon?: string;
    customStyle?: string;
    href?: string;
    withStyle: boolean;
    value?: string;
};

export const quickAccess: QuickAccessItems[] = [
    {icon: "ri:github-fill", withStyle: true, href: "https://github.com/L3iCodes"},
    {icon: "mdi:linkedin", withStyle: true, href: "https://www.linkedin.com/in/jan-wilhelm-sy-8665b9379"},
    {icon: "line-md:email", text: "Email", withStyle: true, href: "mailto:janwilhelmtan.sy@example.com", customStyle: "flex gap-2 px-3!", value: "janwilhelmtan.sy@example.com"},
    {icon: "line-md:clipboard", text: "Resume", withStyle: true, href: process.env.NEXT_PUBLIC_RESUME_LINK, customStyle: "flex gap-2 px-3!"},
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
    {
        company: 'RDMB: Bicol University',
        location: 'Legazpi City, Albay, Philippines',
        role: 'Full Stack Developer',
        date: 'January 2026 - Ongoing',
        desc: 'Continued the implementation of RDESys: Integrated Bank System, a research and proposal submission and monitoring system.',
        contributions: [
            'Improved and implemented additional features that helps optimized the monitoring and submission workflow of researches under the university.',
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