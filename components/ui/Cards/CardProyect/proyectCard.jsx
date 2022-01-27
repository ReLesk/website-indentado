import Link from "next/link";
import { motion } from "framer-motion"
import Button from "../../buttons/button";

export default function ProyectCard({children, src}) {

    const variants = {
      visible: { opacity: 1, x: 0, },
      hidden: { opacity: 0, x: -200, },
    };


    return (
      <motion.div initial="hidden" animate="visible" variants={variants}>
            <div className="bg-white border rounded-lg m-5 text-center hover:rotate-2 cursor-pointer transition-transform shadow-xl hover:border-zinc-900">
              <img
                src={src}
                alt="boy with camera"
                className="rounded-t-lg h-60 w-full object-cover"
              />

              <footer className="rounded-b-lg bg-gray-100 text-sm text-pink-600 px-8 py-3 text-left">
                <h4>{children}</h4>
              </footer>
            </div>
      </motion.div>
    );
        
}