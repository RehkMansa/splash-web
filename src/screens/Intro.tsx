import { IconKeys, IconSlot } from "../assets/icons";
import Image1 from "../assets/intro/image1.avif";
import Image2 from "../assets/intro/image2.avif";
import Image3 from "../assets/intro/image3.avif";
import { FlipCard } from "../components/FlipCard";
import { FooterCopy } from "../components/Footer";

interface FlipUI {
  icon: IconKeys;
  text: string;
  src: string;
  offset: number;
}

const flipUi: FlipUI[] = [
  { text: "Convenience", icon: "hand", src: Image1, offset: 12 },
  { text: "Modern Solution", icon: "connection", src: Image2, offset: 15 },
  { text: "Personalized Care", icon: "cursor-arrow-triple", src: Image3, offset: 18 },
];

export const IntroScreen = () => {
  return (
    <div className="h-screen">
      <div className="container relative h-full">
        <div className="flex h-full flex-col items-center justify-center">
          <h1 className="whitespace-nowrap text-center text-[150px] font-medium">
            OUR ADVANTAGES
          </h1>
          {flipUi.map((ele, idx) => (
            <FlipCard {...ele} idx={idx} total={flipUi.length} key={ele.text} />
          ))}

          <FooterCopy>
            <div className="relative mx-auto flex h-20 w-20 translate-y-5 items-center justify-center rounded-full border border-black after:absolute after:bottom-0 after:h-1/2 after:w-full after:translate-y-4 after:bg-white">
              <div className="-mt-3">
                <IconSlot icon="arrowDown" className="animate-bounce" size={28} />
              </div>
            </div>
          </FooterCopy>
        </div>
      </div>
    </div>
  );
};
