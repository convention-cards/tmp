import { SignUp } from "@clerk/nextjs";
import { NarrowWidth } from "components/width/narrow";

export default function Page() {
  return (
    <NarrowWidth>
      <div className="flex justify-center">
        <SignUp signInUrl="/sign-in" />
      </div>
    </NarrowWidth>
  );
}
