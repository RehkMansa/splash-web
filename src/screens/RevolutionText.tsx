import { IconSlot } from "../assets/icons";
import { CircleIcon } from "../components/CircleIcon";
import { FooterCopy } from "../components/Footer";
import { cn } from "../utils";
import Img1 from "../assets/screen3/smile-pfp.jpeg";
import Img2 from "../assets/screen3/smile-play.jpeg";

const icons = ["dna", "leaf", "crown"] as const;

const RevealText = ({ children, className }: IProps) => (
  <div className={cn("text-8xl font-medium uppercase", className)}>{children}</div>
);

export const RevolutionTextScreen = () => {
  return (
    <div className="container relative flex h-screen flex-col items-center justify-center">
      <div className="relative flex flex-col gap-10 text-center">
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
          <div className="flex gap-4">
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
          <div className="flex items-center gap-4">
            <img src={Img1} alt="" className="h-28 w-28 rounded-full object-cover" />
            <div className="bg-matte grid h-28 w-28 place-items-center rounded-full text-ttred">
              <IconSlot icon="plantFilled" size={70} />
            </div>
          </div>
          <RevealText>Care</RevealText>
        </div>
        <div className="flex items-center gap-4">
          <RevealText>With technology</RevealText>
          <div className="relative flex h-16 w-44 items-center">
            {[0.1, 0.3, 0.5, 7].map((n, idx) => (
              <img
                src={`https://picsum.photos/id/${n * 100}/200/200`}
                className="absolute h-16 w-16 rounded-full"
                style={{ translate: `${idx * 20}px 0`, zIndex: 4 - idx }}
                alt=""
                key={n}
              />
            ))}
            <div className="bg-matte absolute right-0 rounded-full p-2 text-ttred">
              <IconSlot icon="plus" size={18} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 -translate-x-[30%] translate-y-[80%]">
          <img src={Img2} alt="" className="h-32 w-56 rounded-md object-cover" />
          <div className="bg-matte absolute bottom-0 right-0 grid h-10 w-10 translate-x-4 translate-y-4 place-items-center rounded-full text-ttred">
            <IconSlot icon="play" size={18} />
          </div>
        </div>
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
