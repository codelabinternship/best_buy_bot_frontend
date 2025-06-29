import { House, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

function Tabs() {
  const tabs = [
    {
      id: 1,
      icon: House,
      navigation: "/",
    },
    {
      id: 2,
      icon: Search,
      navigation: "/search",
    },
    {
      id: 3,
      icon: ShoppingCart,

      navigation: "/cart",
    },
    {
      id: 4,
      icon: User,
      navigation: "/profile",
    },
  ];
  const isIOS = window.navigator.platform === "iPhone";
  return (
    <>
      <div
        className={`flex justify-between px-10 border bg-[#4FC9AF] py-[10px]   ${
          isIOS ? "bottom-2" : "bottom-0"
        }  fixed max-w-[422px] w-full`}
      >
        {tabs.map((item) => {
          return (
            <div className="">
              <Link to={item.navigation}>
                <item.icon className="text-white" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Tabs;
