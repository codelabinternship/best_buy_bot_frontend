import { cn } from "@/lib/utils"; // Shadcn utility function
import { Search } from "lucide-react";

const categories = [
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
  },
  {
    title: "Мужской пиджак",
    img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
  },
  {
    title: "Женские шорты",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
  },
  {
    title: "Женская сумка",
    img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
  },
  {
    title: "Женская блузка",
    img: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
  },
  {
    title: "Туфли на шпильках",
    img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
  },
  {
    title: "Женский пиджак",
    img: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
  },
  {
    title: "Женская юбка",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
  },
  {
    title: "Наушники AirPods",
    img: "https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg",
  },
  {
    title: "Мужская кепка",
    img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
  },
];

export default function SearchPage() {
  return (
    <>
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
      <div className="flex p-4 gap-4">
        <div className="w-60 bg-teal-300 rounded-lg p-4">
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li
                key={index}
                className={cn(
                  "p-2 rounded-md cursor-pointer hover:bg-teal-400 text-white",
                  index === 0 && "bg-white text-teal-500 font-bold" // active category
                )}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-2 bg-white rounded-lg shadow hover:shadow-md transition"
            >
              <div className="border-2 border-blue-400 rounded-lg p-1">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-[185px] h-[169px] object-cover"
                />
              </div>
              <div className="mt-2 text-sm font-medium text-center">
                {product.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
