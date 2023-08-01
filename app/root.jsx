// import { cssBundleHref } from "@remix-run/css-bundle";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Navbar from "./components/navbar";
import { ToastContainer } from "react-toastify";

import stylesheet from "~/tailwind.css";
import toastifyStyles from "react-toastify/dist/ReactToastify.min.css";
import carouselStyles from "react-multi-carousel/lib/styles.css";
import Footer from "./components/footer";

export const links = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: toastifyStyles },
  { rel: "stylesheet", href: carouselStyles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen flex flex-col">
        <ToastContainer />
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
