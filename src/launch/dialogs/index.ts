import { TextDialog } from "components/dialogs/text";
import { YesNoDialog } from "components/dialogs/yes-no";
import { AddEditorDialog } from "./add-editor";
import { DefineCardingDialog } from "./carding/define";
import { EditCardingDialog } from "./carding/edit";
import { DefineConventionDialog } from "./convention/define";
import { EditConventionDialog } from "./convention/edit";
import { ChangeNboNumberDialog } from "./nbo-number.tsx/define";
import { DefineOpeningDialog } from "./opening/define";
import { EditOpeningDialog } from "./opening/edit";
import { AddResponseDialog } from "./response/add";
import { EditResponseDialog } from "./response/edit";
import { SelectBidDialog } from "./select-bid";

export const launchableDialogs = {
  text: TextDialog,
  yesNo: YesNoDialog,

  addSystemEditor: AddEditorDialog,

  defineOpening: DefineOpeningDialog,
  editOpening: EditOpeningDialog,

  addResponse: AddResponseDialog,
  editResponse: EditResponseDialog,

  defineCarding: DefineCardingDialog,
  editCarding: EditCardingDialog,

  defineConvention: DefineConventionDialog,
  editConvention: EditConventionDialog,

  changeNboNumber: ChangeNboNumberDialog,

  selectBid: SelectBidDialog,
};
