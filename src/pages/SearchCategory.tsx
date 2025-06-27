import { useLocation } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/shared/Cards/ProductsCard";

export default function SearchCategory() {
  const { data: products = [], isLoading, isError } = useProducts();
  const location = useLocation();
  const categoryPath = location.pathname.split("/")[2];

  const filteredProducts = products.filter(
    (p: any) => p.category === categoryPath
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">
        Товары категории: {categoryPath}
      </h2>

      {isLoading ? (
        <div>Загрузка товаров...</div>
      ) : isError ? (
        <div className="text-red-500">Ошибка загрузки товаров</div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-10">
          {filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              title={item.name}
              image={item.image}
              price={item.price}
              stars={item.stars}
              otziv={item.otziv}
            />
          ))}
        </div>
      ) : (
        <div className="text-gray-500">Нет товаров в этой категории</div>
      )}
    </div>
  );
}
