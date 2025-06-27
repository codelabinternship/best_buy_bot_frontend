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
import { useProducts } from "@/hooks/useProducts";

function Home() {
  const images = [Img1, Img2, Img3];
  const { data: productData, isLoading, isError } = useProducts();

  return (
    <>
      <p className="text-[#4FC9AF] mt-7 font-extrabold text-3xl text-center">
        Best Buy
      </p>

      <div className="mb-5 flex">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white w-5 h-5 cursor-pointer transition-colors duration-200 hover:text-gray-200" />
          <input
            type="text"
            placeholder="Поиск..."
            className="w-full h-12 pl-10 pr-4 rounded-full bg-[#B4DAD2] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/70 transition-all duration-300 hover:bg-[#a6cdc5]"
          />
        </div>
      </div>

      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {images.map((i, index) => (
            <CarouselItem key={index} className="text-center">
              <img
                className="w-[350px] h-[200px] object-cover rounded-2xl"
                src={i}
                alt={`carousel-${index}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="w-[200px] absolute z-[-10] top-[-80px] h-[190px]  left-[-82px] rounded-full bg-[#DCF5F0]"></div>
      <div className="w-[200px] absolute z-[-10] bottom-[-80px] h-[190px]  left-[-82px] rounded-full bg-[#DCF5F0]"></div>
      <div className="w-[280px] absolute z-[-10] bottom-[42%] h-[260px] mt-10 right-[-180px] rounded-full bg-[#DCF5F0]"></div>
      <div className="grid grid-cols-2 gap-10 mt-6 ">
        {isLoading && (
          <div className="flex items-baseline justify-center gap-5">
            <div className="loader">
              <div className="loader__bar"></div>
              <div className="loader__bar"></div>
              <div className="loader__bar"></div>
              <div className="loader__bar"></div>
              <div className="loader__bar"></div>
              <div className="loader__ball"></div>
            </div>
            <p className="text-2xl">Loading products...</p>
          </div>
        )}
        {isError && <p>Произошла ошибка при загрузке товаров.</p>}
        {productData &&
          productData.map((item) => (
            <Link key={item.id} to={`/products/${item.id}`}>
              <ProductCard
                title={item.name}
                image={item.image}
                price={item.price}
                stars={item.stars}
                otziv={item.otziv}
              />
            </Link>
          ))}
      </div>
    </>
  );
}

export default Home;
