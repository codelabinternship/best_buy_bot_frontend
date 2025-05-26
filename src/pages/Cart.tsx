import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const initialProducts = [
  {
    id: 1,
    name: "Новомодные кроссовки Nike",
    price: 300000,
    originalPrice: 400000,
    size: "38",
    color: "Белый",
    img: "/nike.webp",
    quantity: 1,
  },
  {
    id: 2,
    name: "Сумка Bottega Veneta",
    price: 300000,
    originalPrice: 400000,
    size: "Большой",
    color: "Серый",
    img: "/image.png",
    quantity: 1,
  },
  {
    id: 3,
    name: "Женская блузка",
    price: 300000,
    originalPrice: 400000,
    size: "XL",
    color: "Белый",
    img: "/image (1).png",
    quantity: 1,
  },
  {
    id: 4,
    name: "Мужская кепка Los Angeles",
    price: 300000,
    originalPrice: 400000,
    size: "L",
    color: "Белый",
    img: "image (2).png",
    quantity: 1,
  },
];

export default function CartPage() {
  const [products, setProducts] = useState(initialProducts);

  const increment = (id: any) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );
  };

  const decrement = (id: any) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
      )
    );
  };

  const totalPrice = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  const totalQuantity = products.reduce((sum, p) => sum + p.quantity, 0);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen px-4 py-4 text-sm text-black">
      <div className="bg-teal-400 text-white py-3 px-4 rounded-t-lg text-center font-medium text-lg">
        Корзина
      </div>

      <div className="py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Доставка BestBuy.uz</h2>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-teal-500" />
            <span className="text-xs">Выбрать все</span>
          </label>
        </div>

        <div className="space-y-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex gap-4 items-start border p-2 rounded-lg"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-[85px] h-[85px] object-contain border border-blue-400 p-1 rounded-md"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-base">
                    {product.price.toLocaleString()} сум
                  </p>
                  <span className="text-gray-400 line-through text-xs">
                    {product.originalPrice.toLocaleString()} сум
                  </span>
                </div>
                <p className="text-sm mt-1 font-medium">{product.name}</p>
                <p className="text-xs mt-1">Размер: {product.size}</p>
                <p className="text-xs">Цвет: {product.color}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decrement(product.id)}
                    className="bg-gray-100 text-black w-6 h-6 flex items-center justify-center rounded hover:bg-gray-200"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="w-5 text-center">{product.quantity}</span>
                  <button
                    onClick={() => increment(product.id)}
                    className="bg-gray-100 text-black w-6 h-6 flex items-center justify-center rounded hover:bg-gray-200"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center font-semibold">
          <span>{totalPrice.toLocaleString()} сум</span>
          <span className="text-gray-500 text-sm">{totalQuantity} товара</span>
        </div>

        <button className="w-full mb-6 bg-teal-400 text-white rounded-md py-2 mt-4 hover:bg-teal-500 transition">
          Оформить заказ
        </button>
      </div>
    </div>
  );
}
