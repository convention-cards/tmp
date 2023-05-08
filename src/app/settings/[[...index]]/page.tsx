"use client";

import { UserProfile } from "@clerk/nextjs";

export default function Profile() {
  return (
    <UserProfile
      routing="path"
      path="/settings"
      appearance={{
        elements: {
          navbar: { display: "none" },
          // card: { display: "none" },
        },
        variables: {
          borderRadius: "0",
          shadowShimmer: "none",
        },
      }}
    />
  );
}
