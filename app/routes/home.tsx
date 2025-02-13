import type { Route } from "./+types/home";
import Button from "../assets/components/buttonComponent";
import Input from "../assets/components/inputComponent";
import SearchBAr from "../assets/components/searchBarComponent";


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
      <Button text="Click Me" />
      <br /><br />
      <Input placeholder="Escribe aquí..." />
      <br /><br />
      <SearchBAr />
      </div>
  </div>
  
  )
 
}
