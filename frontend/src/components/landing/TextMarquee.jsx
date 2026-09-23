import Marquee from "react-fast-marquee";

const items = ["DISTRIBUCIÓN AL POR MAYOR", "ACERO", "CEMENTO", "AGREGADOS", "BLOCK", "ENTREGA A GRANEL", "OBRA PESADA"];

export const TextMarquee = () => {
  return (
    <div data-testid="marquee" className="bg-[#FF3B30] border-y border-[#0A0A0A] py-4 md:py-6 select-none">
      <Marquee speed={45} gradient={false} autoFill>
        {items.map((t, i) => (
          <div key={i} className="flex items-center">
            <span className="font-display font-bold uppercase tracking-tight text-[#0A0A0A] text-2xl md:text-4xl px-6 md:px-10">
              {t}
            </span>
            <span className="w-3 h-3 md:w-4 md:h-4 bg-[#0A0A0A] rotate-45" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
