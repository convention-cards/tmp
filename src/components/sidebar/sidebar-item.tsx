import classNames from "classnames";

interface Props {
  name: string;
  selected: boolean;
  onClick: () => void;
}
export function SidebarItem({ name, selected, onClick }: Props) {
  const itemClasses = classNames(
    "flex items-center rounded-md px-3 py-2 text-sm font-medium cursor-pointer",
    selected && "bg-indigo-600 text-white",
    !selected && "text-gray-600 hover:bg-white hover:text-gray-900"
  );
  return (
    <div
      className={itemClasses}
      aria-current={selected ? "page" : undefined}
      onClick={onClick}
    >
      <span className="truncate">{name}</span>
    </div>
  );
}
