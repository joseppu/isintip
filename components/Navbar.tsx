import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const GoodbyeDynamic = dynamic(() => import("../components/TexasClock"));

  const router = useRouter();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const { value } = e.currentTarget;
      router.push(`/products?page=0&search=${value}`);
    }
  };
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-5xl px-2 mx-auto sm:px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
                <div className="flex items-center flex-shrink-0">
                  <Link href="/">
                    <a>
                      <img
                        className="block w-auto h-8 lg:hidden"
                        src="/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                      />
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <img
                        className="hidden w-auto h-8 lg:block"
                        src="/workflow-logo-indigo-600-mark-gray-800-text.svg"
                        alt="Workflow"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link href="/">
                    <a
                      className={classNames(
                        "inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ",
                        router.asPath.endsWith("/")
                          ? "border-violet-500 text-gray-900"
                          : "text-gray-500  border-transparent hover:border-gray-300 hover:text-gray-700"
                      )}
                    >
                      Home
                    </a>
                  </Link>
                  <Link href="products">
                    <a
                      className={classNames(
                        "inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ",
                        router.asPath.includes("products")
                          ? "border-violet-500 text-gray-900"
                          : "text-gray-500  border-transparent hover:border-gray-300 hover:text-gray-700"
                      )}
                    >
                      Products
                    </a>
                  </Link>
                  <Link href="contact">
                    <a
                      className={classNames(
                        "inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ",
                        router.asPath.includes("/contact")
                          ? "border-violet-500 text-gray-900"
                          : "text-gray-500  border-transparent hover:border-gray-300 hover:text-gray-700"
                      )}
                    >
                      Contact
                    </a>
                  </Link>
                  <GoodbyeDynamic />
                </div>
              </div>
              <div className="flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <SearchIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <Disclosure.Button
                as="a"
                href="/"
                className={classNames(
                  "block py-2 pl-3 pr-4 text-base font-medium border-l-4 ",
                  router.asPath.endsWith("/")
                    ? "bg-violet-50 border-violet-500 text-violet-700"
                    : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                )}
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="products"
                className={classNames(
                  "block py-2 pl-3 pr-4 text-base font-medium border-l-4 ",
                  router.asPath.includes("/products")
                    ? "bg-violet-50 border-violet-500 text-violet-700"
                    : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                )}
              >
                Products
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="contact"
                className={classNames(
                  "block py-2 pl-3 pr-4 text-base font-medium border-l-4 ",
                  router.asPath.includes("/contact")
                    ? "bg-violet-50 border-violet-500 text-violet-700"
                    : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                )}
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
