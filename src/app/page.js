"use client"
import { motion, AnimatePresence,} from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react" 
import Image from "next/image"

export default function Home() {
  const [open, setOpen] = useState(false)

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
              className="absolute top-12 left-0 w-72 h-80 bg-blue-700 rounded-xl shadow-lg p-2 flex flex-col items-center justify-center"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <ul className="space-y-2">
                <li className="hover:bg-amber-200 p-2 rounded">Home</li>
                <li className="hover:bg-amber-200 p-2 rounded">About</li>
                <li className="hover:bg-amber-200 p-2 rounded">Projects</li>
                <li className="hover:bg-amber-200 p-2 rounded">Contact</li>
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
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2}} className="rightWala w-0 md:w-[40%] h-full flex flex-col justify-center items-center gap-10 px-10 py-33">
            <div className="h-48 w-[80%] rounded-lg  border-2 border-[#F2EFE7] hover:shadow-md hover:shadow-stone-500 flex items-center justify-center">
              <h5 className="text-xl text-[#F2EFE7] tracking-widest" style={{fontFamily:"var(--font-staatliches)"}}>Welcome to my website!</h5>
            </div>
            <div className="h-16 w-[90%] rounded-lg  border-2 border-[#F2EFE7] hover:shadow-md hover:shadow-stone-500 flex justify-around">
              {/*mail, x account, leetcode, github*/}
              <div className="h-[150%] w-[25%] hover:mt-[-2rem] transition-all duration-200 flex justify-center items-start pt-1"><Image src="assets/mail.svg" width={50} height={60} alt="mail-icon"/></div>
              <div className="h-[150%] w-[25%] hover:mt-[-2rem] transition-all duration-200 flex justify-center items-start pt-1"><Image src="assets/x.svg" width={50} height={60} alt="x-icon"/></div>
              <div className="h-[150%] w-[25%] hover:mt-[-2rem] transition-all duration-200 flex justify-center items-start pt-1"><Image src="assets/gh.svg" width={50} height={60} alt="github-icon"/></div>
              <div className="h-[150%] w-[25%] hover:mt-[-2rem] transition-all duration-200 flex justify-center items-start pt-1"><Image src="assets/leetcode.svg" width={50} height={58} alt="leetcode-icon"/></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
