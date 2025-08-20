"use client"
import { motion, AnimatePresence,} from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react" 
import Image from "next/image"

export default function Home() {
  const [open, setOpen] = useState(false);
  const [hoverText, setHoverText] = useState("Welcome to my portfolio!");

  const icons = [
    { src: "/assets/mail.svg", alt: "gurvanshsingh348@gmail.com",},
    { src: "/assets/x.svg", alt: "Gurvansh Singh" },
    { src: "/assets/gh.svg", alt: "GSMCodes" },
    { src: "/assets/leetcode.svg", alt: "GurvanshSingh" },
  ];

  return (
    <div className="w-screen">
      <div className="fixed top-2 left-2 sm:left-6 sm:top-6 z-50">
        <motion.button
          onClick={() => setOpen(!open)}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="p-2 bg-gray-800 rounded-full text-white"
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2}}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute top-12 left-0 w-72 h-80 bg-[#31363F] rounded-xl shadow-lg p-2 flex flex-col items-center justify-center"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <ul className="space-y-2 text-[#D4C9BE]">
                <li className="hover:bg-[#D4C9BE] p-2 rounded text-2xl tracking-wide hover:text-black hover:cursor-default text-center" style={{fontFamily:"var(--font-staatliches)"}}>Home</li>
                <li className="hover:bg-[#D4C9BE] p-2 rounded text-2xl tracking-wide hover:text-black hover:cursor-default text-center" style={{fontFamily:"var(--font-staatliches)"}}>About</li>
                <li className="hover:bg-[#D4C9BE] p-2 rounded text-2xl tracking-wide hover:text-black hover:cursor-default text-center" style={{fontFamily:"var(--font-staatliches)"}}>Projects</li>
                <li className="hover:bg-[#D4C9BE] p-2 rounded text-2xl tracking-wide hover:text-black hover:cursor-default text-center" style={{fontFamily:"var(--font-staatliches)"}}>Contact</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="h-screen w-screen flex justify-center items-center gap-0 flex-col">
        <motion.div
          className="box w-[88%] h-[84%] bg-[#31363F] rounded-xl shadow-xl shadow-slate-500 flex"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.3, delay:0.6, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2}} className="leftWala w-full md:w-[60%] h-full px-10 py-16 sm:px-6 sm:py-26 text-[#F2EFE7]">
            <h1 className="text-7xl sm:text-9xl" style={{fontFamily:"var(--font-staatliches)"}}>Gurvansh singh</h1>
            <h3 className="w-full sm:w-[60%] text-xl sm:ml-1 mt-12 sm:mt-[10vh]" style={{fontFamily:"var(--font-rubik)"}}>I am a passionate web developer and designer, currently pursuing my B.tech degree in Computer Science.</h3>
            <div className="buttonContainer w-full h-[15%] mt-[10vh]  flex items-center justify-center " style={{fontFamily:"var(--font-staatliches)"}}>
              <button className="px-8 py-4 border-2 rounded-xl text-xl tracking-widest hover:text-[#31363F] hover:bg-[#F2EFE7] transition ease-in duration-200 hover:border-[#F2EFE7] hover:shadow hover:shadow-stone-500">Contact Me</button>
            </div>
          </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3 }}
      className="rightWala w-0 md:w-[40%] h-full flex flex-col justify-center items-center gap-10 px-10 py-33"
    >
      <div className="compScreen h-48 w-[70%] py-1 rounded-lg border-6 border-[#F2EFE7] text-[#F2EFE7] hover:shadow-md hover:shadow-stone-500 flex flex-col items-center justify-between transition-all duration-300">
        <h5
          className="text-xl hover:cursor-default mt-18 "
          style={{ fontFamily: "var(--font-rubik)" }}
        >
          {hoverText}
        </h5>
        <h6 className="info text-xs tracking-tighter font-light">Click on the icon to access the profile</h6>
      </div>

      <div className="keyBoard h-12 w-[80%] rounded-lg border-2 border-[#F2EFE7] hover:bg-[#F2EFE7] hover:shadow-md hover:shadow-stone-500 flex justify-around">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="h-[150%] w-[22%] hover:mt-[-2rem] transition-all duration-200 flex justify-center items-start pt-1"
            onMouseEnter={() => setHoverText(icon.alt)}
            onMouseLeave={() => setHoverText("Welcome to my website!")}
          >
            <Image src={icon.src} width={38} height={50} alt={icon.alt} />
          </div>
        ))}
      </div>
    </motion.div>

        </motion.div>
      </div>
    </div>
  )
}