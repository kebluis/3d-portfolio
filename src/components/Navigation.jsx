import AlternateEmail from "@mui/icons-material/AlternateEmail";
import Face from "@mui/icons-material/Face";
import FitnessCenter from "@mui/icons-material/FitnessCenter";
import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ScrollContext } from "../store/scrollContext";
import NavButton from "./NavButton";

const NavCircle = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  border-bottom-left-radius: 100%;
  opacity: 0.5;
`;

const Navigation = () => {
  const { scrollY, recordScrollY } = useContext(ScrollContext);
  const [showSections, setShowSections] = useState(false);

  const SelectedSection = () => {
    switch (scrollY) {
      case 1:
        return <FitnessCenter fontSize="large" />;
      case 2:
        return <AlternateEmail fontSize="large" />;
      default:
        return <Face fontSize="large" />;
    }
  };

  return (
    <NavCircle
      whileHover={{ height: 300, width: 300 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      onHoverStart={() => setShowSections(true)}
      onHoverEnd={() => setShowSections(false)}
    >
      {showSections && (
        <>
          <NavButton
            showSections={showSections}
            position="left-8 top-8"
            onClick={() => recordScrollY(0)}
            isSelected={scrollY === 0}
          >
            <Face />
          </NavButton>
          <NavButton
            showSections={showSections}
            position="left-1/3 bottom-1/3"
            onClick={() => recordScrollY(1)}
            isSelected={scrollY === 1}
          >
            <FitnessCenter />
          </NavButton>
          <NavButton
            showSections={showSections}
            position="right-8 bottom-8"
            onClick={() => recordScrollY(2)}
            isSelected={scrollY === 2}
          >
            <AlternateEmail />
          </NavButton>
        </>
      )}
      <div className="rounded-full bg-orange-300 p-6 top-8 right-8 absolute shadow-lg">
        <SelectedSection/>
      </div>
    </NavCircle>
  );
};

export default Navigation;
