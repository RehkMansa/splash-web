import { Button } from "../components/Button";
import { MatteIconRow } from "../components/CircleIcon";
import { FooterCopy } from "../components/Footer";
import { ScrollCard } from "../components/ScrollCard";
import { cn } from "../utils";

const imagesToDisplay = [
  [
    { text: "Dental Health Records", src: 99 },
    { text: "Some text", src: 199 },
    { text: "Another text", src: 299 },
    { text: "Short Text", src: 399 },
  ],
  [
    { text: "An Okay Text", src: 229 },
    { text: "I am playing", src: 419 },
    { text: "Random dentist text", src: 499 },
    { text: "Clean teeth", src: 666 },
  ],
];

export const Screen4 = () => {
  return (
    <div className="container grid grid-cols-2 gap-10">
      <div className="relative h-[95vh] pb-10 capitalize">
        <div className="flex h-full flex-col justify-center gap-10">
          <MatteIconRow />
          <h1 className="text-8xl">Explore our service, make your smile shine</h1>
          <div className="flex items-center gap-4">
            <Button>Get the app</Button>
            <Button variant="outline">Meet the team</Button>
          </div>
        </div>
        <FooterCopy />
      </div>
      <div className="h-screen py-10">
        <div className="flex w-full items-center gap-4">
          {imagesToDisplay.map((ele, idx) => (
            <div key={idx} className={cn("w-full space-y-4", idx === 1 && "mt-20")}>
              {ele.map((item) => (
                <ScrollCard
                  {...item}
                  src={`https://picsum.photos/id/${item.src}/500/500`}
                  key={item.src}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
