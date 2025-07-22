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
import { useNavigate } from "react-router";



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

  const [launchModal, setLaunchModal] = useState(false); // StartUpLogo
  const navigate = useNavigate()

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
              <div className="animate-shrink-grow w-104 h-104 relative bg-white rounded-full">
                <img className="animate-shrink-grow absolute w-[86px] top-18 left-17" src="/miranda-mussas/SplitLogo/FlowerLogo.png" alt="Miranda Mussa Logo" />
                <img className="animate-shrink-grow absolute w-[192px] left-38 top-17" src="/miranda-mussas/SplitLogo/TopRightLogo.png" alt="Miranda Mussa Logo" />
                <img className="animate-shrink-grow absolute w-[270px] left-18 top-22" src="/miranda-mussas/SplitLogo/CenterLogo.png" alt="Miranda Mussa Logo" />
                <img className="animate-shrink-grow absolute w-[183px] top-[152px] left-[70px]" src="/miranda-mussas/SplitLogo/BottomLeftLogo.png" alt="Miranda Mussa Logo" />
                <img className="animate-shrink-grow absolute w-[129px] top-52.5 left-55" src="/miranda-mussas/SplitLogo/BottomRightLogo.png" alt="Miranda Mussa Logo" />
              </div>
            </div>)}


    <header className="w-full flex flex-col justify-between items-center bg-linear-75 from-rose-300 from-40% via-pink-200 via-60% to-rose-300 to-80% text-black">
      <div className="w-full flex justify-center">
        <img className="animate-wiggle h-30 my-3" onClick={() => {navigate("/")}} src="/miranda-mussas/mirandaMussaLogo.png" alt="Miranda Mussa Logo" />
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
