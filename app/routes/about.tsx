import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function About() {
  return (
    <div className="flex items-center justify-center text-[100px] mt-20 text-black">
      This is About!
    </div>
  )
}
