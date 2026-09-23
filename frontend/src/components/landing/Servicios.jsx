import { motion } from "framer-motion";
import { Truck, Layers, FileSpreadsheet, HardHat, Ruler, Warehouse } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 } }),
};

const services = [
  { icon: Warehouse, num: "01", title: "Suministro a granel", desc: "Abastecimiento continuo por tonelada o pallet, directo desde planta a tu obra.", wide: true },
  { icon: Truck, num: "02", title: "Logística y flete", desc: "Flota propia y entregas programadas con rastreo por ruta." },
  { icon: FileSpreadsheet, num: "03", title: "Crédito a constructoras", desc: "Líneas de crédito y facturación consolidada para proyectos grandes." },
  { icon: HardHat, num: "04", title: "Obra pesada", desc: "Volúmenes para infraestructura, vivienda y pavimentación.", wide: true },
  { icon: Ruler, num: "05", title: "Asesoría técnica", desc: "Cálculo de materiales y especificaciones por proyecto." },
  { icon: Layers, num: "06", title: "Catálogo integral", desc: "Todo lo estructural en un solo proveedor confiable." },
];

export const Servicios = () => {
  return (
    <section id="servicios" data-testid="servicios" className="bg-[#0A0A0A] text-[#F4F4F0] py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-2.5 h-2.5 bg-[#FF3B30]" />
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#F4F4F0]/60">Servicios</span>
            </div>
            <h2 className="font-display font-bold uppercase tracking-tighter text-4xl sm:text-5xl lg:text-6xl leading-[0.9]">
              Cómo movemos<br /> tu obra
            </h2>
          </div>
          <p className="max-w-sm text-[#F4F4F0]/60 text-base leading-relaxed">
            Operamos como socio de abastecimiento. Menos proveedores, más control sobre costos y tiempos de entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#F4F4F0]/20 border border-[#F4F4F0]/20">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              custom={i}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className={`group bg-[#0A0A0A] p-8 md:p-10 flex flex-col justify-between min-h-[240px] md:min-h-[280px] hover:bg-[#FF3B30] hover:text-[#0A0A0A] transition-colors duration-300 ${
                s.wide ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <s.icon size={34} strokeWidth={1.4} />
                <span className="font-mono-tech text-xs tracking-[0.2em] opacity-50">{s.num}</span>
              </div>
              <div>
                <h3 className="font-display font-semibold uppercase tracking-tight text-2xl md:text-3xl mb-3">{s.title}</h3>
                <p className="text-sm md:text-base opacity-70 group-hover:opacity-90 max-w-md">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
