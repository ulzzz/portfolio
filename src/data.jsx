import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNode } from 'react-icons/fa';
import {
  SiPostman,
  SiMongodb,
  SiPhp,
  SiMysql,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
} from 'react-icons/si';

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
    level: 'Advanced',
    icon: <FaHtml5 className="h-16 w-16 text-cyan-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },

  {
    id: nanoid(),
    title: 'Javascript',
    level: 'Proficient',
    icon: <FaJs className="h-16 w-16 text-cyan-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'PHP',
    level: 'Intermediate',
    icon: <SiPhp className="h-16 w-16 text-cyan-500" />,
    text: 'I utilize PHP in conjunction with MySQL to develop dynamic and database-driven websites.',
  },
  {
    id: nanoid(),
    title: 'React',
    level: 'Proficient',
    icon: <FaReact className="h-16 w-16 text-cyan-500" />,
    text: 'I harness the power of React as a crucial component of the MERN (MongoDB, Express, React, Node.js) stack, enabling the development of full-stack applications with a strong emphasis on user interface and data management.',
  },
  {
    id: nanoid(),
    title: 'NodeJS',
    level: 'Proficient',
    icon: <FaNode className="h-16 w-16 text-cyan-500" />,
    text: 'I employ Node.js to develop efficient and scalable server-side applications, delivering high-performance and real-time functionality to my projects.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    level: 'Intermediate',
    icon: <SiMongodb className="h-16 w-16 text-cyan-500" />,
    text: 'I integrate MongoDB into my stack to establish a robust and flexible NoSQL database system, allowing me to efficiently store and manage data for various applications.',
  },
  {
    id: nanoid(),
    title: 'MySQL',
    level: 'Intermediate',
    icon: <SiMysql className="h-16 w-16 text-cyan-500" />,
    text: 'I utilize MySQL to build reliable and structured relational database systems, ensuring data integrity and seamless retrieval for my web applications.',
  },
  {
    id: nanoid(),
    title: 'BootStrap',
    level: 'Intermediate',
    icon: <SiBootstrap className="h-16 w-16 text-cyan-500" />,
    text: 'I have a foundational understanding of Bootstrap, enabling me to create responsive and visually appealing web layouts with ease.',
  },
  {
    id: nanoid(),
    title: 'Tailwind',
    level: 'Beginner',
    icon: <SiTailwindcss className="h-16 w-16 text-cyan-500" />,
    text: 'I have a grasp of the fundamentals of Tailwind CSS and am actively expanding my proficiency in this utility-first framework.',
  },
  {
    id: nanoid(),
    title: 'ExpressJS',
    level: 'Intermediate',
    icon: <SiExpress className="h-16 w-16 text-cyan-500" />,
    text: 'I have a solid grasp of the fundamentals of Express.js, allowing me to build server-side applications and APIs with efficiency and simplicity.',
  },
  {
    id: nanoid(),
    title: 'PostMan',
    level: 'Intermediate',
    icon: <SiPostman className="h-16 w-16 text-cyan-500" />,
    text: 'I employ Postman to thoroughly test and validate APIs, ensuring their reliability and functionality in various scenarios.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
