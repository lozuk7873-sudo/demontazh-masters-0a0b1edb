import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import demoWalls from "@/assets/demo-walls.jpg";
import demoWindows from "@/assets/demo-windows.jpg";
import demoFloor from "@/assets/demo-floor.jpg";
import demoBathroom from "@/assets/demo-bathroom.jpg";
import demoKitchen from "@/assets/demo-kitchen.jpg";
import heroImg from "@/assets/hero-demolition.jpg";
import demoCeiling from "@/assets/demo-ceiling.jpg";

const services = [
  {
    img: demoWalls,
    title: "Демонтаж стен и перегородок",
    items: ["Снос кирпичных перегородок", "Демонтаж гипсокартонных конструкций", "Удаление пеноблочных стен", "Расширение дверных проёмов", "Демонтаж встроенных шкафов"],
  },
  {
    img: demoFloor,
    title: "Демонтаж полов",
    items: ["Снятие паркета и ламината", "Демонтаж плитки и кафеля", "Удаление стяжки пола", "Снятие линолеума", "Демонтаж деревянных полов"],
  },
  {
    img: demoCeiling,
    title: "Демонтаж потолков",
    items: ["Снятие натяжных потолков", "Демонтаж подвесных конструкций", "Удаление штукатурки с потолка", "Демонтаж реечных потолков", "Очистка потолков до бетона"],
  },
  {
    img: demoBathroom,
    title: "Демонтаж сантехники",
    items: ["Демонтаж ванной и душевой", "Снятие унитазов и раковин", "Демонтаж труб и разводки", "Удаление полотенцесушителей", "Демонтаж бойлеров и котлов"],
  },
  {
    img: demoKitchen,
    title: "Демонтаж кухни",
    items: ["Демонтаж кухонных гарнитуров", "Снятие кухонного фартука", "Демонтаж столешниц", "Удаление встроенной техники", "Демонтаж вытяжек"],
  },
  {
    img: demoWalls,
    title: "Демонтаж окон и дверей",
    items: ["Демонтаж оконных блоков", "Снятие дверных коробок", "Удаление подоконников", "Демонтаж балконных блоков", "Расширение оконных проёмов"],
  },
];

const Services = () => (
  <div className="pt-20">
    <section className="relative h-[40vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Услуги демонтажа" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="relative container mx-auto px-4">
        <div className="yellow-stripe" />
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
          УСЛУГИ ПО <span className="text-primary">ДЕМОНТАЖУ</span>
        </h1>
        <p className="text-muted-foreground text-lg mt-4 max-w-xl">
          Полный спектр демонтажных работ для квартир и домов в Минске
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto space-y-12">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
              i % 2 === 1 ? "lg:direction-rtl" : ""
            }`}
          >
            <div className={`rounded-lg overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <img src={s.img} alt={s.title} className="w-full h-72 object-cover" />
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                <span className="text-primary">{String(i + 1).padStart(2, "0")}.</span> {s.title}
              </h2>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
          НУЖНА <span className="text-primary">КОНСУЛЬТАЦИЯ?</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Позвоните нам для бесплатной оценки стоимости работ или оставьте заявку на главной странице
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider px-8 py-6">
            <a href="tel:+375259329404">
              <Phone className="w-4 h-4 mr-2" />
              +375 (25) 932-94-04
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

export default Services;
