import { Target, Eye, Award, Users, Hammer, ShieldCheck } from "lucide-react";
import toolsImg from "@/assets/demolition-tools.jpg";

const values = [
  { icon: ShieldCheck, title: "Безопасность", desc: "Строгое соблюдение техники безопасности на каждом объекте" },
  { icon: Target, title: "Точность", desc: "Аккуратный демонтаж без повреждения соседних конструкций" },
  { icon: Users, title: "Клиентоориентированность", desc: "Индивидуальный подход к каждому проекту" },
  { icon: Award, title: "Профессионализм", desc: "Качественное выполнение работ любой сложности" },
];

const stats = [
  { value: "500+", label: "Выполненных проектов" },
  { value: "10+", label: "Лет опыта" },
  { value: "100%", label: "Довольных клиентов" },
  { value: "24ч", label: "Выезд на объект" },
];

const About = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="relative h-[50vh] flex items-center">
      <div className="absolute inset-0">
        <img src={teamImg} alt="Команда ДемонтажМинск" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="relative container mx-auto px-4">
        <div className="yellow-stripe" />
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
          О <span className="text-primary">КОМПАНИИ</span>
        </h1>
      </div>
    </section>

    {/* Why Us */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="yellow-stripe" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              ПОЧЕМУ <span className="text-primary">ВЫБИРАЮТ НАС</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Мы — команда профессионалов с более чем 10-летним опытом в сфере демонтажных работ в Минске. За это время мы выполнили сотни проектов различной сложности: от демонтажа перегородок в квартирах до полного сноса внутренних конструкций в загородных домах.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Наша команда располагает профессиональным оборудованием и инструментами для выполнения работ любой сложности. Мы работаем быстро, аккуратно и всегда убираем за собой.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-lg p-6 text-center card-hover">
                <div className="font-heading text-3xl font-bold text-primary mb-2">{s.value}</div>
                <div className="text-muted-foreground text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto text-center max-w-3xl">
        <Eye className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
          НАША <span className="text-primary">МИССИЯ</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Сделать демонтажные работы максимально простыми, безопасными и доступными для каждого жителя Минска. Мы стремимся к тому, чтобы подготовка вашего помещения к ремонту была быстрой и беспроблемной.
        </p>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="yellow-stripe" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
          НАШИ <span className="text-primary">ЦЕННОСТИ</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-card border border-border rounded-lg p-6 card-hover">
              <v.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Experience */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img src={teamImg} alt="Команда за работой" className="w-full h-80 object-cover" />
          </div>
          <div>
            <Hammer className="w-10 h-10 text-primary mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              ОПЫТ <span className="text-primary">РАБОТЫ</span>
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                Более 500 успешно выполненных проектов
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                Работаем с квартирами, домами и коммерческими помещениями
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                Профессиональное оборудование Hilti и Bosch
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                Штат из 15+ квалифицированных специалистов
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
