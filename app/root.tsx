import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link
} from "react-router";
import { useState, useEffect } from "react";

import type { Route } from "./+types/root";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar"
import Navbar2 from "./Components/Navbar/Navbar2";;

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {

  const [launchModal, setLaunchModal] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLaunchModal(false);
    }, 2800);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
    {launchModal && (
            <div
                className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50"
            > 
              <div className="animate-shrink-grow w-80 h-80 relative bg-white rounded-full">
                <img className="animate-shrink-grow absolute w-[66px] top-13 left-14" src="/miranda-mussas/SplitLogo/FlowerLogo.png" alt="Miranda Mussa Logo" />
                <img className="animate-shrink-grow absolute w-[148px] right-13 top-13" src="/miranda-mussas/SplitLogo/TopRightLogo.png" alt="Miranda Mussa Logo" />
                <img className="animate-shrink-grow absolute w-[208px] left-14 top-17" src="/miranda-mussas/SplitLogo/CenterLogo.png" alt="Miranda Mussa Logo" />
                <img className="animate-shrink-grow absolute w-[141px] top-[116px] left-[54px]" src="/miranda-mussas/SplitLogo/BottomLeftLogo.png" alt="Miranda Mussa Logo" />
                <img className="animate-shrink-grow absolute w-[99px] top-40 left-43" src="/miranda-mussas/SplitLogo/BottomRightLogo.png" alt="Miranda Mussa Logo" />
              </div>
            </div>)}

            {/* absolute w-20
            absolute w-50 top-5 right-6
            absolute w-60 left-14 top-15
            */}


    <header className="flex flex-col justify-between items-center bg-linear-75 from-rose-300 from-40% via-pink-200 via-60% to-rose-300 to-80% text-black">
      <div className="w-full flex justify-center">
        <img className="h-30 my-3" src="/miranda-mussas/mirandaMussaLogo.png" alt="Miranda Mussa Logo" />
      </div>
        <Navbar2></Navbar2>
    </header>
    <Outlet />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
