import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  show: boolean;
  children: ReactNode;
}

export function CustomAnimatePresence({ show, children }: Props) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            display: "none",
            transition: {
              duration: 0,
            },
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
