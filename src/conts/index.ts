import htmlicon from "../assets/techstacks/html.svg";
import cssicon from "../assets/techstacks/css.svg";
import reacticon from "../assets/techstacks/React.svg";
import monogodbicon from "../assets/techstacks/MongoDB.svg";
import nodeicon from "../assets/techstacks/Nodejs.svg";
import socketicon from "../assets/techstacks/socket.svg";
import herokuicon from "../assets/techstacks/Heroku.svg";
import githubicon from "../assets/techstacks/Github.svg";
import axiosicon from "../assets/techstacks/Axios.svg";
import expressicon from "../assets/techstacks/express.svg";
import nestjsicon from "../assets/techstacks/nestjs.svg";
import lodashicon from "../assets/techstacks/Lodash.svg";
import typescripticon from "../assets/techstacks/TypeScript.svg";
import handlebarsicon from "../assets/techstacks/Handlebars.svg";
import gitlabicon from "../assets/techstacks/Gitlab.svg";
import redisicon from "../assets/techstacks/redis.svg";
import creatve from "../assets/projects/creatve/creatve.png";
import creatve_2 from "../assets/projects/creatve/creatve_2.png";
import creatve_3 from "../assets/projects/creatve/creatve_3.png";
import creatve_4 from "../assets/projects/creatve/creatve_4.png";
import creatve_5 from "../assets/projects/creatve/creatve_5.png";
import creatve_6 from "../assets/projects/creatve/creatve_6.png";
import telemed from "../assets/projects/telemedicine/telemed.png";
import yakapp from "../assets/projects/yakapp/yakapp.png";
import lms from "../assets/projects/lms/lms.png";
import { IoLocation, IoMail, IoCall } from "react-icons/io5";

export const NAV_LINKS = [
  {
    id: 1,
    name: "About Me",
    link: "#about-me",
  },
  {
    id: 2,
    name: "Experience",
    link: "#experience",
  },
  {
    id: 3,
    name: "Portfolio",
    link: "#portfolio",
  },
  {
    id: 4,
    name: "Contact",
    link: "#contact",
  },
];

export const EXP_TABS = [
  {
    id: 1,
    name: "Digitalroom",
  },
  {
    id: 2,
    name: "ZCMC",
  },
  {
    id: 3,
    name: "Zeniark",
  },
];

export const EXP_DATA = [
  {
    id: 1,
    tag: "Digitalroom",
    company_name: "Digitalroom Inc.",
    position: "SEO Specialist Intern",
    date: "(Sep 2021 - May 2022)",
    responsibilities: [
      "Published new content (web pages).",
      "Revised existing web pages for the different niche brands e-commerce.",
      "Designed layout template for some articles and blog posts.",
    ],
    location: "Mandaluyong, Philippines (WFH)",
    length_of_service: "8 months",
    tech_stacks: [
      {
        name: "HTML",
        path: htmlicon,
      },
      {
        name: "CSS",
        path: cssicon,
      },
    ],
  },
  {
    id: 2,
    tag: "ZCMC",
    company_name: "Zamboanga City Medical Center",
    position: "Computer Programmer",
    date: "(Jun 2022 - Aug 2022)",
    responsibilities: [
      "Lead developer for the ZCMC TELEMEDICINE project",
      "Full-stack web developer and UI/UX designer.",
      "Developed and provided support for a functional and working online telemedicine consultation during the amidst of COVID19 pandemic.",
      "Improved and revised existing systems in the hospital.",
    ],
    location: "Zamboanga, Philippines",
    length_of_service: "3 months",
    tech_stacks: [
      {
        name: "MongoDB",
        path: monogodbicon,
      },
      {
        name: "ReactJS",
        path: reacticon,
      },
      {
        name: "NodeJS",
        path: nodeicon,
      },
      {
        name: "Axios",
        path: axiosicon,
      },
      {
        name: "Heroku",
        path: herokuicon,
      },
      {
        name: "Socket.io",
        path: socketicon,
      },
      {
        name: "Github",
        path: githubicon,
      },
      {
        name: "ExpressJS",
        path: expressicon,
      },
    ],
  },
  {
    id: 3,
    tag: "Zeniark",
    company_name: "Zeniark Philippines Consulting Corp",
    position: "Jr. Nodejs Developer",
    date: "(Aug 2022 - present)",
    responsibilities: [
      "Work as part of a team developing applications and services using Agile development method.",
      "Designed and developed RESTful APIs.",
      "Developed backend-end services using different tools and frameworks such as NestJS, TypeScript and Socket.io.",
      "Code, test, and debug APIs for production.",
    ],
    location: "Pampanga, Philippines (WFH)",
    length_of_service: "9 months - present",
    tech_stacks: [
      {
        name: "TypeScript",
        path: typescripticon,
      },
      {
        name: "NodeJS",
        path: nodeicon,
      },
      {
        name: "NestJS",
        path: nestjsicon,
      },
      {
        name: "Lodash",
        path: lodashicon,
      },
      {
        name: "Handlebars",
        path: handlebarsicon,
      },
      {
        name: "Redis",
        path: redisicon,
      },
      {
        name: "Gitlab",
        path: gitlabicon,
      },
      {
        name: "Socket.io",
        path: socketicon,
      },
      {
        name: "MongoDB",
        path: monogodbicon,
      },
      {
        name: "ExpressJS",
        path: expressicon,
      },
    ],
  },
];

