import SimpleSlider from "~/Components/Slider/SimpleSlider";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Disfraces() {
  return (
    <div className="flex flex-col items-center justify-center text-[100px] mt-20 text-black">
      This is Overview for Galeria!
      <div className="w-100 h-50"><SimpleSlider></SimpleSlider></div>
    </div>
  )
}
