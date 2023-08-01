import { Link, useNavigate } from "@remix-run/react";
import { Popover } from "@headlessui/react";
import HamburgerGraphic from "./hamburger-graphic";
import XGraphic from "./x-graphic";

const navigation = [
  { name: "Categories", href: "/category" },
  { name: "Authors", href: "/author" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 py-4 px-8 grid grid-flow-col bg-white shadow-sm z-[1000]">
      <Link
        to="/"
        className="relative h-8 sm:h-10 col-start-1 row-start-1 justify-self-center sm:justify-self-start"
      >
        <img src="/logo.png" alt="logo" className="h-full object-contain" />
      </Link>

      <form
        className="hidden sm:block relative col-start-1 row-start-1 justify-self-center"
        onSubmit={(e) => {
          const searchTerm = e.target.searchTerm.value;

          if (!!searchTerm.trim()) {
            e.preventDefault();
            e.target.reset();
            navigate(`/quotes?q=${encodeURIComponent(searchTerm)}`);
            return false;
          }
        }}
      >
        <div className="relative text-gray-400 focus-within:text-indigo-500 min-w-[300px] pl-8 border border-gray-400 rounded-md overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-2 left-2 h-5 z-10"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>

          <input
            type="text"
            placeholder="Search a quote"
            name="searchTerm"
            className="w-full p-1.5 placeholder-gray-400 text-gray-800 outline-none"
          />
        </div>
      </form>

      <nav className="col-start-1 row-start-1 justify-self-end hidden sm:flex items-center">
        <ul className="flex items-center gap-x-5">
          {navigation.map(({ name, href }) => (
            <li key={name}>
              <Link to={href} className="text-gray-400 hover:text-indigo-500">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <MobileMenu />
    </header>
  );
}

function MobileMenu() {
  const navigate = useNavigate();

  return (
    <Popover className="sm:hidden relative col-start-1 row-start-1 justify-self-end">
      <Popover.Button className="h-8 overflow-hidden">
        <HamburgerGraphic className="h-full w-full object-contain" />
      </Popover.Button>
      <Popover.Panel className="fixed inset-0 bg-white z-[9999]">
        {({ close }) => (
          <>
            <Popover.Button className="absolute top-4 right-8 h-8 overflow-hidden z-10">
              <XGraphic className="h-full w-full object-contain" />
            </Popover.Button>
            <div className="absolute inset-0 bg-white py-24 flex flex-col">
              <ul className="flex flex-col items-center gap-y-12">
                <li>
                  <Popover.Button
                    as={Link}
                    to="/"
                    className="text-xl font-medium"
                  >
                    Home
                  </Popover.Button>
                </li>
                {navigation.map(({ name, href }) => (
                  <li key={name}>
                    <Popover.Button
                      as={Link}
                      to={href}
                      className="text-xl font-medium"
                    >
                      {name}
                    </Popover.Button>
                  </li>
                ))}
                {/* <li>
              <Link to="/" className="text-xl font-medium">
                Advanced Search
              </Link>
            </li> */}
                <li>
                  <form
                    className="relative col-start-1 row-start-1 justify-self-center"
                    onSubmit={(e) => {
                      const searchTerm = e.target.searchTerm.value;

                      if (!!searchTerm.trim()) {
                        e.preventDefault();
                        e.target.reset();
                        navigate(`/quotes?q=${encodeURIComponent(searchTerm)}`);
                        close();
                        return false;
                      }
                    }}
                  >
                    <div className="relative text-gray-400 focus-within:text-indigo-500 min-w-[300px] pl-8 border border-gray-400 rounded-md overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-2 left-2 h-5 z-10"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                        <path d="M21 21l-6 -6"></path>
                      </svg>

                      <input
                        type="text"
                        name="searchTerm"
                        placeholder="Search a quote"
                        className="w-full p-1.5 placeholder-gray-400 text-gray-800 outline-none"
                      />
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </>
        )}
      </Popover.Panel>
    </Popover>
  );
}
