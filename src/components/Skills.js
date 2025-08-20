'use client'
import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";

const Skills = () => {
  const { scrollYProgress } = useScroll();

  const skills = [
    {
      name: "HTML • CSS • JavaScript • ReactJS • NextJS • TailwindCSS • Redux",
      bg: "bg-gradient-to-r from-purple-500 to-pink-500",
      speed: 15,
      angle: 0,
    },
    {
      name: "Python • Pandas • NumPy • Matplotlib • Streamlit • Data Analysis",
      bg: "bg-gradient-to-r from-green-400 to-blue-500",
      speed: 20,
      angle: -3,
    },
    {
      name: "MySQL • MongoDB • FastAPI • Flask • NodeJS • ExpressJS",
      bg: "bg-gradient-to-r from-yellow-400 to-red-500",
      speed: 25,
      angle: 2,
    },
    {
      name: "Git • GitHub • APIs • Problem Solving • DSA • Algorithms",
      bg: "bg-gradient-to-r from-indigo-400 to-cyan-500",
      speed: 18,
      angle: -3,
    },
  ];

  // State to track hovered reel index
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="skill relative h-screen w-screen text-[#0f1115] py-6 mt-5">
      {/* Heading */}
      <motion.h1
        initial={{ scale: 0, opacity: 0, y: "-50%" }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mr-5 text-6xl font-extrabold float-right tracking-tighter"
        style={{ fontFamily: "var(--font-saatliches)" }}
      >
        SKILLS
      </motion.h1>

      {/* Top Progress Line */}
      <motion.div
        className="line h-2 w-full bg-[#31363F] mt-16"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>

      {/* Reels */}
      <div className="flex flex-col gap-8 w-full py-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`relative overflow-hidden shadow-xl ${skill.bg} h-20 mt-12`}
            style={{
              transform: `rotate(${skill.angle}deg)`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration:
                  hoveredIndex === index ? skill.speed * 2 : skill.speed,
              }}
              className="absolute whitespace-nowrap text-white text-7xl flex items-center font-extrabold uppercase px-5"
            >
              {/* Duplicate text twice for seamless looping */}
              <span className="mr-10">
                {Array(2).fill(skill.name).join(" • ")}
              </span>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
