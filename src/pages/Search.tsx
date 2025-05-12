import { useState } from "react";
import { cn } from "@/lib/utils"; // Shadcn utility function
import { Search } from "lucide-react";

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
    title: "Женские кроссовки",
    img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    category: "Женская одежда",
  },
  {
    title: "Мужской пиджак",
    img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
    category: "Мужская одежда",
  },
  {
    title: "Женские шорты",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    category: "Женская одежда",
  },
  {
    title: "Женская сумка",
    img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
    category: "Аксессуары",
  },
  {
    title: "Женская блузка",
    img: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
    category: "Женская одежда",
  },
  {
    title: "Туфли на шпильках",
    img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
    category: "Аксессуары",
  },
  {
    title: "Женский пиджак",
    img: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
    category: "Женская одежда",
  },
  {
    title: "Женская юбка",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    category: "Женская одежда",
  },
  {
    title: "Наушники AirPods",
    img: "https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg",
    category: "Аксессуары",
  },
  {
    title: "Мужская кепка",
    img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
    category: "Мужская одежда",
  },
];

export default function SearchPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Все");

  const filteredProducts =
    activeCategory === "Все"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <>
      <div className="mb-5">
        <div className="flex px-">
          <div className="relative w-full">
            <Search className="absolute w-8 h-8 left-2 top-[4px] text-white" />
            <input
              type="text"
              className="bg-[#B4DAD2] rounded-full h-10 w-full"
            />
          </div>
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
                className="flex h-[180px] flex-col items-center p-2 bg-white rounded-lg shadow hover:shadow-md transition"
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
