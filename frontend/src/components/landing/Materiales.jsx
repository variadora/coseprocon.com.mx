import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Materiales = ({ images }) => {
  const products = [
    { code: "MP-01", title: "Acero de refuerzo", spec: "Varilla · Alambrón · Malla", img: images.rebar },
    { code: "MP-02", title: "Cemento y cal", spec: "Gris · Blanco · Mortero", img: images.cement },
    { code: "MP-03", title: "Agregados pétreos", spec: "Grava · Arena · Base", img: images.gravel },
    { code: "MP-04", title: "Block y tabique", spec: "Concreto · Hueco · Sólido", img: images.blocks },
  ];

  return (
    <section id="materiales" data-testid="materiales" className="py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-2.5 h-2.5 bg-[#FF3B30]" />
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#4A4A4A]">Catálogo</span>
            </div>
            <h2 className="font-display font-bold uppercase tracking-tighter text-4xl sm:text-5xl lg:text-6xl leading-[0.9]">
              Materiales
            </h2>
          </div>
          <span className="hidden sm:block font-mono-tech text-xs text-[#4A4A4A] tracking-[0.15em] mb-2">
            04 líneas / +200 SKU
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0A0A0A] border border-[#0A0A0A]">
          {products.map((p, i) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.09 }}
              className="group bg-[#F4F4F0] relative overflow-hidden"
              data-testid={`material-${p.code}`}
            >
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#0A0A0A] text-[#F4F4F0] font-mono-tech text-[10px] tracking-[0.2em] px-2.5 py-1">
                  {p.code}
                </div>
              </div>
              <div className="p-6 md:p-7 border-t border-[#0A0A0A] flex items-start justify-between">
                <div>
                  <h3 className="font-display font-semibold uppercase tracking-tight text-xl md:text-2xl leading-none mb-2">
                    {p.title}
                  </h3>
                  <p className="font-mono-tech text-[11px] text-[#4A4A4A] tracking-[0.05em]">{p.spec}</p>
                </div>
                <ArrowUpRight
                  size={22}
                  className="shrink-0 text-[#FF3B30] group-hover:rotate-45 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
