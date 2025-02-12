import type { Route } from "./+types/home";
import Button from "../assets/components/buttonComponent";
import Input from "../assets/components/inputComponent";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="">Nova Branding Components</h1>
    <div className="">
      <Button text="Primary" />
      <Input placeholder="Escribe aquí..." />
      </div>
  </div>
  
  )
 
}
