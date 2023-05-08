import { Img } from "@react-email/img";

interface Props {
  baseUrl: string;
}
export function EmailLogo({ baseUrl }: Props) {
  return (
    <Img
      src={`${baseUrl}/logo.svg`}
      width="40"
      height="37"
      alt="ConventionCards Logo"
      style={logo}
    />
  );
}

const logo = {
  margin: "0 auto",
};
