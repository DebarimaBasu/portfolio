import {
  
 cosmos,
  javascript,
  typescript,
  acclivity,
  html,
  css,
  reactjs,
  redux,
  pandas,
 
  numpy,
  mysql,
 
  git,
  autodidact,
 
  firebase,
  nextJS,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "skills",
  },
  {
    id: "work",
    title: "projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];



const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  
  {
    name: "My Sql",
    icon: mysql,
    
  },
 
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "nextJS",
    icon: nextJS,
  },
   {
    name: "numpy",
    icon: numpy,
  },
 
  {
    
    name: "pandas",
    icon: pandas,
  
  },
];



const projects = [
 
  {
    name: "Cosmos",
    description:
      "Built a comprehensive breast cancer prediction platform featuring accurate diagnosis, task management, an interactive chatbot, and hospital locator for nearby cancer treatment centers.",

    tags: [
      {
        name: " Numpy",
        color: "blue-text-gradient",
      },
      {
        name: " pandas ",
        color: "green-text-gradient",
      },
      {
        name: " psql",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
    ],
    image: cosmos,
    source_code_link: "https://github.com/DebarimaBasu/cosmos18",
    live_link:"https://cosmos18.netlify.app"
  },
  {
    name: "Autodidact",
    description:
      "Developed a full-stack AI-powered mock interview app  integrating Google Gemini for realistic interviews, text-to-speech feedback, automated response evaluation, and secure user progress tracking.",

    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: autodidact,
    source_code_link: "https://github.com/DebarimaBasu/autodidact",
     live_link:"https://autodidact-1df11.web.app"
  },
   {
    name: "Acclivity",
    description:
      "Developed a full-stack finance management web app  featuring secure SSR authentication, robust validations, and a Dwolla-integrated funds transfer module enabling 50+ successful bank ID-based transactions.",

    tags: [
      {
        name: " Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Appwrite",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: acclivity,
    source_code_link: "https://github.com/DebarimaBasu/acclivity89",
     live_link:"https://acclivity89-seven.vercel.app/sign-up"
  },
];

export {  technologies,  projects };
