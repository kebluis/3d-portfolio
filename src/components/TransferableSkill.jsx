import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const TransferableSkill = ({ title, open, eg }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (title === open) setIsOpen(true);
    else setIsOpen(false);
  }, [open]);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
    >
      <motion.ul
        className="bg-gray-600 px-8 py-3 rounded-lg text-gray-100 my-2"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
            transitionEnd: { display: "block" },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
            transitionEnd: { display: "none" },
          },
        }}
      >
        {eg.map(({ id, description }) => (
          <li className="text-lg" key={`transfer-skill-${id}`}>
            <span className="text-xs text-center mr-2">
              ⭐ 
              </span>
              {description}
          </li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default TransferableSkill;
