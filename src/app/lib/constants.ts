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
    {icon: "ri:github-fill", href: "www.github.com"},
    {icon: "mdi:linkedin", href: "www.linkedin.com"},
    {icon: "ic:baseline-facebook", href: "www.facebook.com"},
];


// ========= TECH STACKS
export type TechStackItems = {
    name: string;
    icon: string;
    color?: string;
};

export const allStack: TechStackItems[] = [
    { name: "JavaScript", icon: "material-symbols:javascript", color: "#F7DF1E" },
    { name: "NextJS", icon: "ri:nextjs-fill", color: "#181717" },
    { name: "NodeJS", icon: "mdi:nodejs", color: "#68A063" },
    { name: "Python", icon: "proicons:python", color: "#3776AB" },
    { name: "GitHub", icon: "meteor-icons:github", color: "#333333" },
    { name: "React", icon: "akar-icons:react-fill", color: "#61DAFB" },
    { name: "Express", icon: "simple-icons:express", color: "#F7DF1E" },
    { name: "Tensorflow", icon: "simple-icons:tensorflow", color: "#FF6F00" },
    { name: "VS Code", icon: "codicon:vscode", color: "#007ACC" },
    { name: "TailwindCSS", icon: "mdi:tailwind", color: "#06B6D4" },
    { name: "MongoDB", icon: "lineicons:mongodb", color: "#47A248" },
    { name: "MySQL", icon: "lineicons:mongodb", color: "#00758F" },
    { name: "HuggingFace", icon: "simple-icons:huggingface", color: "#FFB936" },
    { name: "Figma", icon: "solar:figma-bold", color: "#FF4B00" },
];

export const featuredStack: TechStackItems[] = [
    { name: "React", icon: "akar-icons:react-fill", color: "#4A90E2" },
    { name: "NextJS", icon: "ri:nextjs-fill", color: "#F9A825" },
    { name: "NodeJS", icon: "mdi:nodejs", color: "#68A063" },
    { name: "Express", icon: "simple-icons:express", color: "#F9A825" },
    { name: "MongoDB", icon: "lineicons:mongodb", color: "#47A248" },
    { name: "MySQL", icon: "lineicons:mongodb", color: "#00758F" },
    { name: "VS Code", icon: "codicon:vscode", color: "#007ACC" },
    { name: "Figma", icon: "solar:figma-bold", color: "#A948FF" },
];


// QUICK ACCESS ITEMS
type QuickAccessItems = {
    text?: string;
    icon?: string;
    customStyle?: string;
    href?: string;
    withStyle: boolean;
};

export const quickAccess: QuickAccessItems[] = [
    {icon: "ri:github-fill", withStyle: true, href: "www.github.com"},
    {icon: "mdi:linkedin", withStyle: true, href: "www.linkedin.com"},
    {text: "Email", withStyle: true, customStyle: "px-5!"},
    {text: "(+69) 961 365 5723", withStyle: false, customStyle: "hover:bg-base-200"},
];