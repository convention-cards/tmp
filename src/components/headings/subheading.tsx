interface Props {
  title: string;
}

export function SubHeading({ title }: Props) {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h3 className="text-md font-bold leading-7 text-gray-900 sm:text-xl sm:tracking-tight">
          {title}
        </h3>
      </div>
    </div>
  );
}
