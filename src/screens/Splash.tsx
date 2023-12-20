import { IconSlot } from "../assets/icons";
import { cn } from "../utils";

const CircleIcon = ({ className }: IClass) => {
  return (
    <div
      className={cn(className, "rounded-full border-[2px] border-ttred p-4 text-ttred")}
    >
      <IconSlot size={32} icon="arrowRight" />
    </div>
  );
};

export const SplashScreen = () => {
  return (
    <div className="grid h-screen place-items-center bg-base">
      <div className="animate-area">
        <CircleIcon />
      </div>
    </div>
  );
};
