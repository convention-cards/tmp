import { RelativeLink } from "components/relative-link";
import { Spinner } from "components/spinner";
import Link from "next/link";
import type { ReactNode } from "react";

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

export type ButtonProps = {
  text?: string;
  icon?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
} & (WithOnClick | WithHref | WithRelativeHref);

type Props = {
  className: string;
} & ButtonProps;

export function BaseButton({
  text = "",
  icon,
  onClick,
  href,
  relativeHref,
  className,
  disabled = false,
  loading = false,
}: Props) {
  if (disabled) {
    return (
      <div className={className + " inline-block"}>
        {loading && <Spinner />}
        {!loading && (
          <>
            {text}
            {icon}
          </>
        )}
      </div>
    );
  }

  if (relativeHref !== undefined) {
    return (
      <RelativeLink href={relativeHref} className={className}>
        {loading && <Spinner />}
        {!loading && (
          <>
            {text}
            {icon}
          </>
        )}
      </RelativeLink>
    );
  }

  if (href !== undefined) {
    return (
      <Link href={href} className={className}>
        {loading && <Spinner />}
        {!loading && (
          <>
            {text}
            {icon}
          </>
        )}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
    >
      {loading && <Spinner />}
      {!loading && (
        <>
          {text}
          {icon}
        </>
      )}
    </button>
  );
}
