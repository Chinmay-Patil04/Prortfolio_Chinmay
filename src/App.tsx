import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About }      from "./pages/About";
import { Achievements } from "./pages/Achievements";
import { Contact }      from "./pages/Contact";
import { Education }    from "./pages/Education";
import { Experience }   from "./pages/Experience";
import { Home }         from "./pages/Home";
import { Projects }     from "./pages/Projects";
import { Skills }       from "./pages/Skills";

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  enter:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.2, ease: "easeIn" } },
};

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Routes location={location}>
            <Route path="/"             element={<Home />} />
            <Route path="/about"        element={<About />} />
            <Route path="/experience"   element={<Experience />} />
            <Route path="/projects"     element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/skills"       element={<Skills />} />
            <Route path="/education"    element={<Education />} />
            <Route path="/contact"      element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
}
