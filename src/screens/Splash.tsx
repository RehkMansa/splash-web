import { CircleIcon } from "../components/CircleIcon";
import { cn } from "../utils";
import { motion } from "framer-motion";

interface FadeDisappearText extends IProps {
  position?: "right" | "left";
}

const FadeDisappearText = ({
  children,
  className,
  position = "right",
}: FadeDisappearText) => {
  return (
    <div
      className={cn(
        "flex w-fit items-center gap-4 rounded-full bg-ttred p-4 text-2xl font-medium uppercase text-white",
        className
      )}
    >
      <motion.div
        // initial={{ width: "auto" }}
        animate={{ width: 0, overflow: "hidden", marginLeft: "-1rem", opacity: 0 }}
        transition={{ ease: "linear", duration: 0.6 }}
        style={{ transformOrigin: "center" }}
      >
        {children}
      </motion.div>

      <motion.div
        style={{ transformOrigin: "center" }}
        animate={{ width: "32px", overflow: "hidden", opacity: 1 }}
        initial={{ width: "0", opacity: 0 }}
        transition={{ ease: "linear", duration: 0.4, delay: 0.3 }}
      >
        <CircleIcon
          className={cn(
            position === "left" ? "-scale-x-100" : "text-white",
            "border-none p-0"
          )}
        />
      </motion.div>
    </div>
  );
};

export const SplashScreen = () => {
  return (
    <div className="grid h-screen place-items-center bg-base">
      <div className="flex w-fit flex-col gap-10">
        <div className="flex gap-4">
          <CircleIcon />
          <FadeDisappearText>Dental</FadeDisappearText>
        </div>
        <div className="flex translate-x-28 gap-4">
          <FadeDisappearText position="left" className={"bg-white text-ttred"}>
            Assistance
          </FadeDisappearText>
          <CircleIcon icon="teeth" className="bg-ttred text-white" />
        </div>
        <h4 className="-mt-5 text-center text-3xl font-medium uppercase text-ttred">
          DentyTech
        </h4>
      </div>
    </div>
  );
};
