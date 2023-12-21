import { IntroScreen } from "./screens/Intro";
import { RevolutionTextScreen } from "./screens/RevolutionText";
import { SplashScreen } from "./screens/Splash";

export const App = () => {
  return (
    <main>
      <SplashScreen />
      <IntroScreen />
      <RevolutionTextScreen />
    </main>
  );
};
