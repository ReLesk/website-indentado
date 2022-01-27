import Link from "next/link";
import { motion, useAnimation } from "framer-motion"
import Button from "../../buttons/button";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ProyectCard({children, src, link}) {


    const animation = useAnimation();

    const {ref, inView} = useInView();

    useEffect(() => {

        console.log('useEffect', inView)
        if (inView) {
            animation.start({
                x: 0, transition: {
                        type:'spring', duration: 1, bounce: 0.3 }})      
        }
        if (!inView) {
            animation.start({x: "-100vw"});
        }
    }, [inView]);


    return (
      <div ref={ref}>
          <motion.div animate={animation}>
            <Link href={link} passHref>
                <a target="_blank">
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
                </a>
            </Link>
        </motion.div>
      </div>
    );
        
}