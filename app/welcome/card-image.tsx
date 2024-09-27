import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const CardImage = () => {
  const items = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    }
  ]
  return (

    <Carousel className=" sm:max-h-[55vh] w-full  ">
      <CarouselContent className="flex  w-full p-4 mb-4 ">
        {items.map((item) => (
          <CarouselItem key={item.id} className="max-w-[70%] sm:h-[54vh] h-[30vh] rounded-2xl bg-background/30 shadow-lg shadow-black/20 ml-4">{item.id}</CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>


  );
}

export default CardImage;