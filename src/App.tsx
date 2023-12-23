import { AnimatePresence } from "framer-motion";
import { IntroScreen } from "./screens/Intro";
import { RevolutionTextScreen } from "./screens/RevolutionText";
import { Screen4 } from "./screens/Screen4";
import { SplashScreen } from "./screens/Splash";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import { Button } from "./components/Button";
import { IconSlot } from "./assets/icons";

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
        {showSplash && (
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
      <AnimatePresence>
        {!showSplash && (
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="fixed top-0 z-[999] w-full"
          >
            <motion.div className="container grid w-full grid-cols-3 gap-2 py-4">
              <div className="flex items-center gap-2">
                <Button variant="outline">Menu</Button>
                <Button
                  variant="outline"
                  className="grid h-10 max-w-10 place-items-center p-0"
                >
                  <IconSlot icon="hamburger" />
                </Button>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center text-wrap rounded-full bg-ttred text-white">
                  <IconSlot icon="teeth" size={20} />
                </div>
                <motion.div
                  animate={{ maxWidth: 400, opacity: 1 }}
                  initial={{ maxWidth: 0, opacity: 0 }}
                  transition={{ duration: 1.4, delay: 0.7 }}
                  className="overflow-hidden text-2xl font-light uppercase"
                >
                  Denytytech
                </motion.div>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <Button variant="outline">Login</Button>
                <Button>Sign Up</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <IntroScreen />
      <RevolutionTextScreen />
      <Screen4 />
    </ParallaxProvider>
  );
};
