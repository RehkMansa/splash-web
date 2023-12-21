import { IconSlot } from "../assets/icons";

export const FooterCopy = ({ children }: Partial<IChildren>) => {
  return (
    <div className="absolute bottom-0 flex w-full items-center justify-between">
      <div className="">
        <div className="mb-1 h-2 w-2 rounded-full bg-ttred"></div>
        <p>Your smile our passion</p>
      </div>
      {children}
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-5">
          <IconSlot size={24} icon="instagram" />
          <IconSlot size={24} icon="youtube" />
          <IconSlot size={24} icon="facebook" />
        </div>
        <p className="whitespace-nowrap">Best Startup of 2023</p>
      </div>
    </div>
  );
};
