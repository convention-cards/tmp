import { useUser } from "@clerk/nextjs";
import type { AvatarBaseProps } from "./base";
import { Avatar } from "./base";

export function UserAvatar({ size = "sm" }: AvatarBaseProps) {
  const { user } = useUser();
  const image = user?.profileImageUrl;

  return <Avatar alt="Profile Piture" src={image} size={size} />;
}
