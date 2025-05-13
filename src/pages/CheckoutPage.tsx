"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitOrder, resetOrderState } from "@/app/features/orderSlice";
import { RootState } from "@/app/store";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { AppDispatch } from "@/app/store";

export default function CheckoutPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { success, loading } = useSelector((state: RootState) => state.order);

  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState({
    подъезд: "",
    домофон: "",
    квартира: "",
    этаж: "",
    комментарий: "",
    телефон: "+998977777777",
  });

  const handleInputChange = (field: string, value: string) => {
    setAddress((prev) => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = () => {
    const orderData = {
      product: "Новомодные кроссовки Nike",
      quantity,
      address,
      totalPrice: 300000,
    };
    dispatch(submitOrder(orderData));
  };

  const closeModal = () => {
    dispatch(resetOrderState());
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Доставка BestBuy.uz</h1>

      <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-md">
        {/* Product details */}
        <div className="flex items-center gap-4">
          <img
            src="/shoe.jpg"
            alt="Nike Shoes"
            className="w-24 h-24 rounded-xl object-cover"
          />
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Новомодные кроссовки Nike</h2>
            <p className="text-sm text-gray-500">Размер обуви: 38</p>
            <p className="text-sm text-gray-500">Цвет: белый</p>
            <div className="flex items-center mt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </Button>
              <span className="mx-2">{quantity}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </Button>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="mt-6">
          <h3 className="text-md font-semibold mb-2">Куда</h3>
          <p className="text-sm text-gray-700 mb-2">массив Киёт, д. 37</p>
          <div className="grid grid-cols-2 gap-2">
            <Input
              placeholder="Подъезд"
              value={address.подъезд}
              onChange={(e) => handleInputChange("подъезд", e.target.value)}
            />
            <Input
              placeholder="Домофон"
              value={address.домофон}
              onChange={(e) => handleInputChange("домофон", e.target.value)}
            />
            <Input
              placeholder="Квартира"
              value={address.квартира}
              onChange={(e) => handleInputChange("квартира", e.target.value)}
            />
            <Input
              placeholder="Этаж"
              value={address.этаж}
              onChange={(e) => handleInputChange("этаж", e.target.value)}
            />
          </div>
          <Input
            placeholder="Комментарий курьеру"
            className="mt-2"
            value={address.комментарий}
            onChange={(e) => handleInputChange("комментарий", e.target.value)}
          />
          <Input
            placeholder="Телефон получателя"
            className="mt-2"
            value={address.телефон}
            onChange={(e) => handleInputChange("телефон", e.target.value)}
          />
        </div>

        {/* Payment */}
        <div className="mt-6">
          <h3 className="text-md font-semibold mb-2">Оплата</h3>
          <div className="flex flex-col gap-2">
            <Button variant="outline">**** 1840</Button>
            <Button variant="outline">Добавить карту</Button>
            <Button variant="outline">Наличные</Button>
            <Input placeholder="Промокод" className="mt-2" />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between mb-10 items-center mt-6">
          <div>
            <p className="text-gray-600 text-sm">Итого</p>
            <p className="text-xl font-bold">300 000 сум</p>
          </div>
          <Button
            className="px-6 py-3 rounded-xl"
            onClick={handlePlaceOrder}
            disabled={loading}
          >
            {loading ? "Отправка..." : "Оплатить"}
          </Button>
        </div>
      </div>
      <Dialog open={success} onOpenChange={closeModal}>
        <DialogContent className="text-center ">
          <DialogHeader>
            <DialogTitle className=" pb-[200px]   pt-[100px] text-4xl mb-4">
              <svg
                width="150"
                height="150"
                viewBox="0 0 308 308"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M153.75 307.5C173.941 307.5 193.934 303.523 212.588 295.797C231.241 288.07 248.191 276.745 262.468 262.468C276.745 248.191 288.07 231.241 295.797 212.588C303.523 193.934 307.5 173.941 307.5 153.75C307.5 133.559 303.523 113.566 295.797 94.9124C288.07 76.2586 276.745 59.3093 262.468 45.0323C248.191 30.7553 231.241 19.4302 212.588 11.7035C193.934 3.97686 173.941 -3.00865e-07 153.75 0C112.973 6.07625e-07 73.8661 16.1986 45.0323 45.0323C16.1986 73.8661 0 112.973 0 153.75C0 194.527 16.1986 233.634 45.0323 262.468C73.8661 291.301 112.973 307.5 153.75 307.5ZM149.787 215.933L235.203 113.433L208.963 91.5667L135.505 179.7L97.4946 141.672L73.3388 165.828L124.589 217.078L137.811 230.3L149.787 215.933Z"
                  fill="#4FC9AF"
                />
              </svg>
              <p className="text-2xl mt-5  font-semibold">
                Ваш заказ успешно оформлен
              </p>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
