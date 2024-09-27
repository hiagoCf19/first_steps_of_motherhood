import { Button } from "@/components/ui/button";
import CardImage from "./card-image";

const Welcome = () => {
  return (
    <section className="bg-backgroundSecondary  flex sm:h-[70vh] flex-col sm:flex-row ">
      <div className="sm:w-2/5 sm:max-h-[50vh] flex  justify-center my-[3%] items-center ">
        <div className=" sm:w-2/4 sm:mx-6 mx-4 sm:space-y-10 space-y-4">
          <span className="sm:text-base text-sm font-medium">Lorem ipsum dolor sit amet. Ut eius vitae et dolorum ratione ea aperiam optio.</span>
          <h3 className="sm:text-5xl text-3xl font-medium">Lorem ipsum dolor sit amet. Ut eius vitae et dolorum ratione.</h3>
          <Button size={"lg"} className="px-12 py-6">Button</Button>
        </div>
      </div>
      <div className="sm:w-3/5 flex  my-[3%]">
        <CardImage />
      </div>
    </section>
  );
}

export default Welcome;