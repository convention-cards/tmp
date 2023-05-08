import Image from "next/image";
const SIZE_LOOKUP = {
  xs: "h-6 w-6",
  sm: "h-8 w-8",
  md: "h-10 w-10",
  xl: "h-12 w-12",
  big: "h-24 w-24",
};

export interface AvatarBaseProps {
  size?: keyof typeof SIZE_LOOKUP;
}

interface Props extends AvatarBaseProps {
  src?: string | null;
  alt: string;
}

export function Avatar({ size = "sm", src, alt }: Props) {
  if (src === undefined || src === null || src === "") {
    return (
      <span
        className={`inline-block overflow-hidden rounded-full border border-gray-300 bg-gray-100 ${SIZE_LOOKUP[size]}`}
      >
        <svg
          className="h-full w-full text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>
    );
  }

  return (
    <Image
      className={`inline-block rounded-full ${SIZE_LOOKUP[size]}`}
      src={src}
      height={300}
      width={300}
      alt={alt}
    />
  );
}
