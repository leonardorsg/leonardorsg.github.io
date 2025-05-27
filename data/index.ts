import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "AI - Mushroom Classifier: Find out if that mushroom is poisonous or not!",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/Mushrooms.jpg",
    spareImg: "",
    link: "https://github.com/leonardorsg/IA-PROJ2-MushroomClassifier"
  },
  {
    id: 2,
    title: "Air Travel Management System",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
    link: "https://github.com/marcelmedeiros1/aed_project2",
  },
 
  {
    id: 4,
    title: "Checkout my FTP implementation",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
    link: "https://github.com/mariaarabelo/FTP"
  },


  {
    id: 6,
    title: "Do you want to catch up?",
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
    title: "Kalman Filter Implementation",
    des: "A Kalman Filter algorithm was used to predict the ETA of a bus in a given bus stop",
    img: "/kalman.jpg",
    iconLists: ["/ml.png", "/cpp.png", "/dox.png"],
    link: "https://github.com/leonardorsg/KalmannFilters",
  },
  {
    id: 2,
    title: "Data Link Layer Protocol for File Transmission",
    des: "Implemented a Data Link Layer protocol aimed at ensuring reliable communication between two system connected via an RS-232 serial cable",
    img: "/datalink.png",
    iconLists: ["/c.png", "/cn.png"],
    link: "https://github.com/leonardorsg/NetworkLayerProj",
  },
  {
    id: 3,
    title: "Drone Delivery Problem",
    des: "Google hackaton project aimed at finding an optimal slution to a complex problem - how multiple drones can be used to deliver orders to clients",
    img: "/drone.jpeg",
    iconLists: ["/python.png", "/pandas.png" , "/anaconda.png"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "JAVA-- Compiler",
    des: "Created a compiler for a simplified version of Java, which includes lexical analysis, syntax analysis, semantic analysis, and code generation.",
    img: "/compiler.png",
    iconLists: ["/java.png", "/antlr.svg", "/js.png"],
    link: "https://github.com/leonardorsg/JavaCompiler",
  },
  {
    id: 5,
    title: "HOWse - Q&A Platform",
    des: "Developed a collaborative Q&A network that transforms household management and daily activities into a shared learning experience.",
    img: "/howse.png",
    iconLists: ["/js.png", "/php.svg", "/docker.png", "/blade.jpeg"],
    link: "https://github.com/leonardorsg/JavaCompiler",
  },
  {
    id: 6,
    title: "Martech Place - Mobile App",
    des: "The L.EIC MarTechPlace project was developed for the Software Engineering course in the 2023/24 academic year of the 2nd year of L.EIC at FEUP.",
    img: "/martech.png",
    iconLists: ["/dart.png", "/flutter.png", "/rails.png"],
    link: "https://github.com/FEUP-LEIC-ES-2023-24/2LEIC13T1",
  },
  ];


export const workExperience = [
  {
    id: 1,
    title: "Research and Developer Intern",
    desc: "Implemented the Kalman Filter algorithm using C++ and JavaScript. The goal of the project was to use GPS data and predicted data to calculate the ETA of a bus.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Developer Intern",
    desc: "Backend developer intern at a startup, where I worked on a web application using PHP and JavaScript. Implemented a transparency portal for public financial flows using React and Node.js",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Outgoing Volunteering Member at AIESEC",
    desc: "Managed the experience of dozens of Portuguese students who applied for international internships and volunteering",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/leonardorsg"
  },
  
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/leonardo-garcia-90549914b/",
  },
];
