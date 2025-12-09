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

type feature = {
    name: string;
    desc: string;
}

// ========= SAMPLE PROJECT
import sample1 from '../components/img/Verta-Cover.png'
import sample2 from '../components/img/Strive-Cover.png'
import { StaticImageData } from 'next/image';
import { projectCoverColors } from './styles';

export type ProjectItems = {
    _id: string;
    title: string;
    subtitle: string;
    coverImg?: string | StaticImageData;
    coverBg: projectCoverColors
    overview: string;
    features: feature[];
    tech: string[];
    github: string;
    live?:string;
    gallery?: string[];
    featured: boolean;
};

export const sample_projects: ProjectItems[] = [
    {
        _id: '0',
        title: 'Verta',
        subtitle: 'A React-based Realtime Chat Application',
        coverImg: sample1,
        coverBg: 'purple',
        overview: 'Verta is designed as a simple messaging application where users can sign up, log in, customize their profile, and chat in real time. The project serves as a playground for learning full-stack development, experimenting with UI/UX design (utilizing Daisy UI), and practicing real-time features with WebSockets.io.',
        features: [
            {
                name: 'Login / Signup',
                desc: 'Authentication system for account creation and secure login.'
            },
            {
                name: 'Realtime Chat',
                desc: 'Send and receive messages instantly with WebSocket integration.'
            },
            {
                name: 'Delete Messages',
                desc: 'Soft delete messages with a “Message Deleted” indicator.'
            },
            {
                name: 'Profile Management',
                desc: 'Update personal details and change profile picture.'
            },
            {
                name: 'Settings (Theme Change)',
                desc: 'Switch between different themes to personalize the chat experience.'
            },
        ],
        tech: ['React', 'Tailwind', 'DaisyUI', 'NodeJS', 'Express', 'Socket.io'],
        github: 'https://github.com/L3iCodes/Verta',
        featured: true,
    },
    {
        _id: '1',
        title: 'Project 3',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        coverImg: sample2,
        coverBg: 'blue',
        overview: 'Strive is a powerful and intuitive productivity and Kanban application designed to help individuals and teams organize tasks, manage projects, and achieve goals efficiently. Built with React for a dynamic front-end and Node.js for a robust backend, Strive supports real-time collaboration to keep everyone on the same page.',
        features: [
            {
                name: 'Home Dashboard',
                desc: 'Quickly access your recent activity, personal boards, and boards shared with you. A centralized place to start your workday. '
            },
            {
                name: 'Board Creation',
                desc: 'Easily create new project boards. Choose from useful templates.'
            },
            {
                name: 'Sections/Columns Management',
                desc: 'Create custom sections (columns) to represent stages in your workflow.'
            },
            {
                name: 'Task Management',
                desc: 'Full control over individual tasks with editable fields:'
            },
            {
                name: 'Intuitive Drag and Drop',
                desc: ' Easily reorder sections and move tasks between columns for a seamless and highly visual workflow management experience.'
            },
            {
                name: 'Real-Time Collaboration',
                desc: 'Invite other users to your boards and experience real-time updates as you collaborate on projects. '
            },
        ],
        tech: ['React', 'Tailwind', 'DaisyUI', 'NodeJS', 'Express', 'Socket.io'],
        github: 'https://github.com/L3iCodes/Strive',
        live: 'strive-ucod.onrender.com/',
        featured: true,
    },

    {
        _id: '2',
        title: 'Project 4',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        coverImg: sample1,
        coverBg: 'purple',
        overview: 'Verta is designed as a simple messaging application where users can sign up, log in, customize their profile, and chat in real time. The project serves as a playground for learning full-stack development, experimenting with UI/UX design (utilizing Daisy UI), and practicing real-time features with WebSockets.io.',
        features: [
            {
                name: 'Login / Signup',
                desc: 'Authentication system for account creation and secure login.'
            },
            {
                name: 'Realtime Chat',
                desc: 'Send and receive messages instantly with WebSocket integration.'
            },
            {
                name: 'Delete Messages',
                desc: 'Soft delete messages with a “Message Deleted” indicator.'
            },
            {
                name: 'Profile Management',
                desc: 'Update personal details and change profile picture.'
            },
            {
                name: 'Settings (Theme Change)',
                desc: 'Switch between different themes to personalize the chat experience.'
            },
        ],
        tech: ['React', 'Tailwind', 'DaisyUI', 'NodeJS', 'Express', 'Socket.io'],
        github: 'https://github.com/L3iCodes/Verta',
        featured: false,
    },
    {
        _id: '3',
        title: 'Project 5',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        coverImg: sample2,
        coverBg: 'green',
        overview: 'Strive is a powerful and intuitive productivity and Kanban application designed to help individuals and teams organize tasks, manage projects, and achieve goals efficiently. Built with React for a dynamic front-end and Node.js for a robust backend, Strive supports real-time collaboration to keep everyone on the same page.',
        features: [
            {
                name: 'Home Dashboard',
                desc: 'Quickly access your recent activity, personal boards, and boards shared with you. A centralized place to start your workday. '
            },
            {
                name: 'Board Creation',
                desc: 'Easily create new project boards. Choose from useful templates.'
            },
            {
                name: 'Sections/Columns Management',
                desc: 'Create custom sections (columns) to represent stages in your workflow.'
            },
            {
                name: 'Task Management',
                desc: 'Full control over individual tasks with editable fields:'
            },
            {
                name: 'Intuitive Drag and Drop',
                desc: ' Easily reorder sections and move tasks between columns for a seamless and highly visual workflow management experience.'
            },
            {
                name: 'Real-Time Collaboration',
                desc: 'Invite other users to your boards and experience real-time updates as you collaborate on projects. '
            },
        ],
        tech: ['React', 'Tailwind', 'DaisyUI', 'NodeJS', 'Express', 'Socket.io'],
        github: 'https://github.com/L3iCodes/Strive',
        live: 'strive-ucod.onrender.com/',
        featured: true,
    },

    {
        _id: '4',
        title: 'Project 6',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        coverImg: sample1,
        coverBg: 'blue',
        overview: 'Verta is designed as a simple messaging application where users can sign up, log in, customize their profile, and chat in real time. The project serves as a playground for learning full-stack development, experimenting with UI/UX design (utilizing Daisy UI), and practicing real-time features with WebSockets.io.',
        features: [
            {
                name: 'Login / Signup',
                desc: 'Authentication system for account creation and secure login.'
            },
            {
                name: 'Realtime Chat',
                desc: 'Send and receive messages instantly with WebSocket integration.'
            },
            {
                name: 'Delete Messages',
                desc: 'Soft delete messages with a “Message Deleted” indicator.'
            },
            {
                name: 'Profile Management',
                desc: 'Update personal details and change profile picture.'
            },
            {
                name: 'Settings (Theme Change)',
                desc: 'Switch between different themes to personalize the chat experience.'
            },
        ],
        tech: ['React', 'Tailwind', 'DaisyUI', 'NodeJS', 'Express', 'Socket.io'],
        github: 'https://github.com/L3iCodes/Verta',
        featured: true,
    },
]