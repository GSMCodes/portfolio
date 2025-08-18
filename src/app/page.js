"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react" // simple icons

export default function Home() {
  const [open, setOpen] = useState(false)

  const transition = { duration: 3, delay: 0.8, ease: [0, 0.71, 0.2, 1.01], }

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
              className="absolute top-12 left-0 w-48 bg-amber-300 rounded-xl shadow-lg p-4"
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
          className="box w-[88%] h-[84%] bg-[#31363F] rounded-xl shadow-lg shadow-slate-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.3, delay:0.6, ease: [0, 0.71, 0.2, 1.01] }}
        ></motion.div>
      </div>
    </div>
  )
}
