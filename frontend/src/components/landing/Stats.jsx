import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "24", suffix: "AÑOS", label: "abasteciendo obra" },
  { value: "+850", suffix: "K TON", label: "entregadas al año" },
  { value: "32", suffix: "EST.", label: "cobertura nacional" },
  { value: "99.4", suffix: "%", label: "entregas a tiempo" },
];

export const Stats = ({ siteImg }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} data-testid="stats" className="relative overflow-hidden bg-[#E8E8E4] border-y border-[#0A0A0A]">
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12">
        {/* image */}
        <div className="lg:col-span-5 relative h-72 lg:h-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-[#0A0A0A]">
          <motion.img
            src={siteImg}
            alt="Sitio de construcción industrial"
            style={{ y }}
            className="absolute inset-0 w-full h-[130%] object-cover grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/10" />
          <div className="absolute bottom-5 left-5 font-mono-tech text-[10px] tracking-[0.2em] uppercase text-[#F4F4F0] bg-[#0A0A0A] px-3 py-1.5">
            Logística activa
          </div>
        </div>

        {/* stats */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-px bg-[#0A0A0A]/15">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#E8E8E4] p-8 md:p-12 flex flex-col justify-center min-h-[160px] md:min-h-[220px]"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-none">
                  {s.value}
                </span>
                <span className="font-mono-tech text-xs md:text-sm text-[#FF3B30] tracking-[0.1em]">{s.suffix}</span>
              </div>
              <span className="font-mono-tech text-[11px] md:text-xs uppercase tracking-[0.15em] text-[#4A4A4A] mt-3">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
