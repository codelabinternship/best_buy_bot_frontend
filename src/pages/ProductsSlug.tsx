import { Button } from "@/components/ui/button";
import { useLiked } from "@/context/LikedContext";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import { useLocation } from "react-router-dom";

function ProductsSlug() {
  const productData = [
    {
      id: 1,
      title: "Женский пиджак",
      image:
        "https://avatars.mds.yandex.net/i?id=3db7320caae64c08ee5cf75d1c356d4ca788b621-5452895-images-thumbs&n=13",
      price: 1200000,
      stars: 5.0,
      otziv: 180,
    },
    {
      id: 2,
      title: "Женский пиджак",
      image:
        "https://avatars.mds.yandex.net/i?id=3db7320caae64c08ee5cf75d1c356d4ca788b621-5452895-images-thumbs&n=13",
      price: 1200000,
      stars: 5.0,
      otziv: 180,
    },
    {
      id: 3,
      title: "Женский пиджак",
      image:
        "https://avatars.mds.yandex.net/i?id=3db7320caae64c08ee5cf75d1c356d4ca788b621-5452895-images-thumbs&n=13",
      price: 1200000,
      stars: 5.0,
      otziv: 180,
    },
    {
      id: 4,
      title: "Женский пиджак",
      image:
        "https://avatars.mds.yandex.net/i?id=3db7320caae64c08ee5cf75d1c356d4ca788b621-5452895-images-thumbs&n=13",
      price: 1200000,
      stars: 5.0,
      otziv: 180,
    },
  ];
  const location = useLocation();
  let id = location.pathname.split("/")[2];

  let data = productData.filter((i, index) => i.id == Number(id));
  console.log(data);
  const { toggleLike, likedProducts } = useLiked();
  const isLiked = likedProducts.some((p) => p.id === data[0].id); //

  <Button
    variant="ghost"
    className="rounded-full p-2"
    onClick={() => toggleLike(data[0])}
  >
    <Heart
      className={`w-5 h-5 ${isLiked ? "text-red-500" : "text-teal-500"}`}
    />
  </Button>;

  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-4">
            <img
              src={data[0].image}
              alt="Sony Headphones"
              className="w-full h-auto object-contain mb-4"
            />
            <h2 className="text-lg font-semibold">{data[0].title}</h2>
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
                {data[0].stars}
              </span>
              <span className="text-yellow-500">★★★★★</span>
              <a href="#" className="text-green-700 underline">
                {data[0].otziv} отзывов
              </a>
            </div>
            <div className="text-sm text-gray-600 mt-2">✔ В наличии 20 шт</div>
          </CardContent>
        </Card>
        <div className="mt-4 bg-white p-4 rounded-2xl shadow-md flex items-center justify-between">
          <div className="text-xl font-bold">{data[0].price} сум</div>
          <div className="flex gap-2">
            <Button className="rounded-xl flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" /> В корзину
            </Button>
            <Button
              variant="ghost"
              className="rounded-full p-2"
              onClick={() => toggleLike(data[0])}
            >
              <Heart
                className={`w-5 h-5 ${
                  isLiked ? "text-red-500" : "text-teal-500"
                }`}
              />
            </Button>
            ;
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsSlug;
