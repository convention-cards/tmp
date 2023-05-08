import { CustomAnimatePresence } from "components/animation/animated-presence";
import type { SETTINGS_TABS_IDS } from "config/settings-tabs";
import { SettingsBilling } from "./billing";
import { SettingsCommunications } from "./communications";
import { SettingsDelete } from "./delete";
import { SettingsNboNumbers } from "./nbo-number";
import { SettingsProfile } from "./profile";
interface Props {
  tab: SETTINGS_TABS_IDS;
}

export function SettingsMainContent({ tab }: Props) {
  return (
    <>
      <CustomAnimatePresence show={tab === "profile"}>
        <SettingsProfile />
      </CustomAnimatePresence>
      <CustomAnimatePresence show={tab === "billing"}>
        <SettingsBilling />
      </CustomAnimatePresence>
      <CustomAnimatePresence show={tab === "nbo"}>
        <SettingsNboNumbers />
      </CustomAnimatePresence>
      <CustomAnimatePresence show={tab === "communications"}>
        <SettingsCommunications />
      </CustomAnimatePresence>
      <CustomAnimatePresence show={tab === "delete"}>
        <SettingsDelete />
      </CustomAnimatePresence>
    </>
  );
}
