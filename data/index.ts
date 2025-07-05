export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const heroFlipWords = [
  "Full Stack Developer",
  "Frontend Engineer",
  "React Specialist",
  "Next.js Developer",
  "Creative Coder",
  "Animation Addict",
  "GSAP Animator",
  "API Whisperer",
  "JavaScript Lover",
  "Problem Solver",
]

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Exploring GSAP and React Spring to push interactive experiences further",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "DevFlow – Fullstack Q&A Platform",
    des: "A Stack Overflow clone built with Next.js, Tailwind, MongoDB, and OpenAI. Features include markdown-based questions, upvotes/downvotes, authentication (GitHub, Google), and an AI-powered answer assistant.",
    img: "/devflow.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/openai.svg", "/mongodb.png"],
    link: "https://dev-flow-next-js.vercel.app/",
    name: "/DevFlow",
  },
  {
    id: 2,
    title: "Movie Finder App",
    des: "Real-time movie search app using TMDB API and Appwrite. Features instant suggestions, trailers, genres, and favorites. Built with React, Tailwind, and TypeScript.",
    img: "/moviefinder.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "app.svg", "api.png"],
    link: "https://movie-finder-eight-psi.vercel.app/",
    name: "/Movie Finder",
  },
  {
    id: 3,
    title: "YCDirectory – Startup Directory CMS",
    des: "A modern CMS platform where users can create, manage, and showcase startup profiles. Built with Next.js, Sanity CMS, and Shadcn UI, it features GitHub authentication, dynamic content editing, and a clean, responsive interface.",
    img: "/ycdirectory.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "sentry.png"],
    link: "https://yc-directory-next-js-brown.vercel.app/",
    name: "/YC Directory",
  },
  {
    id: 4,
    title: "Award-Winning Website Clone",
    des: "A rebuild of Zentry.com highlighting creative frontend animation. Includes clip-path transitions, scroll triggers, bento layouts, and GSAP mastery.",
    img: "/zentry.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/gsap.svg"],
    link: "https://award-website-rust.vercel.app/",
    name: "/Zentry Clone",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    desc: "Developed performant, reusable React interfaces with Redux and MUI, integrating REST APIs and optimizing load speed by 25%",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Web Development Intern",
    desc: "Completed a 4-month internship covering a range of technologies including HTML, CSS, JavaScript, React, Bootstrap, Python, and Django.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

type SocialMediaItem = {
  id: number;
  img: string;
  url: string;
  isStatic?: boolean;
  imageSrc?: string;
  size?: boolean;
}& (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
);

export const socialMedia: SocialMediaItem[] = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/HammamYousef",
    isStatic: false,
  },
  {
    id: 2,
    img: "/facebook.svg",
    url: "https://www.facebook.com/hammam.yousef.2025",
    size: true,
    isStatic: true, // This is a static image, not a link preview
    imageSrc: "/FacebookPage.PNG"
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/hammam-yousef-7029a82a8/",
    isStatic: true, // This is a static image, not a link preview
    imageSrc: "/linkedIn.PNG"
  },
];

export const skillsIcons = {
  frontend: [
    { id: 1, name: "HTML", img: "html5/html5-original.svg" },
    { id: 2, name: "CSS", img: "css3/css3-original.svg" },
    { id: 3, name: "JavaScript", img: "javascript/javascript-original.svg" },
    { id: 4, name: "TypeScript", img: "typescript/typescript-original.svg" },
    { id: 5, name: "Bootstrap", img: "bootstrap/bootstrap-original.svg" },
    { id: 6, name: "Tailwind CSS", img: "tailwindcss/tailwindcss-original.svg" },
    { id: 7, name: "React", img: "react/react-original.svg" },
    { id: 8, name: "React Router", img: "reactrouter/reactrouter-original.svg" },
    { id: 9, name: "Next.js", img: "nextjs/nextjs-original.svg" },
    { id: 10, name: "Redux", img: "redux/redux-original.svg" },
    { id: 11, name: "Three.js", img: "threejs/threejs-original.svg" },
    { id: 12, name: "Framer", img: "framermotion/framermotion-original.svg" },
  ],

  backend: [
    { id: 1, name: "Node.js", img: "nodejs/nodejs-original-wordmark.svg" },
    { id: 2, name: "Express.js", img: "express/express-original.svg" },
    { id: 3, name: "MongoDB", img: "mongodb/mongodb-original.svg" },
    { id: 4, name: "MySQL", img: "mysql/mysql-original.svg" },
    { id: 5, name: "Firebase", img: "firebase/firebase-plain.svg" },
  ],

  tools: [
    { id: 1, name: "Git", img: "git/git-original.svg" },
    { id: 2, name: "GitHub", img: "github/github-original.svg" },
    { id: 3, name: "VS Code", img: "vscode/vscode-original.svg" },
    { id: 4, name: "Figma", img: "figma/figma-original.svg" },
    { id: 5, name: "Postman", img: "postman/postman-original.svg" },
    { id: 6, name: "Docker", img: "docker/docker-original.svg" },
  ],

  floatingIcons: [
    { id: 1, name: "HTML", img: "html5/html5-original.svg" },
    { id: 2, name: "CSS", img: "css3/css3-original.svg" },
    { id: 3, name: "JavaScript", img: "javascript/javascript-original.svg" },
    { id: 4, name: "TypeScript", img: "typescript/typescript-original.svg" },
    { id: 5, name: "React", img: "react/react-original.svg" },
    { id: 6, name: "Next.js", img: "nextjs/nextjs-original.svg" },
    { id: 7, name: "Node.js", img: "nodejs/nodejs-original.svg" },
    { id: 8, name: "Express.js", img: "express/express-original.svg" },
    { id: 9, name: "MongoDB", img: "mongodb/mongodb-original.svg" },
    { id: 10, name: "GitHub", img: "github/github-original.svg" },
  ]
};