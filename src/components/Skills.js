'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

// Skill icons data
const skills = [
  { name: "HTML", img: "/assets/html.svg" },
  { name: "CSS", img: "/assets/css.svg" },
  { name: "JavaScript", img: "/assets/js.svg" },
  { name: "React", img: "/assets/react.svg" },
  { name: "Next.js", img: "/assets/next.svg" },
  { name: "TailwindCSS", img: "/assets/tailwind.svg" },
  { name: "Node.js", img: "/assets/node.svg" },
  { name: "Express.js", img: "/assets/express.svg" },
  { name: "MongoDB", img: "/assets/mongo.svg" },
  { name: "MySQL", img: "/assets/mysql.svg" },
  { name: "Python", img: "/assets/python.svg" },
  { name: "Java", img: "/assets/java.svg" },
  { name: "C++", img: "/assets/cpp.svg" },
  { name: "Git", img: "/assets/git.svg" },
  { name: "GitHub", img: "/assets/github.svg" },
  { name: "Framer Motion", img: "/assets/framer.svg" },
  { name: "Three.js", img: "/assets/three.svg" },
  { name: "Streamlit", img: "/assets/streamlit.svg" },
  { name: "Redux", img: "/assets/redux.svg" },
  { name: "Docker", img: "/assets/docker.svg" },
];

const randomPosition = () => ({
  top: Math.random() * 80 + "%", // avoid edges
  left: Math.random() * 80 + "%",
});

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="skills relative h-screen w-screen text-[#31363F] py-6 overflow-hidden">
      {/* Title */}
      <motion.h1
        initial={{ scale: 0, opacity: 0, y: "-50%" }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="sticky top-3 right-6 text-7xl font-bold float-right tracking-tighter"
        style={{ fontFamily: "var(--font-saatliches)" }}
      >
        SKILLS
      </motion.h1>

      {/* Divider */}
      <motion.div
        className="line h-2 w-full bg-[#31363F] mt-16"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>

      {/* Floating Skill Bubbles */}
      <div className="relative h-[90%] w-full flex items-center justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="absolute w-20 h-20 flex items-center justify-center rounded-full shadow-lg cursor-pointer bg-white"
            style={randomPosition()}
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 3, // random speed
              repeat: Infinity,
              ease: "easeInOut",
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <img src={skill.img} alt={skill.name} className="w-10 h-10" />

            {/* Tooltip */}
            {hoveredSkill === skill.name && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: -40 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bg-[#31363F] text-white text-sm px-3 py-1 rounded-full shadow-md"
              >
                {skill.name}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
