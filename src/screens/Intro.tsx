/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { IconKeys, IconSlot } from "../assets/icons";
import Image1 from "../assets/intro/image1.avif";
import Image2 from "../assets/intro/image2.avif";
import Image3 from "../assets/intro/image3.avif";
import { FlipCard } from "../components/FlipCard";
import { FooterCopy } from "../components/Footer";
import { motion, useInView } from "framer-motion";

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

export const IntroScreen = () => {
  const headingRef = useRef<any>(null);
  const headerIsInView = useInView(headingRef, { amount: 0.5 });

  return (
    <div className="h-screen">
      <div className="container relative h-full">
        <div className="flex h-full flex-col items-center justify-center">
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
              transition={{ ease: "easeOut", duration: 0.6, delay: 0.3 }}
              className="relative mx-auto flex h-20 w-20 translate-y-5 items-center justify-center rounded-full border border-black after:absolute after:bottom-0 after:h-1/2 after:w-full after:translate-y-1 after:bg-white"
            >
              <div className="-mt-3">
                <IconSlot icon="arrowDown" className="animate-bounce" size={28} />
              </div>
            </motion.div>
          </FooterCopy>
        </div>
      </div>
    </div>
  );
};
