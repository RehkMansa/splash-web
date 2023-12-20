import { IconSlot, IconKeys } from "../assets/icons";
import { cn } from "../utils";

interface CircleIconProps extends IClass {
  icon?: IconKeys;
}

const CircleIcon = ({ className, icon }: CircleIconProps) => {
  return (
    <div
      className={cn(
        "w-fit rounded-full border-[2px] border-ttred p-4 text-ttred",
        className
      )}
    >
      <IconSlot size={32} icon={icon ?? "arrowRight"} />
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
