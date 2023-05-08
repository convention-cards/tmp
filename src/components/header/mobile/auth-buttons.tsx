import { PrimaryButton } from "components/buttons/primary";
import { SecondaryButton } from "components/buttons/secondary";

export function MobileAuthButtons() {
  return (
    <div className="flex items-center justify-evenly gap-4 p-4">
      <SecondaryButton href="/sign-in" text="Login" />
      <PrimaryButton href="/sign-up" text="Try for free" />
    </div>
  );
}
