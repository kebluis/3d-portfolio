import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { useControls } from "leva";
import React, { useContext } from "react";
import { PortfolioContext } from "../store/PortfolioContext";

const success = {
  borderRadius: "50%",
};

const inProgress = {
  borderRadius: 0,
};

const EmailSentModal = () => {
  const { isSent, isSubmitted } = useContext(PortfolioContext);
  return (
    isSubmitted && (
      <div className="fixed z-10 w-full h-full bg-gray-500 bg-opacity-30">
        <motion.div
          className=" w-96 rounded-xl bg-white absolute transform-centered"
          animate={isSent ? success : inProgress}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeatDelay: 1,
          }}
        >
          {isSent ? (
            <div>
              <Player
                src="https://lottie.host/593146f5-fc28-477c-9602-8d6186087ad3/CBMTLZrptB.json"
                background="transparent"
                speed={1}
                autoplay
                loop
                className="w-80 h-80"
              />
              <h3 className="text-center pb-8 font-header text-2xl">Sent</h3>
            </div>
          ) : (
            <div>
              <Player
                src="https://lottie.host/cd16243a-c2af-4825-9213-18008d9cc613/C7sZVa0dL1.json"
                background="transparent"
                speed={1}
                loop
                autoplay
                className="w-80 h-80"
              />
              <h3 className="text-center pb-8 font-header text-2xl">
                Sending...
              </h3>
            </div>
          )}
        </motion.div>
      </div>
    )
  );
};

export default EmailSentModal;