export const PROJECT_DATA = [
  {
    id: 1,
    name: "CreatVe",
    description:
      "A social media platform that connects everyone whenever and wherever you are in the world. Included advance features such as live notifications, live feed (posting, commenting, reacting), infinite scrolling, and etc.",
    tech_stack: ["NEXT", "EXPRESS", "NODE", "MONGODB"],
    source_code: [
      {
        type: "Frontend",
        link: "",
      },
      {
        type: "Backend",
        link: "",
      },
      {
        type: "Live Demo",
        link: "",
      },
      {
        type: "Download",
        link: "",
      },
    ],
    cover_image: creatve,
    images: [creatve, creatve_2, creatve_3, creatve_4, creatve_5, creatve_6],
    live_demo: true,
    downloadable: false,
  },
  {
    id: 2,
    name: "TeleMedicine",
    description:
      "Online web consultation that caters the need of patients during the amidst of COVID19 pandemic.",
    tech_stack: ["REACT", "EXPRESS", "NODE", "MONGODB"],
    source_code: [
      {
        type: "Frontend",
        link: "",
      },
      {
        type: "Backend",
        link: "",
      },
      {
        type: "Live",
        link: "",
      },
      {
        type: "Download",
        link: "",
      },
    ],
    cover_image: telemed,
    images: [],
    live_demo: false,
    downloadable: false,
  },
  {
    id: 3,
    name: "YakApp",
    description:
      "A yakan mobile translator and learning application.  Yakan is the native language of indigenous Yakan People located at Basilan Island in the Philippines.",
    tech_stack: ["REACT NATIVE", "EXPRESS", "NODE", "MONGODB"],
    source_code: [
      {
        type: "Frontend",
        link: "",
      },
      {
        type: "Backend",
        link: "",
      },
      {
        type: "Live",
        link: "",
      },
      {
        type: "Download",
        link: "",
      },
    ],
    cover_image: yakapp,
    images: [],
    live_demo: false,
    downloadable: true,
  },
  {
    id: 4,
    name: "Learning Management System",
    description:
      "Online web-based classroom for managing school activities such as quizzes, assignments, and student details.",
    tech_stack: ["REACT", "EXPRESS", "NODE", "MONGODB"],
    source_code: [
      {
        type: "Frontend",
        link: "",
      },
      {
        type: "Backend",
        link: "",
      },
      {
        type: "Live",
        link: "",
      },
      {
        type: "Download",
        link: "",
      },
    ],
    cover_image: lms,
    images: [],
    live_demo: false,
    downloadable: false,
  },
];

export const CV_LINK =
  "https://drive.google.com/file/d/1EnCbUjFY_HHk-ic4NDK12gcNXHjboT3I/view";
export const FB_LINK = "https://www.facebook.com/arzl.james";
export const IN_LINK = "https://www.linkedin.com/in/arzljames";
export const GH_LINK = "https://github.com/arzljames";

export const CONTACT_DATA = [
  {
    id: 1,
    label: "Location",
    value: "Zamboanga City, Philippines",
    icon: IoLocation,
  },
  {
    id: 2,
    label: "Email",
    value: "arzljames15@gmail.com",
    icon: IoMail,
  },
  {
    id: 3,
    label: "Phone",
    value: "+63 993 632 6927",
    icon: IoCall,
  },
];
