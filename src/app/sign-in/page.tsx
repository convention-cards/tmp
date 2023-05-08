import { SignIn } from "@clerk/nextjs";
import { NarrowWidth } from "components/width/narrow";

export default function Page() {
  return (
    <NarrowWidth>
      <div className="flex justify-center">
        <SignIn signUpUrl="/sign-up" />
      </div>
    </NarrowWidth>
  );
}
