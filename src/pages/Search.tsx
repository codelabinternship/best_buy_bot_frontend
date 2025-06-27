import { useState } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCategories } from "@/hooks/useCategories";

export default function SearchPage() {
  const navigate = useNavigate();
  const {
    data: categories = [],
    isLoading: loadingCategories,
    isError: errorCategories,
  } = useCategories();

  const [activeCategory, setActiveCategory] = useState<string>("Все");

  return (
    <>
      <div className="mb-5 flex mt-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white w-5 h-5 cursor-pointer" />
          <input
            type="text"
            placeholder="Поиск..."
            className="w-full h-12 pl-10 pr-4 rounded-full bg-[#B4DAD2] text-white placeholder-white focus:outline-none"
          />
        </div>
      </div>
      <div className="w-[200px] absolute z-[-10] top-[-80px] h-[190px]  right-[-82px] rounded-full bg-[#DCF5F0]"></div>
      <div className="w-[200px] absolute z-[-10] bottom-[-80px] h-[190px]  left-[-82px] rounded-full bg-[#DCF5F0]"></div>
      <div className="w-[300px] absolute z-[-10] bottom-[-50px] h-[280px] mt-10 right-[-137px] rounded-full bg-[#DCF5F0]"></div>
      <div className="flex gap-4">
        <div className="w-[150px] bg-[#549F8E] rounded-r-lg p-4">
          {loadingCategories ? (
            <div className="text-white">Загрузка категорий...</div>
          ) : errorCategories ? (
            <div className="text-red-200">Ошибка загрузки категорий</div>
          ) : (
            <ul className="flex flex-col gap-2">
              <li
                onClick={() => setActiveCategory("Все")}
                className={cn(
                  "p-2 rounded-md cursor-pointer text-[12px] hover:bg-teal-400 text-white",
                  activeCategory === "Все" && "bg-white text-teal-500 font-bold"
                )}
              >
                Все
              </li>
              {categories.map((category: any, index: number) => (
                <li
                  key={index}
                  onClick={() => setActiveCategory(category.name)}
                  className={cn(
                    "p-2 rounded-md cursor-pointer text-[12px] hover:bg-teal-400 text-white",
                    activeCategory === category.name &&
                      "bg-white text-teal-500 font-bold"
                  )}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {loadingCategories ? (
            <div className="text-gray-500">Загрузка товаров...</div>
          ) : errorCategories ? (
            <div className="text-red-500">Ошибка загрузки товаров</div>
          ) : categories.length > 0 ? (
            categories.map((category: any, index: number) => (
              <div
                key={index}
                onClick={() => navigate(`/category/${category.id}`)}
                className="flex h-[180px] flex-col items-center p-2 bg-white rounded-lg shadow hover:shadow-md transition cursor-pointer"
              >
                <div className="border-2 border-blue-400 rounded-lg p-1">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-[100px] h-[100px] object-cover"
                  />
                </div>
                <div className="mt-2 text-sm font-medium text-center">
                  {category.name}
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
