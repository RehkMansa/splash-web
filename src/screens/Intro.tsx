import { IconKeys } from "../assets/icons";
import Image1 from "../assets/intro/image1.avif";
import Image2 from "../assets/intro/image2.avif";
import Image3 from "../assets/intro/image3.avif";
import { FlipCard } from "../components/FlipCard";

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
      <div className="container relative h-full border">
        <div className="border">
          {flipUi.map((ele, idx) => (
            <FlipCard {...ele} idx={idx} total={flipUi.length} key={ele.text} />
          ))}
        </div>
      </div>
    </div>
  );
};
