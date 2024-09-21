import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="p-4">
      <header className="flex justify-between items-center">
        <p>Project name</p>
        <Sheet>
          <SheetTrigger className="border p-2 rounded-lg border-primary hover:bg-primary"><MenuIcon /></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                <Button variant={"link"} >
                  Amamentação
                </Button>
                <Button variant={"link"} >
                  Primeiros socorros

                </Button>
                <Button variant={"link"} >
                  Higiene do bebê

                </Button>
                <Button variant={"link"}>Sobre o projeto</Button>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex">
        main
      </main>
      <footer className=" absolute bottom-0 border-primary  border-t -mx-4 w-full p-4">
        footer
      </footer>

    </div>
  );
}
