import classNames from "classnames";
import Link from "next/link";

interface Props {
  name: string;
  selected: boolean;
  href: string;
}
export function SidebarItem({ name, selected, href }: Props) {
  const itemClasses = classNames(
    "flex items-center rounded-md px-3 py-2 text-sm font-medium cursor-pointer",
    selected && "bg-indigo-600 text-white",
    !selected && "text-gray-600 hover:bg-white hover:text-gray-900"
  );
  return (
    <Link
      className={itemClasses}
      aria-current={selected ? "page" : undefined}
      href={href}
    >
      <span className="truncate">{name}</span>
    </Link>
  );
}
