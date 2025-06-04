import { Search } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Img1 from "../assets/caruselimages/carousel1.png";
import Img2 from "../assets/caruselimages/carousel2.png";
import Img3 from "../assets/caruselimages/carousel3.png";
import ProductCard from "@/components/shared/Cards/ProductsCard";
import { Link } from "react-router-dom";

function Home() {
  const images = [Img1, Img2, Img3];
  const productData = [
    {
      id: 1,
      title: "Женский пиджак",
      category: "JenskiyOdejda",
      image: "/JenskiyFinka.png",
      price: 1200000,
      stars: 5.0,
      otziv: 180,
    },
    {
      id: 2,
      title: "Женский пиджак",
      category: "JenskiyOdejda",
      image: "/kofta.png",
      price: 1200000,
      stars: 5.0,
      otziv: 180,
    },
    {
      id: 3,
      title: "Женский пиджак",
      category: "JenskiyOdejda",
      image: "QoraKiyim.png",
      price: 1200000,
      stars: 5.0,
      otziv: 180,
    },
    {
      id: 4,
      title: "Женский пиджак",
      category: "JenskiyOdejda",
      image: "/jenskiy.webp",
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
      <div className="mb-5 flex">
        <div className="relative w-full">
          {/* Search Icon */}
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white w-5 h-5 cursor-pointer transition-colors duration-200 hover:text-gray-200" />

          {/* Input Field */}
          <input
            type="text"
            placeholder="Поиск..."
            className="w-full h-12 pl-10 pr-4 rounded-full bg-[#B4DAD2] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/70 transition-all duration-300 hover:bg-[#a6cdc5]"
          />
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
            <Link to={`/products/${item.id}`}>
              <ProductCard
                key={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                stars={item.stars}
                otziv={item.otziv}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Home;
