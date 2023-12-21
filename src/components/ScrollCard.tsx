import { CircleIcon } from "./CircleIcon";

interface ScrollCardProps {
  text: string;
  src: string;
}
export const ScrollCard = ({ src, text }: ScrollCardProps) => {
  return (
    <div
      className="flex h-[400px] w-full flex-col rounded-xl bg-cover p-5"
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="flex items-center justify-end gap-2">
        <CircleIcon
          className="border-none bg-white text-black"
          iconProps={{ size: 20 }}
          icon="heart"
        />
        <CircleIcon
          iconProps={{ size: 20 }}
          icon="rightUpWards"
          className="border-none bg-white text-black"
        />
      </div>
      <div className="mt-auto w-fit rounded-full border border-white px-4 py-2 text-white">
        {text}
      </div>
    </div>
  );
};
