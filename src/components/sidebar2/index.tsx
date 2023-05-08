import { SidebarItem } from "./sidebar-item";

type Props<ID, ITEM> = {
  tabs: readonly ITEM[];
  currentTabId: ID;
  prefix: string;
};
export function Sidebar<
  ID extends string,
  ITEM extends { id: ID; name: string; href: string }
>({ currentTabId, tabs, prefix }: Props<ID, ITEM>) {
  return (
    <nav className="sticky top-20 self-start" aria-label="Sidebar">
      {tabs.map(({ id, name, href }) => (
        <SidebarItem
          key={id}
          selected={id === currentTabId}
          name={name}
          href={prefix + href}
        />
      ))}
    </nav>
  );
}
