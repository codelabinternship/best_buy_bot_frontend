import { Checkbox } from "@/components/ui/checkbox";

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div className="w-[90px] p-1 rounded-lg  flex gap-2 bg-[#B4DAD2] ml-30">
      <button className=" rounded w-6 h-6 bg-white" onClick={increment}>
        +
      </button>
      <button className="w-6" onClick={reset}>
        {count}
      </button>
      <button className="rounded w-6 h-6 bg-white" onClick={decrement}>
        -
      </button>
    </div>
  );
}

function Korzina() {
  return (
    <header className="bg-[#4FC9AF] h-[960px] w-[422px]">
      <div className="text-white font-medium text-4xl flex justify-center]">
        Корзина
      </div>
      <div className="h-[960px] border-2 bg-white shadow-2xl rounded-2xl">
        <div className="flex gap-2 justify-end mt-8 items-center mr-2">
          <button className="">Выбрать все</button>
          <Checkbox className="" />
        </div>
        <div className="font-medium text-2xl ml-5 mt-[17px]">
          Доставка BestBuy.uz
        </div>
        <div className="flex gap-4">
          <img
            className="w-[150px] h-[150px] mt-[30px] ml-4 rounded"
            src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_656d82ba9894eb784002d520_656d82eb7bfaf516afe40e61/scale_1200"
            alt=""
          />
          <div>
            <div className="flex gap-3 mt-[30px]">
              <p className="text-sm">300 000 сум</p>
              <p className="text-sm text-gray-400 line-through">400 000</p>
            </div>
            <button className="bg-[#4FC9AF] text-white rounded-3xl px-0.5 text-[10px] mb-3">
              Суперцена
            </button>
            <p className="text-sm mb-2">Новомодные кроссовки Nike</p>
            <p className="text-sm text-gray-500">Размер обуви: 38</p>
            <p className="text-sm text-gray-500">Цвет: белый</p>
            <Counter />
          </div>
        </div>
        <div className="flex gap-4">
          <img
            className="w-[150px] h-[150px] mt-[30px] ml-4 rounded"
            src="https://images-eu.ssl-images-amazon.com/images/I/51a0vgzTC1L._UL1000_.jpg"
            alt=""
          />
          <div>
            <div className="flex gap-3 mt-[30px]">
              <p className="text-sm">300 000 сум</p>
              <p className="text-sm text-gray-400 line-through">400 000</p>
            </div>
            <button className="bg-[#4FC9AF] text-white rounded-3xl px-0.5 text-[10px] mb-3">
              Суперцена
            </button>
            <p className="text-sm mb-2">Сумка Bottega Veneta</p>
            <p className="text-sm text-gray-500">Размер сумки: большой</p>
            <p className="text-sm text-gray-500">Цвет: серый</p>
            <Counter />
          </div>
        </div>
        <div className="flex gap-4">
          <img
            className="w-[150px] h-[150px] mt-[30px] ml-4 rounded"
            src="https://cdn.100sp.ru/pictures/117530908"
            alt=""
          />
          <div>
            <div className="flex gap-3 mt-[30px]">
              <p className="text-sm">300 000 сум</p>
              <p className="text-sm text-gray-400 line-through">400 000</p>
            </div>
            <button className="bg-[#4FC9AF] text-white rounded-3xl px-0.5 text-[10px] mb-3">
              Суперцена
            </button>
            <p className="text-sm mb-2">Женская блузка</p>
            <p className="text-sm text-gray-500">Размер: XL</p>
            <p className="text-sm text-gray-500">Цвет: белый</p>
            <Counter />
          </div>
        </div>
        <div className="flex gap-4">
          <img
            className="w-[150px] h-[150px] mt-[30px] ml-4 rounded"
            src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_656d82ba9894eb784002d520_656d82eb7bfaf516afe40e61/scale_1200"
            alt=""
          />
          <div>
            <div className="flex gap-3 mt-[30px]">
              <p className="text-sm">300 000 сум</p>
              <p className="text-sm text-gray-400 line-through">400 000</p>
            </div>
            <button className="bg-[#4FC9AF] text-white rounded-3xl px-0.5 text-[10px] mb-3">
              Суперцена
            </button>
            <p className="text-sm mb-2">Новомодные кроссовки Nike</p>
            <p className="text-sm text-gray-500">Размер обуви: 38</p>
            <p className="text-sm text-gray-500">Цвет: белый</p>
            <Counter />
          </div>
        </div>
        <div className="flex items-center justify-between mt-[50px] ">
          <div>
            <div className="ml-5 ">1 200 000 сум</div>
            <p className="text-gray-600 text-sm  ml-5 ">4 товара</p>
          </div>
          <div>
            <button className="text-white bg-[#4FC9AF] p-3 rounded-lg mr-2">
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Korzina;
Counter;
