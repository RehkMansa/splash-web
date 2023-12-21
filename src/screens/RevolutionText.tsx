import { IconSlot } from "../assets/icons";
import { CircleIcon } from "../components/CircleIcon";
import { FooterCopy } from "../components/Footer";
import { cn } from "../utils";

const icons = ["dna", "leaf", "crown"] as const;

const RevealText = ({ children, className }: IProps) => (
  <div className={cn("text-8xl font-medium uppercase", className)}>{children}</div>
);

export const RevolutionTextScreen = () => {
  return (
    <div className="container relative flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col gap-10 text-center">
        <div className="flex items-center gap-6">
          <RevealText>Revolutionizing</RevealText>
          <div>
            <div className="flex items-center gap-2">
              {icons.map((icon) => (
                <div
                  key={icon}
                  className="bg-matte rounded-full stroke-ttred p-2  text-ttred"
                >
                  <IconSlot size={20} key={icon} icon={icon} />
                </div>
              ))}
            </div>
            <p className="mt-2 text-left text-sm font-semibold">
              Modern solutions, <br /> Timeless smiles
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="flex">
            <div className="flex items-center gap-2">
              <div className="bg-matte grid place-items-center rounded-full px-4 py-2.5 text-lg font-medium text-ttred">
                ASSISTANCE
              </div>
              <CircleIcon
                icon="teeth"
                iconProps={{ size: 24 }}
                className="bg-ttred text-white"
              />
            </div>
            <RevealText>Dental</RevealText>
          </div>
          <RevealText>Care</RevealText>
        </div>
        <RevealText>With technology</RevealText>
      </div>
      <FooterCopy>
        <div
          className={cn(
            "relative before:absolute before:inset-0 before:left-1/2 before:top-1/2 before:h-[110%] before:w-[110%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border before:border-ttred before:bg-white",
            "after:absolute after:-top-2 after:left-1/2 after:h-[80%] after:w-[110%] after:-translate-x-1/2 after:rounded-full after:bg-white"
          )}
        >
          <div className="relative z-[1] grid h-36 w-36 place-items-center rounded-full bg-ttred text-white">
            <span className="text-center text-2xl font-medium uppercase">
              Get Started
            </span>
          </div>
        </div>
      </FooterCopy>
    </div>
  );
};
