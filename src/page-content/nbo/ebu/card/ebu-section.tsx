import { useAtom } from "jotai";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import type { EBU_SECTIONS_IDS } from "./sections";
import { ebuSectionAtom } from "./sections";

interface Props {
  children: ReactNode;
  tag: EBU_SECTIONS_IDS;
}

export function EbuSection({ children, tag }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [section, setSection] = useAtom(ebuSectionAtom);

  useEffect(() => {
    if (section.id === tag && section.autoscroll) {
      const yOffset = -80;
      const refY = ref.current?.getBoundingClientRect().top ?? 0;
      const y = refY + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [section, tag]);

  useEffect(() => {
    if (ref.current !== null) {
      console.log("making, ", tag);
      const observer = new IntersectionObserver(
        (items) => {
          items.map((item) => {
            if (item?.isIntersecting) {
              setSection({ id: tag, autoscroll: false });
            }
          });
        },
        { rootMargin: "-10% 0% -89% 0%" }
      );

      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, [ref.current, tag, setSection]);

  return <div ref={ref}>{children}</div>;
}
