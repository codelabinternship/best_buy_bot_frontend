import { Button } from "@/components/ui/button";
import { useLiked } from "@/context/LikedContext";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useProduct } from "@/hooks/useProduct";

function ProductsSlug() {
  const location = useLocation();
  const id = Number(location.pathname.split("/")[2]);
  const { data: products, isLoading, isError } = useProduct(id);

  const product = products;
  const { toggleLike, likedProducts } = useLiked();
  const isLiked = product
    ? likedProducts.some((p) => p.id === product.id)
    : false;

  if (isLoading) return <p className="text-center">Загрузка...</p>;
  if (isError)
    return <p className="text-center text-red-500">Ошибка загрузки товара</p>;
  if (!product)
    return <p className="text-center text-gray-600">Товар не найден</p>;

  return (
    <div className="max-w-md mx-auto p-4">
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[300px] object-contain mb-4"
          />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="mt-2 font-medium">Цвет:</p>
          <div className="flex gap-2 my-2">
            <Button variant="secondary" className="rounded-full">
              Чёрный
            </Button>
            <Button variant="secondary" className="rounded-full">
              Белый
            </Button>
            <Button variant="secondary" className="rounded-full">
              Серый
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-700 font-semibold">
              {product.stars}
            </span>
            <span className="text-yellow-500">★★★★★</span>
            <a href="#" className="text-green-700 underline">
              {product.otziv} отзывов
            </a>
          </div>
          <div className="text-sm text-gray-600 mt-2">
            ✔ В наличии {product.stock_quantity} шт
          </div>
        </CardContent>
      </Card>

      <div className="mt-4 bg-white p-4 rounded-2xl shadow-md flex items-center justify-between">
        <div className="text-xl font-bold">{product.price} сум</div>
        <div className="flex gap-2">
          <Button className="rounded-xl flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" /> В корзину
          </Button>
          <Button
            variant="ghost"
            className="rounded-full p-2"
            onClick={() =>
              toggleLike({
                ...product,
                title: product.name // Map 'name' to 'title' for compatibility
              })
            }
          >
            <Heart
              className={`w-5 h-5 ${
                isLiked ? "text-red-500" : "text-teal-500"
              }`}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductsSlug;
