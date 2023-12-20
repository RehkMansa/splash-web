import { SVGProps } from "react";
import { Slot } from "../hoc/Slot";
import { cn } from "../utils";

const Icons = {
  arrowRight: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  ),
  teeth: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" id="teeth">
      <path
        fill="#1E1E1C"
        d="M45.6 8.7C41.8 2 35.7.7 28.5 1.9c-3.5.7-6.8 1.3-10.5.5C16.3 2 14.7.9 12.9.6 9.3.1 6.7 2.1 4.9 5c-5.1 8.2 1.7 20.2 1.6 28.8 0 5.8 1.4 12.6 7.4 15.2 6.1 2.7 4.4-13 5.8-16.3 2.4-5.6 9-2.7 10.6 1.9.7 2 1 4 1.3 6.1.4 2.4 1.1 5.9 3.6 7 6.5 3 9-8.6 8.8-12.5-.2-5.4-1.9-10.4.1-15.7 1.7-4.1 3.2-6.5 1.5-10.8-.2-.5-1.5-.9-1.2-.1 2 5-.9 7-2 11.5-.7 3-.6 5.7-.3 8.7.4 3.9 1.1 7.6.3 11.4-.5 2.2-2.1 4.2-3.7 5.7-3 2.8-5.3-2.6-5.7-5-.8-4.3-1.3-9.4-5.4-11.8-3.8-2.3-8 .2-9.6 3.8-1.2 2.7-.9 6.5-1.2 9.4-.1.8-.5 7.2-3.3 5.4-1.3-.8-2.5-2.2-3.5-3.4-3-3.5-2-8.8-2.1-13.1-.1-3.8-1.3-7.5-2.2-11.2-.9-4-1.2-8-.3-12 .7-3.1 3-5.5 6-6.5 1.7-.6 5.1 1.1 7 1.8C27.7 6.4 38-2.9 44.6 8.6c.1.5 1.5.9 1 .1z"
      ></path>
      <path
        fill="#1E1E1C"
        d="M10.1 18.2c-1.4-3.4-.1-7.8 3.8-8.7 3.2-.8 6.9 0 10.2-.2.3 0-.5-1.1-.9-1.1-1.7.1-3.3-.1-5 0-1.9 0-4.7-.3-6.5.7-3.2 1.8-3.8 5.7-2.5 8.9 0 .2 1.1 1.1.9.4z"
      ></path>
    </svg>
  ),
};

type SVGElement = SVGProps<SVGSVGElement>;
interface IconProps extends SVGElement {
  icon: keyof typeof Icons;
  size?: number;
}

export const IconSlot = ({ icon, className, size, ...props }: IconProps) => {
  const Element = Icons[icon];

  return (
    <Slot<SVGElement> width={size} height={size} {...props} className={cn(className)}>
      {Element}
    </Slot>
  );
};