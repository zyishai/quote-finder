import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-2">
            <img className="h-7" src="/logo-white.png" alt="Quote Finder" />
            {/* <p className="text-sm leading-6 text-gray-300">
              Making the world a better place through constructing elegant
              hierarchies.
            </p> */}
            {/* <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div> */}
          </div>
          <div className="mt-16 grid grid-cols-2 gap-6 xl:col-span-1 xl:mt-0">
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      to="/terms"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/attribution"
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Attribution
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">
                Want to support my work?
              </h3>
              <div className="mt-6">
                <a href="https://ko-fi.com/C0C2NQNUX" target="_blank">
                  <img
                    height="36"
                    className="border-none h-9"
                    src="https://storage.ko-fi.com/cdn/kofi1.png?v=3"
                    border="0"
                    alt="Buy Me a Coffee at ko-fi.com"
                  />
                </a>
              </div>
            </div>
            {/* <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} QuoteFinder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    // <footer className="mt-6 bg-indigo-950 py-4 px-10">
    //   <div className="text-white flex justify-between">
    //     <span className="text-sm font-light">
    //       &copy; All Rights Reserved {new Date().getFullYear()}
    //     </span>

    //     <div className="flex gap-x-10">
    //       <ul className="flex flex-col gap-y-2">
    //         <li className="text-sm text-gray-300 hover:text-gray-200">
    //           <Link to="/terms">Terms of Service</Link>
    //         </li>
    //         <li className="text-sm text-gray-300 hover:text-gray-200">
    //           <Link to="/privacy">Privacy Policy</Link>
    //         </li>
    //       </ul>
    //       <ul className="flex flex-col gap-y-2">
    //         <li className="text-sm text-gray-300 hover:text-gray-200">
    //           <Link to="/attribution">Images Attribution</Link>
    //         </li>
    //         <li className="text-sm text-gray-300 hover:text-gray-200">
    //           <Link to="/">By me a ☕️</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </footer>
  );
}
