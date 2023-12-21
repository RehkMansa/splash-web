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

export const MatteIconRow = () => {
  const icons = ["dna", "leaf", "crown"] as const;

  return (
    <div className="flex items-center gap-2">
      {icons.map((icon) => (
        <div key={icon} className="bg-matte rounded-full stroke-ttred p-2  text-ttred">
          <IconSlot size={20} key={icon} icon={icon} />
        </div>
      ))}
    </div>
  );
};
