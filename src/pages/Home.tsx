import { Camera, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Img1 from "../assets/caruselimages/carousel1.png";
import Img2 from "../assets/caruselimages/carousel2.png";
import Img3 from "../assets/caruselimages/carousel3.png";
import ProductCard from "@/components/shared/Cards/ProductsCard";


function Home() {
  const images = [Img1, Img2, Img3];
  const productData = [
    {
      id: 1,
      title: "Женский пиджак",
      image: "../../../assets/CardImages/JenskiyFinka.png",
      price: 1200000,
      stars: 5.0,
      otziv: 180,
    },
    {
      id: 2,
      title: "Женский пиджак",
      image: "../../../assets/CardImages/JenskiyFinka.png",
      price: 1200000,
      stars: 5.0,
      otziv: 180,
    },
    {
      id: 3,
      title: "Женский пиджак",
      image: "../../../assets/CardImages/JenskiyFinka.png",
      price: 1200000,
      stars: 5.0,
      otziv: 180,
    },
    {
      id: 4,
      title: "Женский пиджак",
      image: "../../../assets/CardImages/JenskiyFinka.png",
      price: 1200000,
      stars: 5.0,
      otziv: 180,
    },
  ];
  return (
    <>
      <p className="text-[#4FC9AF] mt-7 font-extrabold text-3xl text-center ">
        Best Buy
      </p>
      <div className="mb-5">
        <div className="flex px-">
          <div className="relative w-full ">
            <Search className="absolute w-8 h-8 left-2 top-[4px] text-white " />
            <input
              type="text"
              className="bg-[#B4DAD2] rounded-full h-10 w-full"
            />
          </div>
        </div>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent>
          {images.map((i, index) => (
            <CarouselItem key={index} className="text-center">
              <img
                className="w-[350px] h-[200px] object-cover rounded-2xl"
                src={i}
                alt=""
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="grid grid-cols-2 gap-10">
        {productData.map((item) => {
          return (
            <ProductCard
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              stars={item.stars}
              otziv={item.otziv}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
