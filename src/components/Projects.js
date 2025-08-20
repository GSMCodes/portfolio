'use client'
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";

const projects = [
  {
    name: "LearnAssist",
    description: "This project tackles the challenge of efficiently creating study materials by allowing students to quickly transform their extensive syllabi into tailored learning aids: get either concise, AI-generated PDF notes for quick revision, or expertly curated YouTube playlists for dynamic, visual learning journeys.",
    img: "assets/learn-assist.jpg",
    tech: ["Next.js", "TailwindCSS", "React.js", "REST API", "App Routing", "Tailwind CSS"],
    link: "learn-assist.vercel.app",
  },
  {
    name: "StockAnalyzer",
    description: " Stock Market Analysis Dashboard built using Python, Streamlit, and MySQL. It allows users to fetch stock price data using the yfinance API, store it in a MySQL database, and visualize the data with interactive charts and tables.",
    img: "assets/stock.png",
    tech: ["Python", "MySQL", "StreamLit", "API","Pandas", "Matplotlib"],
    link: "https://github.com/GSMCodes/StockAnalyzer",
  },
  {
    name: "SortItUp",
    description: "The Sorting Algorithm Visualizer is an interactive web application designed to help users understand how various sorting algorithms work. It provides a dynamic visualization of the sorting process, allowing users to see elements being compared and moved in real-time. Additionally, it displays the pseudocode for the selected algorithm, enhancing the learning experience.",
    img: "assets/sort.gif",
    tech: ["HTML", "CSS", "JS", "DSA", "Canvas"],
    link: "https://github.com/GSMCodes/SortItUp",
  },
  {
    name: "Personal Portfolio",
    description: "A modern personal portfolio wewbsite to showcase my projects, skills and present myself in public.",
    img: "assets/portfolio.png",
    tech: ["Next JS", "React JS", "Framer Motion", "GSAP", "Tailwind CSS"],
    link: "https://github.com/GSMCodes/portfolio",
  },
    {
    name: "PostsApp",
    description: "A full-stack blog-style app where users can sign up, log in, create posts, like posts, and edit their own posts..",
    img: "assets/posts.png",
    tech: ["Express JS", "Node JS", "EJS", "MongoDB", "JWT", "Cookies", "bcrypt", "Tailwind CSS"],
    link: "https://github.com/GSMCodes/postsApp",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Auto-slide projects
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  return (
    <div className="project relative h-screen w-screen text-[#31363F] py-6">
      <motion.h1
        initial={{ scale: 0, opacity: 0, y: "-50%" }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mr-5 mt-[-1rem] text-7xl font-bold float-right tracking-tighter"
        style={{ fontFamily: "var(--font-saatliches)" }}
      >
        PROJECTS
      </motion.h1>

      <motion.div className="line h-2 w-full bg-[#31363F] mt-16" style={{ scaleX: scrollYProgress }}></motion.div>

      <div className="h-[92%] w-full flex flex-col sm:flex-row p-16 gap-6 items-center justify-center">
        <motion.div
          key={projects[currentIndex].name}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="leftWala h-[90%] w-0 sm:w-1/4 flex flex-col justify-center text-center"
          
        >
          <h2 className="text-3xl font-bold text-[##31363F]" style={{fontFamily:"var(--font-staatliches)"}}>{projects[currentIndex].name}</h2>
          <p className="mt-4 text-lg text-gray-700" style={{fontFamily:"var(--font-rubik)"}}>
            {projects[currentIndex].description}
          </p>
        </motion.div>

        <motion.div
          key={projects[currentIndex].img}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="middleWala h-full w-full sm:w-[70%] rounded-xl overflow-hidden shadow-2xl cursor-pointer"
        >
          <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
            <img
              src={projects[currentIndex].img}
              alt={projects[currentIndex].name}
              className="w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </a>
        </motion.div>

        <motion.div
          key={projects[currentIndex].tech.join(",")}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="rightWala h-[90%] w-0 sm:w-1/4 flex flex-col gap-4 justify-center"
        >
          <h3 className="text-3xl text-center font-semibold mb-2" style={{fontFamily:"var(--font-staatliches)"}}>Tech Stack</h3>
          <div className="flex flex-wrap gap-2 justify-center" style={{fontFamily:"var(--font-rubik)"}}>
            {projects[currentIndex].tech.map((t, i) => (
              <span
                key={i}
                className="bg-[#31363F] text-white px-3 py-1 rounded-full text-sm shadow-md"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Manual Controls */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-[#31363F]" : "bg-gray-400"
            } transition-colors`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
