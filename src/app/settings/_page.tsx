"use client";

import { UserProfile } from "@clerk/nextjs";

export default function Settings() {
  return (
    <div className="flex justify-center py-8">
      <UserProfile path="/settings" routing="path" />
    </div>
  );
}
