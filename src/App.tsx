import { AnimatePresence } from "framer-motion";
import { IntroScreen } from "./screens/Intro";
import { RevolutionTextScreen } from "./screens/RevolutionText";
import { Screen4 } from "./screens/Screen4";
import { SplashScreen } from "./screens/Splash";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";

export const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ParallaxProvider>
      <AnimatePresence>
        {false && (
          <>
            <motion.div
              className="fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-base"
              exit={{ opacity: 0 }}
            >
              <SplashScreen />
            </motion.div>
            <div className="h-screen" />
          </>
        )}
      </AnimatePresence>
      {/* <IntroScreen /> */}
      <RevolutionTextScreen />
      <Screen4 />
    </ParallaxProvider>
  );
};
