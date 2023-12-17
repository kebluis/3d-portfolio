import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useContext, useEffect, useRef } from "react";
import { ScrollContext } from "../store/scrollContext";

const ScrollManager = () => {
  const { scrollY, recordScrollY } = useContext(ScrollContext);

  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  data.fill.classList.add("top-0");
  data.fill.classList.add("bottom-0");
  data.fill.classList.add("absolute");

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: scrollY * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [scrollY]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const curSection = Math.floor(data.scroll.current * data.pages);
    if (
      data.scroll.current > lastScroll.current ||
      (data.scroll.current < lastScroll.current &&
        data.scroll.current < 1 / (data.pages - 1))
    ) {
      curSection === 3 ? recordScrollY(2) : recordScrollY(curSection);
    }
    lastScroll.current = data.scroll.current;
  });

  return null;
};

export default ScrollManager;
