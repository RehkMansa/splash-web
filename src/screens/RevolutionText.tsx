import { IconSlot } from "../assets/icons";
import { CircleIcon, FramerProps, MatteIconRow } from "../components/CircleIcon";
import { FooterCopy } from "../components/Footer";
import { cn } from "../utils";
import Img1 from "../assets/screen3/smile-pfp.jpeg";
import Img2 from "../assets/screen3/smile-play.jpeg";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

interface RevealTextProps extends IClass {
  children: string;
  animateText?: FramerProps;
}

const RevealText = ({ children, className, animateText }: RevealTextProps) => {
  const revealTextRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(revealTextRef, { amount: 0.5 });

  return (
    <div ref={revealTextRef} className="relative overflow-hidden">
      <motion.div
        className={cn("text-8xl font-medium uppercase", className)}
        animate={isInView ? "final" : "initial"}
        initial="initial"
        variants={{
          initial: { y: 75, opacity: 0 },
          final: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
        {...animateText}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 z-[2] bg-white"
        animate={isInView ? "final" : "initial"}
        initial="initial"
        variants={{
          initial: { y: 0 },
          final: { y: "-100vh" },
        }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      />
    </div>
  );
};

export const RevolutionTextScreen = () => {
  return (
    <Parallax
      speed={10}
      className="container relative mb-20 flex h-screen flex-col items-center justify-center"
    >
      <div className="relative flex flex-col gap-10 text-center">
        <div className="flex items-center gap-6">
          <RevealText>Revolutionizing</RevealText>
          <div>
            <MatteIconRow />
            <p className="mt-2 text-left text-sm font-semibold">
              <RevealText
                animateText={{
                  transition: { duration: 0.5, delay: 0.4 },
                }}
                className="text-left text-sm font-semibold capitalize text-black/80"
              >
                Modern solutions,
              </RevealText>
              <RevealText
                animateText={{
                  transition: { duration: 0.5, delay: 0.4 },
                }}
                className="text-left text-sm font-semibold capitalize text-black/80"
              >
                Timeless smiles
              </RevealText>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="flex gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex origin-right items-center gap-2 overflow-hidden"
            >
              <motion.div
                initial={{ maxWidth: 0, opacity: 0 }}
                whileInView={{ maxWidth: 160, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
                className="grid place-items-center overflow-hidden rounded-full bg-matte/90 px-4 py-2.5 text-lg font-medium text-ttred/90"
              >
                ASSISTANCE
              </motion.div>
              <CircleIcon
                icon="teeth"
                iconProps={{ size: 24 }}
                initial={{ maxWidth: 0, opacity: 0 }}
                whileInView={{ maxWidth: 160, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                className="bg-ttred text-white"
              />
            </motion.div>
            <RevealText>Dental</RevealText>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="mr-[-40px] flex items-center gap-4"
          >
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              src={Img1}
              alt=""
              className="relative z-[1] h-28 w-28 overflow-hidden rounded-full object-cover"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0, x: -80 }}
              whileInView={{ scale: 1, opacity: 1, x: -50 }}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
              className="grid h-28 w-28 place-items-center overflow-hidden rounded-full bg-matte text-ttred"
            >
              <IconSlot icon="plantFilled" size={70} />
            </motion.div>
          </motion.div>
          <RevealText>Care</RevealText>
        </div>
        <div className="flex items-center gap-4">
          <RevealText>With technology</RevealText>
          <div className="relative flex h-16 w-44 items-center">
            {[0.1, 0.3, 0.5, 7].map((n, idx) => (
              <img
                src={`https://picsum.photos/id/${n * 100}/200/200`}
                className="absolute h-16 w-16 rounded-full"
                style={{ translate: `${idx * 20}px 0`, zIndex: 4 - idx }}
                alt=""
                key={n}
              />
            ))}
            <div className="absolute right-0 rounded-full bg-matte p-2 text-ttred">
              <IconSlot icon="plus" size={18} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 -translate-x-[30%] translate-y-[80%]">
          <img src={Img2} alt="" className="h-32 w-56 rounded-md object-cover" />
          <div className="absolute bottom-0 right-0 grid h-10 w-10 translate-x-4 translate-y-4 place-items-center rounded-full bg-matte text-ttred">
            <IconSlot icon="play" size={18} />
          </div>
        </div>
      </div>
      <FooterCopy>
        <motion.div
          className={cn(
            "relative before:absolute before:inset-0 before:left-1/2 before:top-1/2 before:h-[110%] before:w-[110%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border before:border-ttred before:bg-white",
            "after:absolute after:-top-2 after:left-1/2 after:h-[80%] after:w-[110%] after:-translate-x-1/2 after:rounded-full after:bg-white"
          )}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative z-[1] grid h-36 w-36 place-items-center rounded-full bg-ttred text-white">
            <span className="text-center text-2xl font-medium uppercase">
              Get Started
            </span>
          </div>
        </motion.div>
      </FooterCopy>
    </Parallax>
  );
};
