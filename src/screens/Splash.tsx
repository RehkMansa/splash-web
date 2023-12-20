import { IconSlot } from "../assets/icons";
import { cn } from "../utils";

const CircleIcon = ({ className }: IClass) => {
  return (
    <div
      className={cn(
        "w-fit rounded-full border-[2px] border-ttred p-4 text-ttred",
        className
      )}
    >
      <IconSlot size={32} icon="arrowRight" />
    </div>
  );
};

interface FadeDisappearText extends IProps {
  position?: "right" | "left";
}

const FadeDisappearText = ({
  children,
  className,
  position = "right",
}: FadeDisappearText) => (
  <div
    className={cn(
      "flex w-fit items-center gap-4 rounded-full bg-ttred p-4 px-8 text-2xl font-medium uppercase text-white",
      className
    )}
  >
    {children}
    <CircleIcon
      className={cn(
        position === "left" ? "-scale-x-100" : "text-white",
        "border-none p-0"
      )}
    />
  </div>
);

export const SplashScreen = () => {
  return (
    <div className="grid h-screen place-items-center bg-base">
      <div className="flex w-fit flex-col gap-10">
        <div className="flex gap-4">
          <CircleIcon />
          <FadeDisappearText>Dental</FadeDisappearText>
        </div>
        <div className="flex translate-x-28 gap-4">
          <FadeDisappearText position="left" className="bg-white text-ttred">
            Assistance
          </FadeDisappearText>
          <CircleIcon />
        </div>
      </div>
    </div>
  );
};
