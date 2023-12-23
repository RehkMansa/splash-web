import { IconSlot } from "../assets/icons";
import { motion } from "framer-motion";

const icons = ["instagram", "youtube", "facebook"] as const;

export const FooterCopy = ({ children }: Partial<IChildren>) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.6 }}
      className="absolute bottom-0 flex w-full items-center justify-between"
    >
      <div className="">
        <motion.div
          initial={{ scale: 0.2, opacity: 0.6 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
          className="mb-1 h-2 w-2 rounded-full bg-ttred"
        ></motion.div>
        <p>Your smile our passion</p>
      </div>
      {children}
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-5">
          {icons.map((icon) => (
            <motion.div
              initial={{ scale: -1, opacity: 0, rotate: 90 }}
              whileInView={{ scale: 1, opacity: 1, rotate: -0 }}
              transition={{ ease: "easeOut", duration: 0.6, delay: 0.6 }}
              key={icon}
              className="overflow-hidden"
            >
              <IconSlot size={24} icon={icon} />
            </motion.div>
          ))}
        </div>
        <p className="whitespace-nowrap">Best Startup of 2023</p>
      </div>
    </motion.div>
  );
};
