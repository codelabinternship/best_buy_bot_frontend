import ProductCard from "@/components/shared/Cards/ProductsCard";
import { Link, useLocation } from "react-router-dom";

function SearchCategory() {
  const productData = [
    {
      id: 1,
      title: "Женский пиджак",
      category: "JenskiyOdejda",

      image:
        "https://avatars.mds.yandex.net/i?id=3db7320caae64c08ee5cf75d1c356d4ca788b621-5452895-images-thumbs&n=13",
      price: 1200000,
      stars: 5.0,
      otziv: 180,
    },
    {
      id: 2,
      title: "Женский пиджак",
      category: "JenskiyOdejda",
      image:
        "https://avatars.mds.yandex.net/i?id=3db7320caae64c08ee5cf75d1c356d4ca788b621-5452895-images-thumbs&n=13",
      price: 1200000,
      stars: 5.0,
      otziv: 180,
    },
    {
      id: 3,
      title: "Женский пиджак",
      category: "JenskiyOdejda",
      image:
        "https://avatars.mds.yandex.net/i?id=3db7320caae64c08ee5cf75d1c356d4ca788b621-5452895-images-thumbs&n=13",
      price: 1200000,
      stars: 5.0,
      otziv: 180,
    },
    {
      id: 4,
      title: "Мужской пиджак",
      category: "MujskoyOdejda",
      image:
        "https://avatars.mds.yandex.net/i?id=fab850e9e7868d1ffc26f0b5662fc9b34ed7e28b-4568174-images-thumbs&n=13",
      price: 1200000,
      stars: 5.0,
      otziv: 180,
    },
  ];
  const location = useLocation();

  // let id = location.pathname.split("/")[2].replace("%20", " ");
  let id = location.pathname.split("/")[2];
  const searchedProducts = productData.filter((i) => i.category == id);
  console.log(id);

  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        {searchedProducts.map((item) => {
          return (
            <Link to={`/products/${item.id}`}>
              <ProductCard
                key={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                stars={item.stars}
                otziv={item.otziv}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default SearchCategory;
