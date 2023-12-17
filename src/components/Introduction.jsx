import { Close } from "@mui/icons-material";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const IntroComponent = styled(motion.div)`
  background: black;
  border: white solid 4px;
  color: white;
  margin-right: 2rem;
  margin-bottom: 1rem;
  padding: 2rem;
  font-family: Kanit;
  width: 350px;
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
`;

const Introduction = () => {
  const [showMsg, setShowMsg] = useState(true);
  const baseText =
    "Welcome to Keb's space! 🏝️ \r\n I hope I could present myself more in this little portfolio I prepared for everyone. 😁";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 8,
      delay: 1,
      ease: "easeInOut",
    });

    return controls.stop;
  }, []);

  return (
    <IntroComponent
      initial={{ opacity: 0, scale: 0.5 }}
      animate={
        showMsg
          ? { opacity: 0.7, scale: 1 }
          : { opacity: 0, transitionEnd: { display: "none" } }
      }
      transition={{
        duration: 0.2,
        delay: 0.5,
        ease: "linear",
      }}
    >
      <div>
        <span>
          Hi there!
          <Close
            className="float-right cursor-pointer"
            onClick={() => setShowMsg(false)}
          />
        </span>
        <br /> <br />
        <motion.span>{displayText}</motion.span>
      </div>
    </IntroComponent>
  );
};

export default Introduction;
