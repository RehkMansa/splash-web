import { IntroScreen } from "./screens/Intro";
import { RevolutionTextScreen } from "./screens/RevolutionText";
import { Screen4 } from "./screens/Screen4";
import { SplashScreen } from "./screens/Splash";

export const App = () => {
  return (
    <main>
      <SplashScreen />
      <IntroScreen />
      <RevolutionTextScreen />
      <Screen4 />
    </main>
  );
};
