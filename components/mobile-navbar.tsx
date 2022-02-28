import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [showNav, setShowNav] = useState(false);
  const handleToggleNav = () => {
    setShowNav((prev) => {
      // Prevent scrolling
      document.body.style.overflow = prev ? "auto" : "hidden";
      return !prev;
    });
  };

  return (
    <div className="flex items-center justify-center sm:hidden">
      <button
        type="button"
        className="ml-1 mr-1 h-8 w-8 rounded"
        onClick={handleToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          {showNav ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
      <div
        className={`fixed top-16 right-0 z-10 h-full w-full bg-gray-100 duration-300 ease-in-out dark:bg-gray-900 ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="fixed mt-6 flex h-full w-full flex-col bg-gray-100 px-2 dark:bg-gray-900">
          <Link href="/">
            <a
              className="mb-2 rounded-lg px-3 py-2 text-center text-base font-bold"
              onClick={handleToggleNav}
            >
              Home
            </a>
          </Link>

          <Link href="/blog">
            <a
              className="mb-2 rounded-lg px-3 py-2 text-center text-base font-bold"
              onClick={handleToggleNav}
            >
              Blog
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
}
