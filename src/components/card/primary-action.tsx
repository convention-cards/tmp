import { RelativeLink } from "components/relative-link";
import Link from "next/link";

interface WithOnClick {
  onClick: () => void;
  href?: never;
  relativeHref?: never;
}
interface WithHref {
  onClick?: never;
  href: string;
  relativeHref?: never;
}
interface WithRelativeHref {
  onClick?: never;
  href?: never;
  relativeHref: string;
}

export type CardPrimaryActionProps = {
  text: string;
} & (WithOnClick | WithHref | WithRelativeHref);

export function CardPrimaryAction({
  text,
  onClick,
  href,
  relativeHref,
}: CardPrimaryActionProps) {
  const cx =
    "block cursor-pointer bg-gray-100 px-4 py-4 text-center text-sm font-medium text-gray-500 hover:text-gray-700 sm:rounded-b-lg";

  if (href !== undefined) {
    return (
      <Link href={href} className={cx}>
        {text}
      </Link>
    );
  }

  if (relativeHref !== undefined) {
    return (
      <RelativeLink href={relativeHref} className={cx}>
        {text}
      </RelativeLink>
    );
  }

  return (
    <div onClick={onClick} className={cx}>
      {text}
    </div>
  );
}
