import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Fragment, useState, useEffect } from "react";
import Logo from "./logo";
import ThemeSwitch from "./theme-switch";

const navigation = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "blog", href: "/blog" },
];

export default function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setIsAtTop(position === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Popover
      className={`sticky top-0 z-10 bg-gray-50 dark:bg-gray-900 ${
        isAtTop ? "" : "drop-shadow-md"
      }`}
    >
      <div className="sticky-top-0 py-4 px-4 sm:px-6 lg:px-8">
        <nav
          className="sticky-top-0 item center flex items-center justify-between sm:h-10 lg:justify-center"
          aria-label="Global"
        >
          <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
            <div className="mr-2 flex w-full items-center justify-between md:w-auto">
              <Link href="/">
                <a>
                  <Logo className="max-w-[50px]" />
                </a>
              </Link>

              <div className="flex items-center md:hidden">
                <Popover.Button className="focus:ring-indigo-500  inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset dark:bg-primary-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className=" sticky-top-0 hidden items-center md:ml-10 md:flex md:space-x-8 md:pr-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className="font-medium text-gray-800 hover:text-primary-400  dark:text-gray-300">
                  {item.name}
                </a>
              </Link>
            ))}
            <ThemeSwitch />
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <Link href="/">
                <a>
                  <Logo className="max-w-[50px]" />
                </a>
              </Link>
              <Popover.Button className="focus:ring-indigo-500 inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset dark:bg-primary-500">
                <span className="sr-only">Close main menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
