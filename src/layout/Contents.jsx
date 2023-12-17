import { Scroll } from "@react-three/drei";
import { motion } from "framer-motion";
import React from "react";
import gamesImg from "../assets/images/games.png";
import githubImg from "../assets/images/github.png";
import musicImg from "../assets/images/music.png";
import ContactMe from "./ContactMe";
import ImageLink from "../components/ImageLink";
import NameHeader from "../components/NameHeader";
import Section from "../components/Section";
import TechSkills from "./TechSkills";
import TransferableSkills from "./TransferableSkills";

const Contents = () => {
  

  return (
    <Scroll html >
      <div className="m-32 font-header">
        <Section>
          <NameHeader />
          <span className="flex space-x-16 my-8 py-8">
            <ImageLink src={githubImg} href="https://www.github.com/kebluis" />
            <ImageLink src={gamesImg} href="https://keb3disland.netlify.app/" />
            <ImageLink src={musicImg} href="https://soundcloud.com/keb-luis" />
          </span>
        </Section>
        <Section>
          <motion.div
            initial={{ scale: 0.1 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "anticipate",
            }}
            className="flex rounded-lg bg-white p-4 opacity-80 "
          >
            <TechSkills />
            <TransferableSkills />
          </motion.div>
        </Section>
        <Section>
          <motion.div
            initial={{ scale: 0.1 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "anticipate",
            }}
            className="rounded-lg bg-white p-8 opacity-80 block"
          >
            <ContactMe />
          </motion.div>
        </Section>
      </div>
    </Scroll>
  );
};

export default Contents;
