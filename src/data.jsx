import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNode, FaGitAlt } from 'react-icons/fa';
import {
  SiPostman,
  SiMongodb,
  SiPhp,
  SiMysql,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiVisualstudio,
  SiTypescript,
} from 'react-icons/si';
import jobify from './assets/jobify.png';
import todolist from './assets/todolist.png';
import booklist from './assets/booklist.png';

export const links = [
  { id: nanoid(), href: '#home', text: 'profile' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    about: 'Front-end',
    level: 'Advanced',
    icon: <FaHtml5 className="h-16 w-16 text-cyan-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },

  {
    id: nanoid(),
    title: 'JavaScript',
    about: 'Front-end',
    level: 'Proficient',
    icon: <FaJs className="h-16 w-16 text-cyan-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    about: 'Front-end',
    level: 'Beginner',
    icon: <SiTypescript className="h-16 w-16 text-cyan-500" />,
    text: 'I use TypeScript to add static typing and to catch erros while coding.',
  },

  {
    id: nanoid(),
    title: 'PHP',
    about: 'Back-end',
    level: 'Intermediate',
    icon: <SiPhp className="h-16 w-16 text-cyan-500" />,
    text: 'I utilize PHP in conjunction with MySQL to develop dynamic and database-driven websites.',
  },
  {
    id: nanoid(),
    title: 'React',
    about: 'Front-end',
    level: 'Proficient',
    icon: <FaReact className="h-16 w-16 text-cyan-500" />,
    text: 'I harness the power of React as a crucial component of the MERN (MongoDB, Express, React, Node.js) stack, enabling the development of full-stack applications with a strong emphasis on user interface and data management.',
  },
  {
    id: nanoid(),
    title: 'NodeJS',
    about: 'Back-end',
    level: 'Proficient',
    icon: <FaNode className="h-16 w-16 text-cyan-500" />,
    text: 'I employ Node.js to develop efficient and scalable server-side applications, delivering high-performance and real-time functionality to my projects.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    about: 'Back-end',
    level: 'Intermediate',
    icon: <SiMongodb className="h-16 w-16 text-cyan-500" />,
    text: 'I integrate MongoDB into my stack to establish a robust and flexible NoSQL database system, allowing me to efficiently store and manage data for various applications.',
  },
  {
    id: nanoid(),
    title: 'MySQL',
    about: 'Back-end',
    level: 'Intermediate',
    icon: <SiMysql className="h-16 w-16 text-cyan-500" />,
    text: 'I utilize MySQL to build reliable and structured relational database systems, ensuring data integrity and seamless retrieval for my web applications.',
  },
  {
    id: nanoid(),
    title: 'BootStrap',
    about: 'Front-end',
    level: 'Intermediate',
    icon: <SiBootstrap className="h-16 w-16 text-cyan-500" />,
    text: 'I have a foundational understanding of Bootstrap, enabling me to create responsive and visually appealing web layouts with ease.',
  },
  {
    id: nanoid(),
    title: 'Tailwind',
    about: 'Front-end',
    level: 'Beginner',
    icon: <SiTailwindcss className="h-16 w-16 text-cyan-500" />,
    text: 'I have a grasp of the fundamentals of Tailwind CSS and am actively expanding my proficiency in this utility-first framework.',
  },
  {
    id: nanoid(),
    title: 'ExpressJS',
    about: 'Back-end',
    level: 'Intermediate',
    icon: <SiExpress className="h-16 w-16 text-cyan-500" />,
    text: 'I have a solid grasp of the fundamentals of Express.js, allowing me to build server-side applications and APIs with efficiency and simplicity.',
  },
  {
    id: nanoid(),
    title: 'PostMan',
    about: 'Others',
    level: 'Intermediate',
    icon: <SiPostman className="h-16 w-16 text-cyan-500" />,
    text: 'I employ Postman to thoroughly test and validate APIs, ensuring their reliability and functionality in various scenarios.',
  },
  {
    id: nanoid(),
    title: 'Git/GitHub',
    about: 'Others',
    level: 'Beginner',
    icon: <FaGitAlt className="h-16 w-16 text-cyan-500" />,
    text: 'I use Git and GitHub for collaborative software development projects, enabling efficient tracking of changes, seamless team collaboration, and easy version management.',
  },
  {
    id: nanoid(),
    title: 'Visual Studio Code',
    about: 'Others',
    level: 'Intermediate',
    icon: <SiVisualstudio className="h-16 w-16 text-cyan-500" />,
    text: 'I am using Visual Studio Code as my text editor, along with some extensions to ease my coding.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: jobify,
    url: 'https://temp-mern-jobify.onrender.com/',
    github: 'https://github.com/ulzzz/jobify',
    title: 'Jobify MERN App',
    text: 'In this MERN project, I gained a deep understanding of the CRUD, Auth and many other things.',
  },
  {
    id: nanoid(),
    img: todolist,
    url: '',
    github: 'https://github.com/ulzzz/todo-list',
    title: 'Simple To-do list',
    text: 'In this project i learnt how to use basics of react hooks',
  },
  {
    id: nanoid(),
    img: booklist,
    url: '',
    github: 'https://github.com/ulzzz/todo-list',
    title: 'Book Lists',
    text: 'MERN Stack complete CRUD operations',
  },
];
