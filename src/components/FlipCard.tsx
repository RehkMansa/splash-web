import { motion } from "framer-motion";
import { IconKeys, IconSlot } from "../assets/icons";
import { FramerProps } from "./CircleIcon";

interface FlipCardProps extends FramerProps {
  src: string;
  text: string;
  icon: IconKeys;
  idx: number;
  total: number;
  // offset: number;
}

export const FlipCard = ({ src, icon, text, idx, total, ...rest }: FlipCardProps) => {
  return (
    <motion.div
      className="flip-card absolute left-1/2 top-1/2 flex h-[450px] w-[300px] rounded-2xl bg-white bg-cover"
      style={{
        backgroundImage: `url(${src})`,
        zIndex: total - idx + 1,
      }}
      {...rest}
      data-flip={idx}
    >
      <div className="mx-auto mb-10 mt-auto flex w-fit items-center gap-1">
        <div className="rounded-full bg-white p-2">
          <IconSlot size={24} icon={icon} />
        </div>
        <div className="rounded-full bg-white px-5 py-2">{text}</div>
      </div>
    </motion.div>
  );
};
