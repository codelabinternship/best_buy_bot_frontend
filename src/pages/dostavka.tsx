
import React, { useState } from 'react';


function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    return (
        <div className="w-[90px] p-1 rounded-lg  flex gap-2 bg-[#B4DAD2] ml-30">
            <button className=" rounded w-6 h-6 bg-white" onClick={increment}>+</button>
            <button className="w-6" onClick={reset}>{count}</button>
            <button className="rounded w-6 h-6 bg-white" onClick={decrement}>-</button>

        </div>
    );
}
function Dostavka() {
    return <div>
        <div className="w-[399px] h-[46px] top-[110px] left-[25px] font-semibold text-[25px] mt-[40px]">Доставка BestBuy.uz</div>
        <div className="flex gap-4" >
            <img className="w-[150px] h-[150px] mt-[30px] ml-4 rounded" src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_656d82ba9894eb784002d520_656d82eb7bfaf516afe40e61/scale_1200" alt="" />
            <div>
                <div className="flex gap-3 mt-[30px]">
                    <p className="text-sm">300 000 сум</p>
                    <p className="text-sm text-gray-400 line-through" >400 000</p>
                </div>
                <button className="bg-[#4FC9AF] text-white rounded-3xl px-0.5 text-[10px] mb-3" >Суперцена</button>
                <p className="text-sm mb-2">Новомодные кроссовки Nike</p>
                <p className="text-sm text-gray-500">Размер обуви: 38</p>
                <p className="text-sm text-gray-500">Цвет: белый</p>
                <Counter />


            </div>
        </div>
        <p className='font-semibold text-[25px] mt-[22px]'>Куда</p>
    </div>
}
export default Dostavka; Counter