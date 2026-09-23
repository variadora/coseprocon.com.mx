import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight, Check, Phone, Mail, MapPin } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const products = ["Acero de refuerzo", "Cemento y cal", "Agregados pétreos", "Block y tabique", "General"];

const empty = { name: "", company: "", email: "", phone: "", product: "General", message: "" };

export const Contacto = () => {
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Completa nombre, correo y mensaje.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contacts`, form);
      setSent(true);
      toast.success("Solicitud enviada. Te contactaremos pronto.");
      setForm(empty);
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      toast.error("No se pudo enviar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-transparent border border-[#0A0A0A] px-4 py-3.5 font-mono-tech text-sm placeholder:text-[#4A4A4A]/60 focus:outline-none focus:border-[#FF3B30] focus:ring-2 focus:ring-[#FF3B30]/30 transition-colors duration-200";

  return (
    <section id="contacto" data-testid="contacto" className="py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* left info */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-2.5 h-2.5 bg-[#FF3B30]" />
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#4A4A4A]">Contacto</span>
          </div>
          <h2 className="font-display font-bold uppercase tracking-tighter text-4xl sm:text-5xl lg:text-6xl leading-[0.9] mb-8">
            Cotiza tu<br /> próximo pedido
          </h2>
          <p className="text-[#4A4A4A] text-base leading-relaxed max-w-md mb-12">
            Envíanos el volumen y tipo de material. Nuestro equipo comercial responde con precio y tiempo de entrega en menos de 24 horas hábiles.
          </p>

          <div className="space-y-px bg-[#0A0A0A] border border-[#0A0A0A]">
            {[
              { icon: Phone, label: "Ventas mayoreo", value: "+52 (55) 4000 1200" },
              { icon: Mail, label: "Correo", value: "ventas@fragua.mx" },
              { icon: MapPin, label: "Centro de distribución", value: "Av. Industria 450, Tlalnepantla, EdoMex" },
            ].map((c) => (
              <div key={c.label} className="bg-[#F4F4F0] flex items-center gap-4 px-5 py-4">
                <c.icon size={20} className="shrink-0 text-[#FF3B30]" strokeWidth={1.6} />
                <div>
                  <p className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#4A4A4A]">{c.label}</p>
                  <p className="text-sm font-medium">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* form */}
        <div className="lg:col-span-7">
          <motion.form
            data-testid="contact-form"
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border border-[#0A0A0A] p-6 md:p-10 bg-[#E8E8E4]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input data-testid="contact-name" className={inputCls} placeholder="Nombre completo *" value={form.name} onChange={set("name")} />
              <input data-testid="contact-company" className={inputCls} placeholder="Empresa" value={form.company} onChange={set("company")} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input data-testid="contact-email" type="email" className={inputCls} placeholder="Correo electrónico *" value={form.email} onChange={set("email")} />
              <input data-testid="contact-phone" className={inputCls} placeholder="Teléfono" value={form.phone} onChange={set("phone")} />
            </div>
            <div className="mb-4">
              <label className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#4A4A4A] mb-2 block">Material de interés</label>
              <div className="flex flex-wrap gap-2">
                {products.map((p) => (
                  <button
                    type="button"
                    key={p}
                    data-testid={`product-chip-${p}`}
                    onClick={() => setForm({ ...form, product: p })}
                    className={`font-mono-tech text-[11px] uppercase tracking-[0.1em] px-3 py-2 border border-[#0A0A0A] transition-colors duration-200 ${
                      form.product === p ? "bg-[#0A0A0A] text-[#F4F4F0]" : "bg-transparent hover:bg-[#0A0A0A]/5"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <textarea
              data-testid="contact-message"
              rows={5}
              className={`${inputCls} resize-none mb-5`}
              placeholder="Describe tu pedido: material, volumen, obra y ubicación *"
              value={form.message}
              onChange={set("message")}
            />
            <button
              data-testid="contact-submit"
              type="submit"
              disabled={loading}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0A0A0A] text-[#F4F4F0] font-mono-tech text-xs uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#FF3B30] transition-colors duration-300 disabled:opacity-60"
            >
              {sent ? (
                <>Enviado <Check size={16} /></>
              ) : (
                <>{loading ? "Enviando..." : "Enviar solicitud"} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" /></>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
