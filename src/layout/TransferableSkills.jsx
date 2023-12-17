import { ExpandMore } from "@mui/icons-material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import transferableSkills from "../data/transferableSkills";
import TransferableSkill from "../components/TransferableSkill";

const TransferableSkills = () => {
  const [open, setOpen] = useState("Collaboration");
  return (
    <motion.div
      initial={{ scale: 0.1 }}
      whileInView={{ scale: 1 }}
      transition={{
        duration: 0.5,
        ease: "anticipate",
      }}
      className=" p-4 w-96"
    >
      <h1 className="text-white stroke-black-2 text-2xl text-center">
        Transferable Skills
      </h1>
      <ul className="my-4">
        {transferableSkills.map(({ id, title, eg }) => (
          <li key={`tech-skill-${id}`} className="text-xl mt-2">
            <div
              className="bg-gray-600 px-8 py-3 rounded-lg text-gray-100 flex cursor-pointer"
              onClick={() => setOpen(title)}
            >
              {title} <ExpandMore className="ml-auto self-center" />
            </div>
            <TransferableSkill title={title} open={open} eg={eg} />
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TransferableSkills;
