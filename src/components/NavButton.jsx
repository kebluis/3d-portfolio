import { motion } from "framer-motion";
import React from "react";

const show = {
  opacity: 1,
  display: "block",
  transitionEnd: {
    delay: 4,
  },
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: "none",
  },
};

const NavButton = ({children, showSections, position, isSelected, ...restProps}) => {
  
  return (
    <motion.div
      animate={showSections ? show : hide}
      transition={{ delay: 10 }}
      className={`absolute ${position} cursor-pointer`}
      {...restProps}
    >
      <div className={`rounded-full ${isSelected ? 'bg-orange-300': 'bg-gray-400'} p-4 shadow-lg`}>
        {children}
      </div>
    </motion.div>
  );
};

export default NavButton;
