import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Заполните обязательные поля");
      return;
    }
    setLoading(true);
    
    // For now, just show success - Telegram bot integration requires backend
    setTimeout(() => {
      toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
      setFormData({ name: "", phone: "", message: "" });
      setLoading(false);
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Ваше имя *"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
      />
      <Input
        placeholder="Телефон *"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
      />
      <Textarea
        placeholder="Опишите задачу"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="bg-secondary border-border text-foreground placeholder:text-muted-foreground min-h-[100px]"
      />
      <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider">
        {loading ? "ОТПРАВКА..." : "ОСТАВИТЬ ЗАЯВКУ"}
      </Button>
    </form>
  );
};

export default ContactForm;
