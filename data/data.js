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
  android: {
    title: "Android Development",
    icon: <AiOutlineAndroid className="h-10 w-10 text-white" />,
    description:
      "Embarking on a journey of innovation in Android development, I showcase a prowess in crafting versatile and user-centric apps.",
  },
  ios: {
    title: "IOS Development",
    icon: <IoIosPhonePortrait className="h-10 w-10 text-white" />,
    description:
      "Unveiling the art of innovation in iOS development, my work reflects an unwavering commitment to deliver top-tier user experiences in the Apple ecosystem.",
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
  reactNative: {
    title: "React Native",
    percentage: 80,
  },
  typeScript: {
    title: "TypeScript",
    percentage: 70,
  },
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
  firebase: {
    title: "Firebase",
    percentage: 85,
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
  learnQuran: {
    appName: "Learn Quran",
    description: "A mobile app where you can learn and listen Quranic Surahs.",
    technology: "React Native CLI, TypeScript, Audio Libraries, File I/O",
    date: "January 2024 ",
    icon: <FaReact className="h-5 w-5 text-white" />,
    link: "https://github.com/Anus-Ali-Khan/Learn-Quran",
  },
  shoppingCart: {
    appName: "Shopping Cart",
    description: "A Shopping app.",
    technology: "React Native, Stack Navigation, TypeScript",
    date: "January 2024 ",
    icon: <FaReact className="h-5 w-5 text-white" />,
    link: "https://github.com/Anus-Ali-Khan/Shoppingapp10",
  },
  ticTacToeGame: {
    appName: "Tic Tac Toe Game",
    description: "Tick and cross game.",
    technology: "React Native, React Native Icons, TypeScript",
    date: "February 2024 ",
    icon: <FaReact className="h-5 w-5 text-white" />,
    link: "https://github.com/Anus-Ali-Khan/TicTacToegame07",
  },

  currencyConverter: {
    appName: "Currency Converter",
    description: "App used to convert values in different currencies.",
    technology: "React Native, TypeScript, Snackbar Package",
    date: "January 2024 ",
    icon: <FaReact className="h-5 w-5 text-white" />,
    link: "https://github.com/Anus-Ali-Khan/TicTacToegame07",
  },

  bidverse: {
    appName: "Bidverse",
    description: "A bidding application",
    technology: "ReactJs, Tailwind CSS, Redux Toolkit, Axios",
    date: "September 2023 - Present",
    icon: <FaReact className="h-5 w-5 text-white" />,
    link: "https://github.com/Anus-Ali-Khan/Bidverse-App",
  },
  blogpost: {
    appName: "Blog Post",
    description: "A type of posting website made using Firebase",
    technology: "ReactJs, Firebase",
    date: "July 2023",
    icon: <FaReact className="h-5 w-5 text-white" />,
    link: "https://aak-blogpost.netlify.app/",
  },
  ecomWithReact: {
    appName: "Ecommerce Website",
    description: "An ecommerce website",
    technology: "ReactJs, ContextAPI",
    date: "July 2023",
    icon: <FaReact className="h-5 w-5 text-white" />,
    link: "https://aak-ecommerceweb.netlify.app/",
  },

  socialMedia: {
    appName: "Social Media",
    description:
      "A Social Media Website with features like: login, signup, comment, post and much more",
    technology: "ReactJs, Firebase, Redux Toolkit",
    date: "June 2023",
    icon: <FaReact className="h-5 w-5 text-white" />,
    link: "https://aak-socialmedia.netlify.app/",
  },
  ecom: {
    appName: "Ecommerce Website",
    description: "An ecommerce website with responsiveness",
    technology: "HTML, CSS, JavaScript",
    date: "February 2023",
    icon: <FaReact className="h-5 w-5 text-white" />,
    link: "https://aak-ecom.netlify.app/",
  },
};
