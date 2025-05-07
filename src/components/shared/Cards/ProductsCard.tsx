import { Star } from "lucide-react";

type ProductCardd = {
  title: string;
  image: string;
  price: number;
  stars: number;
  otziv: number;
};

export default function ProductCard({
  title,
  image,
  price,
  stars,
  otziv,
}: ProductCardd) {
  return (
    <div className="w-30 p-4 rounded-lg bg-white shadow-md flex flex-col items-center">
      <div className="border-2 border-blue-400 rounded-lg p-2">
        <img src={image} alt={title} className="w-40 h-40 object-cover" />
      </div>

      <div className="mt-4 text-center">
        <div className="text-xl font-semibold text-gray-800">{price} сум</div>
        <div className="text-sm text-gray-600 mt-1">Женский пиджак</div>

        <div className="flex items-center justify-center text-yellow-500 mt-2 text-sm">
          <Star className="w-4 h-4 fill-yellow-500 stroke-yellow-500 mr-1" />
          <span>
            {stars} ({otziv} отзывов)
          </span>
        </div>
      </div>
    </div>
  );
}
