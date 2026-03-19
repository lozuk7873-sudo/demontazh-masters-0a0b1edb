import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

const navItems = [
  { label: "Главная", path: "/" },
  { label: "О компании", path: "/about" },
  { label: "Услуги", path: "/services" },
  { label: "Портфолио", path: "/portfolio" },
  { label: "Цены", path: "/pricing" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-xl">
              Д
            </div>
            <span className="font-heading text-lg md:text-xl font-semibold text-foreground tracking-wider">
              ДЕМОНТАЖ<span className="text-primary">МИНСК</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-heading text-sm tracking-wider transition-colors hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+375445554542" className="flex items-center gap-2 text-primary font-heading text-sm tracking-wider">
              <Phone className="w-4 h-4" />
              +375 (44) 555-45-42
            </a>
            <Button
              onClick={() => setFormOpen(true)}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider text-xs px-4"
            >
              ОСТАВИТЬ ЗАЯВКУ
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <nav className="container mx-auto py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-heading text-sm tracking-wider transition-colors hover:text-primary ${
                    location.pathname === item.path ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a href="tel:+375445554542" className="flex items-center gap-2 text-primary font-heading text-sm tracking-wider">
                <Phone className="w-4 h-4" />
                +375 (44) 555-45-42
              </a>
              <button
                onClick={() => { setFormOpen(true); setIsOpen(false); }}
                className="flex items-center gap-2 text-primary font-heading text-sm tracking-wider"
              >
                <FileText className="w-4 h-4" />
                ОСТАВИТЬ ЗАЯВКУ
              </button>
            </nav>
          </div>
        )}
      </header>

      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl text-foreground">
              ОСТАВИТЬ <span className="text-primary">ЗАЯВКУ</span>
            </DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground text-sm mb-2">
            Заполните форму и мы свяжемся с вами для бесплатной консультации.
          </p>
          <ContactForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
