import { AnimatePresence } from "framer-motion";
import type { PropsWithChildren } from "react";

export function NotificationBase({ children }: PropsWithChildren) {
  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 z-30 flex items-start px-4 py-6 sm:p-6"
    >
      <div className="mt-24 flex w-full flex-col items-center space-y-4 ">
        <AnimatePresence>{children}</AnimatePresence>
      </div>
    </div>
  );
}
