import { Button } from "@/components/ui/button";
import SheetHeaderComponent from "./header/sheet-header";


export default function Home() {
  return (
    <div className="">
      <header className="flex justify-between items-center border-b border-primary p-2 md:p-4">
        <p>Project name</p>
        <nav className="flex space-x-4 hidden sm:block" >

          <Button variant={"link"} className="text-lg p-0 " >
            Amamentação
          </Button>
          <Button variant={"link"} className="text-lg p-0"  >
            Primeiros socorros

          </Button>
          <Button variant={"link"} className="text-lg p-0"  >
            Higiene do bebê

          </Button>
          <Button variant={"link"} className="text-lg p-0" >Sobre o projeto</Button>


        </nav>
        <SheetHeaderComponent />
      </header>
      <main className="flex p-4">
        main
      </main>
      <footer className=" fixed bottom-0 border-primary  border-t  w-full p-4">
        footer
      </footer>

    </div>
  );
}
