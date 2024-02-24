import { useRef } from "react";
import { Button } from "../components/Button";
import { MatteIconRow } from "../components/CircleIcon";
import { FooterCopy } from "../components/Footer";
import { ScrollCard } from "../components/ScrollCard";
import { cn } from "../utils";
import { useInView, motion, useScroll, useTransform } from "framer-motion";

const h1Variants = {
  onNotInView: { maxHeight: 0, opacity: 0, y: 200 },
  onInView: { maxHeight: 1000, opacity: 1, y: 0 },
};





const imagesToDisplay = [
  [
    { text: "Dental Health Records", src: 99 },
    { text: "Some text", src: 199 },
    { text: "Another text", src: 299 },
    { text: "Short Text", src: 399 },

    { text: "An Okay Text", src: 229 },
    { text: "I am playing", src: 419 },
    { text: "Random dentist text", src: 499 },
    { text: "Clean teeth", src: 666 },
  ],
  [
    { text: "An Okay Text", src: 229 },
    { text: "I am playing", src: 419 },
    { text: "Random dentist text", src: 499 },
    { text: "Clean teeth", src: 666 },

    { text: "Dental Health Records", src: 99 },
    { text: "Some text", src: 199 },
    { text: "Another text", src: 299 },
    { text: "Short Text", src: 399 },
  ],
];

const animateText = "Explore our service, make your smile shine";

export const Screen4 = () => {
  const headingRef = useRef<ANY>(null);
  const wrapperRef = useRef<ANY>(null);
  const headerIsInView = useInView(headingRef, { amount: 0.5 });
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
  });

  const translate1 = useTransform(scrollYProgress, [0, 1], [0, -700]);
  const translate2 = useTransform(scrollYProgress, [0, 1], [-700, 0]);

  return (
    <div ref={wrapperRef} className="container grid h-[900vh] grid-cols-2 gap-16">
      <div className="relative h-full pb-10">
        <div className="sticky top-0 flex h-[100vh] flex-col justify-center gap-10 overflow-hidden">
          <MatteIconRow />
          <motion.h1
            variants={h1Variants}
            ref={headingRef}
            initial="onNotInView"
            animate={headerIsInView ? "onInView" : "onNotInView"}
            transition={{ staggerChildren: 0.05 }}
            className="max-w-[90%] gap-2 overflow-hidden text-7xl font-light"
          >
            {animateText.split("").map((text, idx) => {
              console.log(text);
              return (
                <motion.span
                  transition={{ ease: "easeOut" }}
                  className="inline-block overflow-hidden capitalize"
                  variants={h1Variants}
                  key={text + idx}
                >
                  {text === " " ? <>&nbsp;</> : text}
                </motion.span>
              );
            })}
          </motion.h1>
          {/* <h1 className="text-8xl">Explore our service, make your smile shine</h1> */}
          <motion.div
            animate={headerIsInView ? "whileInView" : "initial"}
            initial="initial"
            variants={{
              initial: { y: 150, opacity: 0 },
              whileInView: { y: 0, opacity: 1 },
            }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="flex items-center gap-4 capitalize"
          >
            <Button
              animate={headerIsInView ? "whileInView" : "initial"}
              initial="initial"
              variants={{
                initial: { y: 0, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
              }}
              transition={{ delay: 2, duration: 2, ease: "easeOut" }}
            >
              Get the app
            </Button>
            <Button
              animate={headerIsInView ? "whileInView" : "initial"}
              initial="initial"
              variants={{
                initial: { y: 0, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
              }}
              transition={{ delay: 2, duration: 2, ease: "easeOut" }}
              variant="outline"
            >
              Meet the team
            </Button>
          </motion.div>
          <FooterCopy />
        </div>
      </div>
      <div className="sticky top-0 h-screen overflow-hidden py-10">
        <div className="grid w-full grid-cols-2 items-center gap-4">
          {imagesToDisplay.map((ele, idx) => (
            <motion.div
              id={`scroll-row-${idx + 0}`}
              key={idx}
              className={cn(
                "w-full space-y-4",
                `scroll_row--${idx + 1} scroll__row`,
                idx === 1 && "mt-0"
              )}
              style={{ translateY: idx === 0 ? translate1 : translate2 }}
            >
              {ele.map((item) => (
                <ScrollCard
                  {...item}
                  src={`https://picsum.photos/id/${item.src}/500/500`}
                  key={item.src}
                  animate={headerIsInView ? "whileInView" : "initial"}
                  initial="initial"
                  variants={{
                    initial: { rotate: -0, opacity: 0, skewY: idx === 0 ? 5 : -5 },
                    whileInView: {
                      rotate: 0,
                      opacity: 1,
                      skewY: 0,
                      transition: { duration: 1.7, ease: "easeOut" },
                    },
                  }}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
