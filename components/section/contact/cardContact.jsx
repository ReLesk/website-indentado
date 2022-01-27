import Link from "next/link"
import Image from "next/image"

import { motion } from "framer-motion"

export default function CardContact({children, src, link}){
    
    const CardItems = {
        text: children,
        img: src,
        link: link
    }

    const Variants = {
        visible: {opacity:1, x:0 },
        hidden: { opacity: 0, x: -200, },
    }

    
    return (
        <motion.div initial="hidden" animate="visible" variants={Variants}>
            <Link href={link}>
                <a target="_blank">
                    <div className="border rounded-xl m-5 p-5 cursor-pointer hover:shadow-2xl hover:text-pink-600 hover:border-white transition">
                    <div className="py-2 text-center">
                        <Image className="hover:rotate-2 transition-transform" src={CardItems.img} width={100} height={100}></Image>
                    </div>
                    <div className="py-2 text-center">
                        <h4 className="font-bold text-2xl">{CardItems.text}</h4>
                    </div>
                    </div>
                </a>
            </Link>
        </motion.div>
    )
}