import { Star } from "lucide-react";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import gazelleTruck from "@/assets/gazelle-truck.jpg";
import demoBrickWall from "@/assets/demo-brick-wall.jpg";
import demoFloor from "@/assets/demo-floor.jpg";
import demoBathroom from "@/assets/demo-bathroom.jpg";
import demoBathroomNew from "@/assets/demo-bathroom-new.jpg";
import demoKitchen from "@/assets/demo-kitchen.jpg";
import demoApartment from "@/assets/demo-apartment.jpg";

const gallery = [
  { img: demoBrickWall, title: "Демонтаж кирпичной стены" },
  { img: demoFloor, title: "Снятие напольного покрытия" },
  { img: demoBathroomNew, title: "Демонтаж ванной комнаты" },
  { img: demoKitchen, title: "Демонтаж кухни" },
  { img: demoApartment, title: "Комплексный демонтаж квартиры" },
  { img: beforeAfter1, title: "Полный демонтаж помещения" },
];

const reviews = [
  { name: "Алексей К.", text: "Отличная команда! Демонтировали старую кухню и ванную за 2 дня. Всё аккуратно, мусор вывезли. Рекомендую!", rating: 5 },
  { name: "Марина С.", text: "Заказывали полный демонтаж квартиры под ремонт. Ребята работали быстро и чисто. Цена адекватная, результат супер.", rating: 5 },
  { name: "Виктор Л.", text: "Нужно было снести перегородку и расширить дверной проём. Сделали за день, без пыли и шума для соседей. Спасибо!", rating: 5 },
  { name: "Ольга Н.", text: "Обращались для демонтажа полов в 3-комнатной квартире. Всё выполнено в срок, качественно. Буду рекомендовать знакомым.", rating: 4 },
];

const Portfolio = () => (
  <div className="pt-20">
    <section className="relative h-[40vh] flex items-center">
      <div className="absolute inset-0">
        <img src={beforeAfter2} alt="Портфолио" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="relative container mx-auto px-4">
        <div className="yellow-stripe" />
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
          <span className="text-primary">ПОРТФОЛИО</span>
        </h1>
      </div>
    </section>

    {/* Gallery */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="yellow-stripe" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
          НАШИ <span className="text-primary">РАБОТЫ</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((g) => (
            <div key={g.title} className="group bg-card border border-border rounded-lg overflow-hidden card-hover">
              <div className="h-56 overflow-hidden relative">
                <img src={g.img} alt={g.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="font-heading text-sm text-primary tracking-wider">{g.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    {/* Reviews */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="yellow-stripe" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
          ОТЗЫВЫ <span className="text-primary">КЛИЕНТОВ</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card border border-border rounded-lg p-6 card-hover">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < r.rating ? "text-primary fill-primary" : "text-muted-foreground"}`} />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-4 italic">"{r.text}"</p>
              <div className="font-heading text-sm text-foreground">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Portfolio;
