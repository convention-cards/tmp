interface Props {
  className: string;
  orientation: "horizontal" | "vertical";

  id: string;
}

export function DotPattern({ id, className, orientation }: Props) {
  const width = orientation === "vertical" ? 404 : 784;
  const height = orientation === "vertical" ? 784 : 404;
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={id}
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className="text-gray-200"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect width={784} height={784} fill={`url(#${id})`} />
    </svg>
  );
}
