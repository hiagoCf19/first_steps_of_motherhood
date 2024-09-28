import { Button } from "@/components/ui/button";

const Preview = () => {
  return (
    <section className="flex flex-col md:px-[10%] space-y-6 ">
      <h2 className="text-4xl text-primary font-semibold px-4 sm:px-0">Lorem ipsum</h2>

      <div className="flex gap-4 sm:flex-row flex-col">
        <div className=" sm:w-2/4 flex flex-col space-y-4 items-center sm:items-start px-4 sm:px-0">

          <div className="w-full bg-backgroundSecondary/50 rounded-2xl sm:h-[50vh] h-[30vh] p-4 ">image</div>
          <div className="space-y-2">
            <h4 className="font-medium text-xl">Lorem Ipsum title Lorem ipsum dolor sit amet.</h4>
            <p className=" text-sm">P-Lorem ipsum dolor sit amet. Ut eius vitae et dolorum ratione ea aperiam optioLorem ipsum dolor sit amet. Ut eius vitae et dolorum ratione ...</p>
            <Button size={"lg"} className="w-min">Ler mais</Button>
          </div>
        </div>
        <div className="sm:w-2/4 flex-col space-y-4 px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="w-full h-[30vh] sm:h-[24vh] bg-backgroundSecondary/50  rounded-xl " />
            <div className="flex flex-col sm:justify-center space-y-2">
              <h4 className="font-medium text-lg">Lorem Ipsum title.</h4>
              <p className=" text-sm ">P-Lorem ipsum dolor sit amet. Ut eius vitae et dolorum ratione ea aperiam optioLorem ipsum dolor sit amet. Ut eius vitae et dolorum ratione ea aperiam optioLorem ipsum dolor sit amet. Ut eius vitae et dolorum ratione ...</p>
              <Button size={"lg"} className="w-min">Ler mais</Button>
            </div>
          </div>


          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="w-full h-[30vh] sm:h-[24vh] bg-backgroundSecondary/50  rounded-xl " />
            <div className="flex flex-col sm:justify-center space-y-2">
              <h4 className="font-medium text-lg">Lorem Ipsum title.</h4>
              <p className=" text-sm">P-Lorem ipsum dolor sit amet. Ut eius vitae et dolorum ratione ea aperiam optioLorem ipsum dolor sit amet. Ut eius vitae et dolorum ratione ea aperiam optioLorem ipsum dolor sit amet. Ut eius vitae et dolorum ratione ...</p>
              <Button size={"lg"} className="w-min">Ler mais</Button>
            </div>
          </div>
        </div>
      </div>

    </section>);
}

export default Preview;