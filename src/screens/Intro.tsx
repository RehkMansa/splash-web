import "../styles/Intro.scss";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { IconKeys, IconSlot } from "../assets/icons";
import Image1 from "../assets/intro/image1.avif";
import Image2 from "../assets/intro/image2.avif";
import Image3 from "../assets/intro/image3.avif";
import { FlipCard } from "../components/FlipCard";
import { FooterCopy } from "../components/Footer";
import { motion, useInView } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

interface FlipUI {
  icon: IconKeys;
  text: string;
  src: string;
  offset: number;
}

const flipUi: FlipUI[] = [
  { text: "Convenience", icon: "hand", src: Image1, offset: 30 },
  { text: "Modern Solution", icon: "connection", src: Image2, offset: 40 },
  { text: "Personalized Care", icon: "cursor-arrow-triple", src: Image3, offset: 45 },
];

const animateText = "OUR ADVANTAGES";

const h1Variants = {
  onNotInView: { maxHeight: 0, opacity: 0, y: 200 },
  onInView: { maxHeight: 1000, opacity: 1, y: 0 },
};
const ANIMATE_CLASS = "slide-element-up";

export const IntroScreen = () => {
  const headingRef = useRef<any>(null);
  const headerIsInView = useInView(headingRef, { amount: 0.5 });
  const [flipCardsNode, setFlipCardsNode] = useState<NodeListOf<HTMLDivElement>>(
    document.querySelectorAll(".flip-card")
  );

  useEffect(() => {
    const flipCards = document.querySelectorAll<HTMLDivElement>(".flip-card");

    setFlipCardsNode(flipCards);
  }, []);

  // use a state to check if its going back or front and animate based on that state
  const handleObjectScroll = (scroll: number) => {
    const tempScroll = Math.floor(scroll * 100);
    console.log(tempScroll);

    if (!headerIsInView) return;

    if (!flipCardsNode) return;

    const [flip1, flip2, flip3] = flipCardsNode;

    if (tempScroll > 0 && tempScroll <= 10) {
      flipCardsNode.forEach((node) => {
        console.log("...up cleanup...");
        if (node.classList.contains(ANIMATE_CLASS)) {
          node.classList.remove(ANIMATE_CLASS);
        }
      });
    }

    if (tempScroll === 30) {
      flip1?.classList?.add(ANIMATE_CLASS);
    }

    if (tempScroll === 50) {
      flip2?.classList?.add(ANIMATE_CLASS);
    }

    if (tempScroll === 75) {
      flip3?.classList?.add(ANIMATE_CLASS);
    }

    if (tempScroll > 90 && tempScroll < 100) {
      console.log("...down cleanup...");

      flipCardsNode.forEach((node) => {
        console.log("...down cleanup...");
        if (node.classList.contains(ANIMATE_CLASS)) {
          node.classList.remove(ANIMATE_CLASS);
        }
      });
    }
  };

  return (
    <Parallax
      shouldAlwaysCompleteAnimation
      onProgressChange={handleObjectScroll}
      rootMargin={{ top: -100, bottom: 100, left: 0, right: 0 }}
      className="h-[400vh]"
    >
      <div className="container relative h-full">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center">
          <motion.h1
            variants={h1Variants}
            ref={headingRef}
            initial="onNotInView"
            animate={headerIsInView ? "onInView" : "onNotInView"}
            transition={{ staggerChildren: 0.05 }}
            className="flex gap-2 overflow-hidden whitespace-nowrap text-center text-[150px] font-medium"
          >
            {animateText.split("").map((text, idx) => (
              <motion.span
                transition={{ ease: "easeOut" }}
                className="block overflow-hidden"
                variants={h1Variants}
                key={text + idx}
              >
                {text}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div
            className="absolute left-1/2 top-1/2 flex h-[450px] w-full items-center justify-center"
            animate={headerIsInView ? "onInView" : "initialInView"}
            initial={{ translate: "-50% 0", opacity: 0.7 }}
            variants={{
              onInView: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.2,
                  duration: 0.5,
                  ease: "easeOut",
                },
                translate: "-50% -50%",
                opacity: 1,
              },
              initialInView: {
                translate: "-50% 0%",
              },
              onInScroll: {},
              delayedRotate: {},
            }}
            transition={{ ease: "easeOut", duration: 0.4 }}
          >
            {flipUi.map((ele, idx) => (
              <FlipCard
                {...ele}
                initial={{
                  translate: "-50% -50%",
                  rotate: "-30deg",
                }}
                variants={{
                  onInView: {
                    rotate: `-${ele.offset}deg`,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                  initialInView: {
                    rotate: "-30deg",
                    opacity: 0.8,
                  },
                  onInScroll: {},
                }}
                idx={idx}
                total={flipUi.length}
                key={ele.text}
              />
            ))}
          </motion.div>

          <FooterCopy>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 20, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.6, delay: 0.5 }}
              className="relative mx-auto flex h-20 w-20 translate-y-5 items-center justify-center rounded-full border border-black after:absolute after:bottom-0 after:h-1/2 after:w-full after:translate-y-1 after:bg-white"
            >
              <div className="-mt-3">
                <IconSlot icon="arrowDown" className="animate-bounce" size={28} />
              </div>
            </motion.div>
          </FooterCopy>
        </div>
      </div>
    </Parallax>
  );
};
