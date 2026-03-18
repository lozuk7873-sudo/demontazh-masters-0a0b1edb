import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

function generateCaptcha() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { question: `${a} + ${b} = ?`, answer: a + b };
}

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [captchaInput, setCaptchaInput] = useState("");

  const refreshCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Заполните обязательные поля");
      return;
    }
    if (parseInt(captchaInput) !== captcha.answer) {
      toast.error("Неверный ответ на капчу");
      refreshCaptcha();
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-telegram", {
        body: { name: formData.name, phone: formData.phone, message: formData.message },
      });

      if (error) throw error;

      toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
      setFormData({ name: "", phone: "", message: "" });
      refreshCaptcha();
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Ошибка отправки. Попробуйте позже или позвоните нам.");
    } finally {
      setLoading(false);
    }
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
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground text-sm whitespace-nowrap font-medium">{captcha.question}</span>
        <Input
          placeholder="Ответ *"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          className="bg-secondary border-border text-foreground placeholder:text-muted-foreground max-w-[120px]"
          type="number"
        />
        <button type="button" onClick={refreshCaptcha} className="text-primary hover:text-primary/80 text-xs underline whitespace-nowrap">
          Другой вопрос
        </button>
      </div>
      <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider">
        {loading ? "ОТПРАВКА..." : "ОСТАВИТЬ ЗАЯВКУ"}
      </Button>
    </form>
  );
};

export default ContactForm;
