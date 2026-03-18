import { Link } from "react-router-dom";
import { Shield, Clock, Truck, BadgeCheck, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import heroImg from "@/assets/hero-demolition.jpg";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import demoWalls from "@/assets/demo-walls.jpg";
import demoBathroom from "@/assets/demo-bathroom.jpg";

const advantages = [
  { icon: Clock, title: "Точные сроки", desc: "Соблюдаем оговоренные сроки демонтажа" },
  { icon: Truck, title: "Вывоз мусора", desc: "Уборка и вывоз строительного мусора включены" },
  { icon: BadgeCheck, title: "Опыт 10+ лет", desc: "Профессиональная команда с большим опытом" },
  { icon: Shield, title: "Конкурентные цены", desc: "Доступные цены без потери качества работ" },
];

const services = [
  { img: demoWalls, title: "Демонтаж стен", desc: "Снос перегородок и несущих конструкций" },
  { img: demoBathroom, title: "Демонтаж сантехники", desc: "Демонтаж ванн, унитазов, раковин" },
  { img: beforeAfter1, title: "Полный демонтаж", desc: "Комплексный демонтаж квартир под ключ" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Демонтажные работы в Минске" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-2xl">
          <div className="yellow-stripe" />
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            ДЕМОНТАЖНЫЕ<br />
            РАБОТЫ В <span className="text-primary">МИНСКЕ</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg">
            Профессиональный демонтаж квартир и домов. Быстро, аккуратно, с вывозом мусора.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider text-base px-8 py-6">
              <Link to="/services">НАШИ УСЛУГИ</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 font-heading tracking-wider text-base px-8 py-6">
              <a href="tel:+375445554542">
                <Phone className="w-4 h-4 mr-2" />
                ПОЗВОНИТЬ
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="yellow-stripe" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
          НАШИ <span className="text-primary">УСЛУГИ</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group bg-card border border-border rounded-lg overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 font-heading tracking-wider">
            <Link to="/services">ВСЕ УСЛУГИ <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Advantages */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="yellow-stripe" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
          ПОЧЕМУ <span className="text-primary">МЫ</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((a) => (
            <div key={a.title} className="bg-card border border-border rounded-lg p-6 card-hover">
              <a.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="yellow-stripe" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              ОСТАВИТЬ <span className="text-primary">ЗАЯВКУ</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              Заполните форму и мы свяжемся с вами для бесплатной консультации и расчёта стоимости работ.
            </p>
            <div className="flex items-center gap-3 mb-2">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+375259329404" className="text-foreground font-heading text-lg hover:text-primary transition-colors">
                +375 (25) 932-94-04
              </a>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
