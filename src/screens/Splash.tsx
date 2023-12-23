import { useEffect, useState } from "react";
import { CircleIcon, FramerProps } from "../components/CircleIcon";
import { cn } from "../utils";
import { motion } from "framer-motion";

interface FadeDisappearText extends IProps {
  position?: "right" | "left";
  circleIconAnimation?: FramerProps;
  hideDisplayFinal?: boolean;
}

const FadeDisappearText = ({
  children,
  className,
  position = "right",
  circleIconAnimation,
  hideDisplayFinal,
}: FadeDisappearText) => {
  return (
    <div
      className={cn(
        "flex w-fit items-center gap-4 rounded-full bg-ttred p-4 text-2xl  uppercase text-white",
        className
      )}
    >
      <motion.div
        animate={{ width: 0, overflow: "hidden", marginLeft: "-1rem", opacity: 0 }}
        transition={{ ease: "linear", duration: 0.6 }}
        style={{ transformOrigin: "center" }}
      >
        {children}
      </motion.div>

      <motion.div
        style={{
          transformOrigin: "center",
          display: hideDisplayFinal ? "none" : "block",
        }}
        animate={{ width: "32px", overflow: "hidden", opacity: 1 }}
        initial={{ width: "0", opacity: 0 }}
        transition={{ ease: "linear", duration: 0.4, delay: 0.3 }}
      >
        <CircleIcon
          {...circleIconAnimation}
          className={cn(position === "left" ? "" : "text-white", "border-none p-0")}
          icon={position === "left" ? "arrowDown" : "arrowRight"}
        />
      </motion.div>
    </div>
  );
};

const variant = (offset = 0) => {
  return {
    moveDown: {
      rotate: 90,
      transition: {
        duration: 0.4,
        delay: 0.8 + offset,
      },
    },
    moveLeft: {
      rotate: 0,
      transition: {
        duration: 0.4,
        delay: offset ? offset + 0.2 : 0,
      },
    },
  };
};

export const SplashScreen = () => {
  const [arrowMovement, setArrowMovement] = useState<"moveDown" | "moveLeft">("moveDown");
  const [containerMovement, setContainerMovement] = useState<"moveY" | "moveX">("moveY");
  const [hideFinalOpacity, setHideFinalOpacity] = useState<0 | 1>(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setContainerMovement("moveX");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setArrowMovement("moveLeft");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 1450);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <motion.div
      animate={containerMovement}
      className="flex max-h-screen w-fit flex-col gap-10"
    >
      <motion.div
        className="flex gap-4"
        animate={containerMovement}
        variants={{
          moveY: { y: 50, transition: { duration: 0.6, delay: 1 } },
          moveX: {
            y: 50,
            x: 10,
            transition: { duration: 0.3 },
          },
        }}
        style={{ opacity: hideFinalOpacity }}
        onAnimationComplete={(definition) => {
          if (definition === "moveX") {
            setHideFinalOpacity(0);
          }
        }}
      >
        <CircleIcon variants={variant()} animate={arrowMovement} />
        <FadeDisappearText
          circleIconAnimation={{
            variants: variant(0.2),
            animate: arrowMovement,
          }}
        >
          Dental
        </FadeDisappearText>
      </motion.div>
      <motion.div
        animate={containerMovement}
        variants={{
          moveY: { y: -58, x: 160, transition: { duration: 0.6, delay: 1 } },
          moveX: { y: -58, x: 50, transition: { duration: 0.8 } },
        }}
        initial={{ x: "160px" }}
        className="flex  gap-4"
      >
        {hideFinalOpacity > 0 && (
          <FadeDisappearText
            circleIconAnimation={{
              initial: { rotate: 90 },
              animate: { rotate: 180 },
              transition: { duration: 0.4, delay: 0.8 },
            }}
            position="left"
            className="bg-white text-ttred"
          >
            Assistance
          </FadeDisappearText>
        )}
        <CircleIcon icon="teeth" className="bg-ttred text-white" />
      </motion.div>
      <motion.h4
        initial={{ height: 0 }}
        animate={{ height: 36 }}
        transition={{ duration: 0.4, delay: 2.8 }}
        className="-mt-20 overflow-hidden text-center text-3xl  uppercase text-ttred"
      >
        DentyTech
      </motion.h4>
    </motion.div>
  );
};
