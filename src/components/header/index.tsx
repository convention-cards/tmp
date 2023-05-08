import { PrimaryHeader } from "./primary-header";

export function Header() {
  return (
    <>
      <header className="fixed top-0 z-40 w-full border-b border-gray-200 bg-white/50 backdrop-blur-md transition-all">
        <PrimaryHeader />
        {/* <Breadcrumbs /> */}
      </header>
      <div className="h-16" />
    </>
  );
}
