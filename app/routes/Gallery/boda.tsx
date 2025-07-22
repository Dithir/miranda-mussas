import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Boda() {
  return (
    <div className="flex items-center justify-center text-20 md:text-[100px] mt-20 text-black">
      This is Boda!
    </div>
  )
}
