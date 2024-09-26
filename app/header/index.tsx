import { Button } from "@/components/ui/button";
import SheetHeaderComponent from "./sheet-header";


const Header = () => {
  const menu = [
    {
      id: 1,
      label: "Amamentação"
    },
    {
      id: 2,
      label: "Primeiros socorros"
    },
    {
      id: 3,
      label: "Higiene do bebê"
    },
    {
      id: 4,
      label: "Sobre o projeto"
    }
  ]
  return (
    <header className="flex justify-between items-center  border-primary p-2  md:p-4 md:px-[10%] bg-backgroundSecondary">
      <h1 className="text-xl font-bold">PROJECT NAME</h1>
      <nav className="hidden sm:block " >
        <div className="flex space-x-4 ">
          {menu.map((item) => (
            <Button key={item.id} variant={"link"} className="text-lg p-0 text-[#FFEFEF] " >
              {item.label}
            </Button>
          ))}
        </div>




      </nav>
      <SheetHeaderComponent />
    </header>
  );
}

export default Header;