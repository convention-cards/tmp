import { Heading } from "components/headings";
import { WideWidth } from "components/width/wide";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <WideWidth>
      <div className="py-8">
        <div>
          <Heading title="Systems" />
          <div className="my-6" />
          {children}
        </div>
      </div>
    </WideWidth>
  );
}
