import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Rating from "@/components/ui/rating";
import { Apple, Flame, Heart } from "lucide-react";

function Commants() {
    return <div className="bg-[#DCF5F0] h-min">
        <p className=" font-medium text-[22px] ml-[135px] mb-[30px] pt-2">Мои отзывы </p>
        <div className="rounded-lg bg-white w-[350px] h-[250px] ml-5 mb-5">
            <div className="flex gap-4">
                <img className="w-[100px] h-[100px] ml-4 pt-3" src="https://avatars.mds.yandex.net/get-mpic/5209894/img_id8454927299910262604.png/orig" alt="" />
                <p className="font-bold text-[15px] mt-[15px]">Беспроводные наушники Sony  с шумоподавлением</p>
            </div>
            <Rating className="mt-[26px] ml-4" defaultSelected={3} totalStars={5} />
            <p className="mt-[30px]  ml-4">Достоинства</p>
            <p className="ml-4">zo`r</p>

        </div>
         <div className="rounded-lg bg-white w-[350px] h-[250px] ml-5 mb-5">
            <div className="flex gap-4">
                <img className="w-[100px] h-[100px] ml-4 pt-3" src="https://i-mobilestore.ru/wa-data/public/shop/products/14/29/12914/images/74965/74965.970.jpg" alt="" />
                <p className="font-bold text-[15px] mt-[15px]">Смарт-часы Unbranded a1 W Bluetooth Iphone</p>
            </div>
            <Rating className="mt-[26px] ml-4" defaultSelected={0} totalStars={5} />
            <p className="mt-[30px]  ml-4">Достоинства</p>
            <p className="ml-4">Maxsulot yaxshi emas!!</p>

        </div>
        <div className="rounded-lg bg-white w-[350px] h-[250px] ml-5 mb-5">
            <div className="flex gap-4">
                <img className="w-[100px] h-[100px] ml-4 pt-3" src="https://i-mobilestore.ru/wa-data/public/shop/products/14/29/12914/images/74965/74965.970.jpg" alt="" />
                <p className="font-bold text-[15px] mt-[15px]">Смарт-часы Unbranded a1 W Bluetooth Iphone</p>
            </div>
            <Rating className="mt-[26px] ml-4" defaultSelected={0} totalStars={5} />
            <p className="mt-[30px]  ml-4">Достоинства</p>
            <p className="ml-4">Maxsulot yaxshi emas!!</p>

        </div>

    </div>
}
export default Commants