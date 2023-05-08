import type { PropsWithChildren } from "react";

export function NarrowWidth({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl py-48">{children}</div>
    </div>
  );
}
