import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function OrderSummary() {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen px-4 py-6 text-sm text-black">
      <h1 className="text-center font-medium text-lg mb-6">Мои заказы</h1>

      <div className="space-y-2">
        <p>
          <span className="font-medium">Дата доставки:</span> 8 апреля
        </p>
        <p>
          <span className="font-medium">Доставка</span>
          <br />
          г. Ташкент, Юнусабадский район, 19 квартал, дом 16
        </p>
        <p>
          <span className="font-medium">Дата заказа:</span> 07.04.2025
        </p>
        <p>
          <span className="font-medium">Получатель заказа:</span>
          <br />
          Gafforova Sevinch
          <br />
          +998 90 0146410
        </p>

        <div className="mt-4 border-t pt-3 space-y-1">
          <div className="flex justify-between">
            <span>1 товара</span>
            <span>300 000</span>
          </div>
          <div className="flex justify-between">
            <span>Доставка</span>
            <span>25 000</span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Итого:</span>
            <span>325 000</span>
          </div>
        </div>
      </div>

      <div className="border-t mt-6 pt-3">
        <button
          className="flex items-center space-x-2 font-medium text-sm"
          onClick={() => setShowDetails(!showDetails)}
        >
          <span>Подробно</span>
          {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {showDetails && (
          <div className="mt-4 flex gap-4 items-start">
            <img
              src="/pngwing.com 1.png" // replace with local image if needed
              alt="headphones"
              className="w-20 h-20 object-contain"
            />
            <div className="flex-1">
              <p className="font-semibold leading-snug">
                Беспроводные наушники Sony <br /> с шумоподавлением
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-medium text-black">Цвет:</span> Белый
              </p>
              <p className="mt-2 font-medium">
                <span className="text-gray-500">1 шт x 300 000 сум</span>
                <span className="block text-black text-base">300 000 сум</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
