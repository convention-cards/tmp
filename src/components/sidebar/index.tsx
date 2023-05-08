import { SidebarItem } from "./sidebar-item";

type Props<ID, ITEM> = {
  tabs: readonly ITEM[];
  currentTabId: ID;
  setTab: (id: ID) => void;
};
export function Sidebar<
  ID extends string,
  ITEM extends { id: ID; name: string }
>({ currentTabId, setTab, tabs }: Props<ID, ITEM>) {
  return (
    <nav className="sticky top-20 self-start" aria-label="Sidebar">
      {tabs.map(({ id, name }) => (
        <SidebarItem
          key={id}
          selected={id === currentTabId}
          name={name}
          onClick={() => setTab(id)}
        />
      ))}
    </nav>
  );
}
