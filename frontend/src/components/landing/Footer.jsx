import { Logo } from "./Logo";

export const Footer = () => {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const year = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="bg-[#0A0A0A] text-[#F4F4F0] pt-16 md:pt-24 pb-8">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 pb-16 border-b border-[#F4F4F0]/20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <Logo className="w-11 h-11" light />
              <span className="font-display font-bold text-2xl tracking-tighter">FRAGUA</span>
            </div>
            <p className="text-[#F4F4F0]/50 text-sm max-w-xs leading-relaxed">
              Comercializadora de Servicios y Productos para la Construcción, S.A. de C.V.
              Comercio al por mayor de materiales para la construcción.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-8">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#F4F4F0]/40 mb-5">Navegación</p>
            <ul className="space-y-3">
              {[["Inicio", "inicio"], ["Servicios", "servicios"], ["Materiales", "materiales"], ["Contacto", "contacto"]].map(([l, id]) => (
                <li key={id}>
                  <button onClick={() => go(id)} className="text-sm hover:text-[#FF3B30] transition-colors duration-200">{l}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#F4F4F0]/40 mb-5">Contacto</p>
            <ul className="space-y-3 text-sm text-[#F4F4F0]/70">
              <li>+52 (55) 4000 1200</li>
              <li>ventas@fragua.mx</li>
              <li>Tlalnepantla, EdoMex</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.15em] text-[#F4F4F0]/40">
            © {year} FRAGUA — Todos los derechos reservados
          </p>
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.15em] text-[#F4F4F0]/40">
            RFC · CSP-240101-XXX
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 md:px-10 mt-12">
        <h3 className="font-display font-bold uppercase tracking-tighter text-[15vw] leading-[0.8] text-transparent" style={{ WebkitTextStroke: "1.5px rgba(244,244,240,0.14)" }}>
          FRAGUA
        </h3>
      </div>
    </footer>
  );
};
