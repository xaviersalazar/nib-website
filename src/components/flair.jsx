import React from "react";
import { AnimatePresence, motion } from "framer-motion";

// FlipWords — cycles through a list of words with a soft blur/rise cross-fade,
// echoing the same "focus-pull" easing used elsewhere on the page. The outgoing
// word is taken out of flow (absolute) so the incoming word sizes the line and
// nothing collapses to zero width mid-transition.
export const FlipWords = ({ words, duration = 2600, className = "" }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(t);
  }, [words, duration]);

  const word = words[index];

  return (
    <span className="relative inline-block whitespace-nowrap align-baseline">
      <AnimatePresence initial={false}>
        <motion.span
          key={word}
          initial={{ opacity: 0, y: "0.35em", filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{
            opacity: 0,
            y: "-0.4em",
            filter: "blur(8px)",
            position: "absolute",
            left: 0,
          }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`inline-block ${className}`}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
