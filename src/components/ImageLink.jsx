import { motion } from "framer-motion";
import React from "react";

const ImageLink = ({ src, href }) => {
  return <motion.a target="_blank" href={href} whileHover={{ scale: 1.5 }}>
    <img className="rounded-full bg-white h-32 p-4 opacity-95" src={src}/>
    </motion.a>
};

export default ImageLink;
