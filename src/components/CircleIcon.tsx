import { motion } from "framer-motion";
import { IconKeys, IconSlot } from "../assets/icons";
import { cn } from "../utils";

export type FramerProps = ComponentProps<(typeof motion)["div"]>;
interface CircleIconProps extends IClass, FramerProps {
  icon?: IconKeys;
  iconProps?: Omit<ComponentProps<typeof IconSlot>, "icon">;
}

export const CircleIcon = ({ className, icon, iconProps, ...rest }: CircleIconProps) => {
  return (
    <motion.div
      {...rest}
      className={cn(
        "w-fit rounded-full border-[2px] border-ttred p-4 text-ttred",
        className
      )}
    >
      <IconSlot size={32} icon={icon ?? "arrowRight"} {...iconProps} />
    </motion.div>
  );
};

export const MatteIconRow = () => {
  const icons = ["dna", "leaf", "crown"] as const;

  return (
    <div className="flex items-center gap-2">
      {icons.map((icon) => (
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 90 }}
          whileInView={{ opacity: 1, rotate: -0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
          key={icon}
          className="rounded-full bg-matte stroke-ttred p-2  text-ttred"
        >
          <IconSlot size={20} key={icon} icon={icon} />
        </motion.div>
      ))}
    </div>
  );
};
