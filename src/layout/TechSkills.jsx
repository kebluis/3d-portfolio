import { motion } from "framer-motion";
import React from "react";
import techSkills from "../data/techSkills";

const TechSkills = () => {
  return (
    <div className=" p-4 w-80">
      <h1 className="text-white stroke-black-2 text-2xl text-center">
        Technical Skills
      </h1>
      <ul className="my-4">
        {techSkills.map(({ id, title, percentage }) => (
          <li
            key={`tech-skill-${id}`}
            className="text-xl line leading-8 flex-1 grid grid-cols-2 gap-2"
          >
            <div>{title}</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 self-center ">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${percentage}%`,
                  transition: { duration: 1.5 },
                }}
                className="bg-green-600 h-2.5 rounded-full"
                style={{ width: `${percentage}%` }}
              ></motion.div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechSkills;
