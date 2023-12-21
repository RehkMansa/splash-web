import { Button } from "../components/Button";
import { MatteIconRow } from "../components/CircleIcon";
import { FooterCopy } from "../components/Footer";

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
      <div className="h-screen"></div>
    </div>
  );
};
