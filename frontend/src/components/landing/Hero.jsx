import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const lines = ["Distribución", "mayorista de", "materiales para", "construcción."];

const lineVariants = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 + i * 0.11 },
  }),
};

export const Hero = ({ rebarImg }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="inicio" ref={ref} data-testid="hero" className="relative min-h-screen pt-24 md:pt-28 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end pb-10">
        {/* Left: headline */}
        <div className="lg:col-span-7 xl:col-span-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex items-center gap-3 mb-6 md:mb-10"
          >
            <span className="w-2.5 h-2.5 bg-[#FF3B30]" />
            <span className="font-mono-tech text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#4A4A4A]">
              S.A. de C.V. — Comercio al por mayor
            </span>
          </motion.div>

          <h1 className="font-display font-bold uppercase tracking-tighter text-[#0A0A0A] text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.83]">
            {lines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  custom={i}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {i === 3 ? (
                    <>
                      <span className="text-[#FF3B30]">const</span>rucción.
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 md:mt-12 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-12"
          >
            <p className="max-w-md text-base md:text-lg text-[#4A4A4A] leading-relaxed">
              Acero, cemento, agregados y materiales base entregados a granel para constructoras,
              distribuidores y obra pesada en todo el país.
            </p>
            <button
              data-testid="hero-cta"
              onClick={() => go("contacto")}
              className="group shrink-0 inline-flex items-center gap-3 bg-[#0A0A0A] text-[#F4F4F0] font-mono-tech text-xs uppercase tracking-[0.15em] px-7 py-4 hover:bg-[#FF3B30] transition-colors duration-300"
            >
              Solicitar cotización
              <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Right: clipped parallax image */}
        <div className="lg:col-span-5 xl:col-span-4">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
            className="relative h-[42vh] lg:h-[64vh] border border-[#0A0A0A] overflow-hidden"
          >
            <motion.img
              src={rebarImg}
              alt="Varilla de acero para construcción"
              style={{ y: imgY, scale: imgScale }}
              className="absolute inset-0 w-full h-[120%] object-cover grayscale contrast-125"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#0A0A0A] text-[#F4F4F0] px-4 py-3 flex items-center justify-between">
              <span className="font-mono-tech text-[10px] tracking-[0.2em] uppercase">Acero estructural</span>
              <span className="font-mono-tech text-[10px] tracking-[0.2em]">Grado 60</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* bottom scroll cue */}
      <motion.button
        onClick={() => go("servicios")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-5 md:left-10 flex items-center gap-2 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#4A4A4A]"
      >
        <ArrowDownRight size={14} className="animate-bounce" />
        Desliza para explorar
      </motion.button>
    </section>
  );
};
