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
const SheetHeaderComponent = () => {
  return (
    <>
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger className="border p-2  rounded-lg border-primary hover:bg-primary text-primary hover:text-zinc-50"><MenuIcon className="size-6" /></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div className="flex flex-col" >

                <SheetDescription className="hidden" />
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


              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export default SheetHeaderComponent;