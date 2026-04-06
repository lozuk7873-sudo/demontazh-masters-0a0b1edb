import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
            ДЕМОНТАЖ<span className="text-primary">МИНСК</span>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Профессиональные демонтажные работы в квартирах и домах Минска. Быстро, качественно.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm tracking-wider text-primary mb-4">НАВИГАЦИЯ</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-muted-foreground text-sm hover:text-primary transition-colors">Главная</Link>
            <Link to="/about" className="text-muted-foreground text-sm hover:text-primary transition-colors">О компании</Link>
            <Link to="/services" className="text-muted-foreground text-sm hover:text-primary transition-colors">Услуги</Link>
            <Link to="/portfolio" className="text-muted-foreground text-sm hover:text-primary transition-colors">Портфолио</Link>
            <Link to="/pricing" className="text-muted-foreground text-sm hover:text-primary transition-colors">Цены</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm tracking-wider text-primary mb-4">КОНТАКТЫ</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:+375259329404" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" /> +375 (25) 932-94-04
            </a>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-primary" /> г. Минск, Беларусь
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Clock className="w-4 h-4 text-primary" /> Пн-Сб: 8:00 - 20:00
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border text-center text-muted-foreground text-xs">
        © 2024 ДемонтажМинск. Все права защищены.
      </div>
    </div>
  </footer>
);

export default Footer;
