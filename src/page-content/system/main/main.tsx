import { CustomAnimatePresence } from "components/animation/animated-presence";
import { useAtom } from "jotai";
import { systemTabAtom } from "./atoms";
import { SystemCarding } from "./carding";
import { SystemConstructive } from "./constructive";
import { SystemCards } from "./convention-cards";
import { SystemConventions } from "./conventions";
import { SystemDefences } from "./defences";
import { SystemOverview } from "./overview";
import { SystemSettings } from "./settings";
import { SlamBidding } from "./slam-bidding";

export function SystemMainContent() {
  const [tab] = useAtom(systemTabAtom);

  return (
    <>
      <CustomAnimatePresence show={tab === "overview"}>
        <SystemOverview />
      </CustomAnimatePresence>
      <CustomAnimatePresence show={tab === "uncontested"}>
        <SystemConstructive />
      </CustomAnimatePresence>
      {/* <CustomAnimatePresence show={tab === "contested"}>
        TODO
      </CustomAnimatePresence> */}
      <CustomAnimatePresence show={tab === "conventions"}>
        <SystemConventions />
      </CustomAnimatePresence>
      <CustomAnimatePresence show={tab === "slam"}>
        <SlamBidding />
      </CustomAnimatePresence>
      <CustomAnimatePresence show={tab === "defences"}>
        <SystemDefences />
      </CustomAnimatePresence>
      <CustomAnimatePresence show={tab === "carding"}>
        <SystemCarding />
      </CustomAnimatePresence>
      <CustomAnimatePresence show={tab === "cards"}>
        <SystemCards />
      </CustomAnimatePresence>
      <CustomAnimatePresence show={tab === "settings"}>
        <SystemSettings />
      </CustomAnimatePresence>
    </>
  );
}
