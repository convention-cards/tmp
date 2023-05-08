"use client";

export function MobileMenu() {
  return (
    <div />
    // <Transition.Root as={Fragment}>
    //   <div className="lg:hidden">
    //     <Transition.Child
    //       as={Fragment}
    //       enter="duration-150 ease-out"
    //       enterFrom="opacity-0"
    //       enterTo="opacity-100"
    //       leave="duration-150 ease-in"
    //       leaveFrom="opacity-100"
    //       leaveTo="opacity-0"
    //     >
    //       <Popover.Overlay
    //         className="fixed inset-0 z-20 bg-black bg-opacity-25"
    //         aria-hidden="true"
    //       />
    //     </Transition.Child>

    //     <Transition.Child
    //       as={Fragment}
    //       enter="duration-150 ease-out"
    //       enterFrom="opacity-0 scale-95"
    //       enterTo="opacity-100 scale-100"
    //       leave="duration-150 ease-in"
    //       leaveFrom="opacity-100 scale-100"
    //       leaveTo="opacity-0 scale-95"
    //     >
    //       <Popover.Panel
    //         focus
    //         className="absolute right-0 top-0 z-30 w-full max-w-none origin-top transform p-2 transition"
    //       >
    //         <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
    //           <MobilePrimaryLinks />
    //           <SignedIn>
    //             <MobileProfile />
    //           </SignedIn>
    //           <SignedOut>
    //             <MobileAuthButtons />
    //           </SignedOut>
    //         </div>
    //       </Popover.Panel>
    //     </Transition.Child>
    //   </div>
    // </Transition.Root>
  );
}
