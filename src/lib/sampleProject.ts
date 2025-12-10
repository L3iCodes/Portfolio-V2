// ========= SAMPLE PROJECT
import sample1 from '../components/img/Verta-Cover.png'
import sample2 from '../components/img/Strive-Cover.png'
import { StaticImageData } from 'next/image';
import { projectCoverColors } from './styles';

type feature = {
    name: string;
    desc: string;
}


export type ProjectItems = {
    _id: string;
    title: string;
    subtitle: string;
    coverImg?: string | StaticImageData;
    coverBg: projectCoverColors
    overview: string;
    features: feature[];
    technologies: string[];
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
        technologies: ['React', 'Tailwind', 'DaisyUI', 'NodeJS', 'Express', 'Socketio', 'Zustand'],
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
        technologies: ['React', 'Tailwind', 'DaisyUI', 'NodeJS', 'Express', 'Socketio'],
        github: 'https://github.com/L3iCodes/Strive',
        live: 'strive-ucod.onrender.com/',
        featured: true,
        gallery: [
            'https://res.cloudinary.com/dai4vqyxk/image/upload/v1765330074/Strive_Home_at6qcy.png',
            'https://res.cloudinary.com/dai4vqyxk/image/upload/v1765330073/Strive_CreateBoard_ytltuw.png',
            'https://res.cloudinary.com/dai4vqyxk/image/upload/v1765330075/Strive_Profile_phdjx2.png',
            'https://res.cloudinary.com/dai4vqyxk/image/upload/v1765330075/Strive_Kanban_rmdk0q.png',
            'https://res.cloudinary.com/dai4vqyxk/image/upload/v1765330075/Strive_Section_mlyuun.png',
            'https://res.cloudinary.com/dai4vqyxk/image/upload/v1765330075/Strive_Task_iec7j0.png',
            'https://res.cloudinary.com/dai4vqyxk/image/upload/v1765330078/Strive_TeamManager_mihyvp.png',
        ]
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
        technologies: ['React', 'Tailwind', 'DaisyUI', 'NodeJS', 'Express', 'Socketio'],
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
        technologies: ['React', 'Tailwind', 'DaisyUI', 'NodeJS', 'Express', 'Socketio'],
        github: 'https://github.com/L3iCodes/Strive',
        live: 'strive-ucod.onrender.com/',
        featured: true,
        gallery: [
            'https://res.cloudinary.com/dai4vqyxk/image/upload/v1765330074/Strive_Home_at6qcy.png',
            'https://res.cloudinary.com/dai4vqyxk/image/upload/v1765330073/Strive_CreateBoard_ytltuw.png',
            'https://res.cloudinary.com/dai4vqyxk/image/upload/v1765330075/Strive_Profile_phdjx2.png',
            'https://res.cloudinary.com/dai4vqyxk/image/upload/v1765330075/Strive_Kanban_rmdk0q.png',
            'https://res.cloudinary.com/dai4vqyxk/image/upload/v1765330075/Strive_Section_mlyuun.png',
            'https://res.cloudinary.com/dai4vqyxk/image/upload/v1765330075/Strive_Task_iec7j0.png',
            'https://res.cloudinary.com/dai4vqyxk/image/upload/v1765330078/Strive_TeamManager_mihyvp.png',
        ]
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
        technologies: ['React', 'Tailwind', 'DaisyUI', 'NodeJS', 'Express', 'Socketio'],
        github: 'https://github.com/L3iCodes/Verta',
        featured: true,
    },
]