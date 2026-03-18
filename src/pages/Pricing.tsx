import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImg from "@/assets/hero-demolition.jpg";

const categories = [
  {
    title: "Демонтаж стен",
    items: [
      { name: "Демонтаж гипсокартонных перегородок", price: "от 8 BYN/м²" },
      { name: "Демонтаж кирпичных перегородок (в полкирпича)", price: "от 15 BYN/м²" },
      { name: "Демонтаж кирпичных стен (в кирпич)", price: "от 25 BYN/м²" },
      { name: "Демонтаж пеноблочных стен", price: "от 12 BYN/м²" },
      { name: "Расширение дверного проёма", price: "от 50 BYN/шт" },
    ],
  },
  {
    title: "Демонтаж полов",
    items: [
      { name: "Снятие линолеума", price: "от 3 BYN/м²" },
      { name: "Демонтаж ламината / паркета", price: "от 5 BYN/м²" },
      { name: "Демонтаж напольной плитки", price: "от 10 BYN/м²" },
      { name: "Снятие стяжки (до 5 см)", price: "от 15 BYN/м²" },
      { name: "Демонтаж деревянного пола с лагами", price: "от 12 BYN/м²" },
    ],
  },
  {
    title: "Демонтаж потолков",
    items: [
      { name: "Снятие натяжного потолка", price: "от 4 BYN/м²" },
      { name: "Демонтаж подвесного потолка", price: "от 6 BYN/м²" },
      { name: "Удаление штукатурки с потолка", price: "от 10 BYN/м²" },
      { name: "Демонтаж реечного потолка", price: "от 5 BYN/м²" },
    ],
  },
  {
    title: "Демонтаж сантехники",
    items: [
      { name: "Демонтаж ванны", price: "от 40 BYN/шт" },
      { name: "Демонтаж унитаза", price: "от 25 BYN/шт" },
      { name: "Демонтаж раковины", price: "от 20 BYN/шт" },
      { name: "Демонтаж полотенцесушителя", price: "от 30 BYN/шт" },
      { name: "Демонтаж труб (за погонный метр)", price: "от 8 BYN/п.м." },
    ],
  },
  {
    title: "Демонтаж окон и дверей",
    items: [
      { name: "Демонтаж оконного блока", price: "от 35 BYN/шт" },
      { name: "Демонтаж дверного блока", price: "от 25 BYN/шт" },
      { name: "Демонтаж подоконника", price: "от 15 BYN/шт" },
      { name: "Демонтаж балконного блока", price: "от 50 BYN/шт" },
    ],
  },
  {
    title: "Вывоз мусора",
    items: [
      { name: "Вывоз строительного мусора (газель)", price: "от 70 BYN" },
      { name: "Вывоз мусора (контейнер 8 м³)", price: "от 150 BYN" },
      { name: "Погрузка мусора", price: "от 5 BYN/м³" },
      { name: "Вынос мусора из квартиры", price: "от 3 BYN/мешок" },
    ],
  },
  {
    title: "Комплексный демонтаж",
    items: [
      { name: "Полный демонтаж квартиры (1-комн.)", price: "от 800 BYN" },
      { name: "Полный демонтаж квартиры (2-комн.)", price: "от 1200 BYN" },
      { name: "Полный демонтаж квартиры (3-комн.)", price: "от 1600 BYN" },
      { name: "Вывоз строительного мусора", price: "от 150 BYN/контейнер" },
    ],
  },
];

const Pricing = () => (
  <div className="pt-20">
    <section className="relative h-[40vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Цены на демонтаж" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="relative container mx-auto px-4">
        <div className="yellow-stripe" />
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
          ЦЕНЫ И <span className="text-primary">РАСЧЁТ СТОИМОСТИ</span>
        </h1>
        <p className="text-muted-foreground text-lg mt-4 max-w-xl">
          Прозрачное ценообразование. Точная стоимость определяется после осмотра объекта.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto space-y-8">
        {categories.map((cat) => (
          <div key={cat.title} className="bg-card border border-border rounded-lg overflow-hidden card-hover">
            <div className="bg-secondary px-6 py-4 border-b border-border">
              <h2 className="font-heading text-xl font-bold text-primary">{cat.title}</h2>
            </div>
            <div className="divide-y divide-border">
              {cat.items.map((item) => (
                <div key={item.name} className="flex items-center justify-between px-6 py-4">
                  <span className="text-foreground text-sm">{item.name}</span>
                  <span className="font-heading text-primary text-sm font-semibold whitespace-nowrap ml-4">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          ТОЧНЫЙ <span className="text-primary">РАСЧЁТ</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Для точного расчёта стоимости работ наш специалист выезжает на объект бесплатно
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider px-8 py-6">
            <a href="tel:+375445554542">
              <Phone className="w-4 h-4 mr-2" />
              БЕСПЛАТНАЯ ОЦЕНКА
            </a>
          </Button>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 font-heading tracking-wider px-8 py-6">
            <Link to="/">ОСТАВИТЬ ЗАЯВКУ</Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default Pricing;
