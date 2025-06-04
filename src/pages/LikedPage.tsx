import { useLiked } from "@/context/LikedContext";
import { Heart } from "lucide-react";

export default function LikedPage() {
  const { likedProducts } = useLiked();

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Избранные</h1>
      {likedProducts.map((product) => (
        <div key={product.id} className="flex items-start gap-4 mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-20 h-20 rounded-md object-cover"
          />
          <div className="flex-1">
            <div className="font-semibold">{product.title}</div>
            <div className="text-sm text-gray-500">Цвет: черный</div>
            <div className="text-sm text-gray-500">Размер обуви: 38</div>
            <div className="text-lg font-bold mt-1">{product.price} сум</div>
          </div>
          <Heart className="text-red-500 mt-2" />
        </div>
      ))}
    </div>
  );
}
