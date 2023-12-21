import { IconKeys, IconSlot } from "../assets/icons";
import { cn } from "../utils";

interface CircleIconProps extends IClass {
  icon?: IconKeys;
  iconProps?: Omit<ComponentProps<typeof IconSlot>, "icon">;
}

export const CircleIcon = ({ className, icon, iconProps }: CircleIconProps) => {
  return (
    <div
      className={cn(
        "w-fit rounded-full border-[2px] border-ttred p-4 text-ttred",
        className
      )}
    >
      <IconSlot size={32} icon={icon ?? "arrowRight"} {...iconProps} />
    </div>
  );
};
