"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  const certifications = [
    { name: "Microsoft Data Analysis", logo: "/certifications/microsoft.png" },
    { name: "Edunet Training", logo: "/certifications/edunet.png" },
    { name: "React Developer Cert", logo: "/certifications/react.png" },
    { name: "Python & MySQL", logo: "/certifications/python.png" },
  ];

  const skills = [
    "Web Developer",
    "ReactJS",
    "Next.js",
    "Data Analyst",
    "TailwindCSS",
    "Python",
    "MongoDB",
    "MySQL",
  ];

  return (
    <div className="relative w-full bg-[#0f1115] text-[#F2EFE7] px-8 py-10 space-y-32 mt-20">
      {/* Intro Section */}
      <div className="text-center">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-8xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-staatliches)" }}
        >
          Still exploring. Still building. Always learning. 🔥
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Web Developer 💻",
            1200,
            "Data Analyst 📊",
            1200,
            "ReactJS & Next.js Enthusiast ⚡",
            1200,
          ]}
          wrapper="p"
          speed={40}
          repeat={Infinity}
          className="text-xl md:text-2xl text-gray-300"
        />
      </div>

      {/* Education */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bolder" style={{ fontFamily: "var(--font-staatliches)" }}>Education</h1>
        <h2 className="text-3xl font-bold">B.Tech — 2026</h2>
        <p className="text-lg text-gray-300">CGPA — 8.5</p>
      </div>

      {/* Competitions */}
      <div className="grid md:grid-cols-3 gap-8">
        <h1 className="text-5xl font-bolder">Competitions & Certifications</h1>
        {["AI-thon: Runner Up", "IR 4.0 technologies: Microsoft Training"].map(
          (item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8}}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#181b20] rounded-xl shadow-lg p-6 flex justify-center items-center text-xl font-semibold"
            >
              {item}
            </motion.div>
          )
        )}

      </div>

    </div>
  );
};

export default About;
