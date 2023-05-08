import { Img } from "@react-email/img";

interface Props {
  userImageUrl: string;
}
export function EmailUserImage({ userImageUrl }: Props) {
  return (
    <Img
      src={userImageUrl}
      alt="The user's image"
      style={avatar}
      width="50px"
      height="50px"
    />
  );
}

const avatar = {};
