import { TbDeviceDesktop } from "react-icons/tb";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineAndroid } from "react-icons/ai";
import { TbBrandFlutter } from "react-icons/tb";
import { FaNodeJs, FaReact } from "react-icons/fa";

const alanAi = require("../public/images/alan.jpg");
const youtube_clone = require("../public/images/youtube_clone.png");
const gym = require("../public/images/gym.png");
const programmer = require("../public/images/programmer.svg");

export const profileData = {
  image: programmer,
  name: "Anus Ali Khan",
};

export const features = {
  web: {
    title: "Web Development",
    icon: <TbDeviceDesktop className="h-10 w-10 text-white" />,
    description:
      "Crafting captivating digital experiences through a fusion of elegant design and cutting-edge technology is my passion in web development.",
  },
};

export const projects = {
  alanAI: {
    title: "Alan AI",
    image: alanAi,
    description: "An AI based news website with voice commands integration.",
    link: "https://aak-alan-ai-news-web.netlify.app",
  },
  gym: {
    title: "GYM Exercise",
    image: gym,
    description:
      "A website which has compiled all the resources of a gym on one platform.",
    link: "https://aak-gym-website.netlify.app",
  },
  youtube: {
    title: "Youtube Clone",
    image: youtube_clone,
    description: "A youtube clone website having features similar to Youtube",
    link: "https://dapper-centaur-a8cfa6.netlify.app/",
  },
};

export const skills = {
  html: {
    title: "HTML",
    percentage: 90,
  },
  css: {
    title: "CSS",
    percentage: 80,
  },
  javascript: {
    title: "JavaScript",
    percentage: 90,
  },
  react: {
    title: "React Js",
    percentage: 95,
  },
  next: {
    title: "Next Js",
    percentage: 70,
  },
  git: {
    title: "GitHub",
    percentage: 85,
  },
  toolkit: {
    title: "Redux Toolkit",
    percentage: 80,
  },
  mui: {
    title: "Material UI",
    percentage: 75,
  },
  tailwind: {
    title: "Taiwind CSS",
    percentage: 85,
  },
};

export const experience = {
  bidverse: {
    appName: "Bidverse",
    description: "A bidding application",
    technology: "ReactJs, Tailwind CSS, Redux Toolkit, Axios",
    date: "September 2023 - Present",
    icon: <FaReact className="h-5 w-5 text-white" />,
  },
  blogpost: {
    appName: "Blog Post",
    description: "A type of posting website made using Firebase",
    technology: "ReactJs, Firebase",
    date: "July 2023",
    icon: <FaReact className="h-5 w-5 text-white" />,
  },
  ecomWithReact: {
    appName: "Ecommerce Website",
    description: "An ecommerce website",
    technology: "ReactJs, ContextAPI",
    date: "July 2023",
    icon: <FaReact className="h-5 w-5 text-white" />,
  },
  chat: {
    appName: "Chatty",
    description: "A chat application",
    technology: "ReactJs, Firebase",
    date: "August 2023",
    icon: <FaReact className="h-5 w-5 text-white" />,
  },
  chat: {
    appName: "Social Media",
    description:
      "A Social Media Website with features like: login, signup, comment, post and much more",
    technology: "ReactJs, Firebase, Redux Toolkit",
    date: "June 2023",
    icon: <FaReact className="h-5 w-5 text-white" />,
  },
  ecom: {
    appName: "Ecommerce Website",
    description: "An ecommerce website with responsiveness",
    technology: "HTML, CSS, JavaScript",
    date: "February 2023",
    icon: <FaReact className="h-5 w-5 text-white" />,
  },
};
