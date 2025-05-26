import { useState } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import path from "path";

const categories = [
  "Все",
  "Женская одежда",
  "Аксессуары",
  "Красота и уход",
  "Товары для дома",
  "Детские товары",
  "Мужская одежда",
  "Здоровье",
  "Хобби и творчество",
  "Спорт и отдых",
  "Продукты питания",
  "Канцтовары",
  "Зоотовары",
];

const products = [
  {
    title: "Женская одежда",
    img: "/JenskiyFinka.png",
    path: "JenskiyOdejda",
  },
  {
    title: "Мужская одежда",
    img: "/i.webp",
    path: "MujskoyOdejda",
  },
];

export default function SearchPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Все");
  const navigate = useNavigate();

  const filteredProducts =
    activeCategory === "Все"
      ? products
      : products.filter((product) => product.path === activeCategory);

  return (
    <>
      <div className="mb-5 mt-2">
        <div className="relative w-full mt-4">
          <Search
            // onClick={() => navigate("/")}
            className="absolute w-8 cursor-pointer hover:text-[#eae8e8] transition-all h-8 left-2 top-[4px] text-white "
          />
          <input
            // onChange={(e) => setInput(e.target.value)}
            type="text"
            className="bg-[#B4DAD2] transition-all hover:bg-[#a6cdc5] pl-11 text-white rounded-full h-10 w-full"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-[150px] bg-[#4FC9AF] rounded-r-lg p-4">
          <ul className="flex flex-col gap-2">
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "p-2 rounded-md cursor-pointer text-[12px] hover:bg-teal-400 text-white",
                  activeCategory === category &&
                    "bg-white text-teal-500 font-bold"
                )}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={index}
                onClick={() => navigate(`/category/${product.path}`)}
                className="flex h-[180px] flex-col items-center p-2 bg-white rounded-lg shadow hover:shadow-md transition cursor-pointer"
              >
                <div className="border-2 border-blue-400 rounded-lg p-1">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-[195px] h-[100px] object-cover"
                  />
                </div>
                <div className="mt-2 text-sm font-medium text-center">
                  {product.title}
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-500">Нет товаров в этой категории</div>
          )}
        </div>
      </div>
    </>
  );
}
