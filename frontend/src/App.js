import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TextMarquee } from "@/components/landing/TextMarquee";
import { Servicios } from "@/components/landing/Servicios";
import { Materiales } from "@/components/landing/Materiales";
import { Stats } from "@/components/landing/Stats";
import { Contacto } from "@/components/landing/Contacto";
import { Footer } from "@/components/landing/Footer";

const IMAGES = {
  rebar: "https://images.unsplash.com/photo-1530863506128-dc9eb5c3e0fc?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  cement: "https://images.unsplash.com/photo-1773394089934-3e29f2a3d6a9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  gravel: "https://images.pexels.com/photos/38862399/pexels-photo-38862399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1400",
  blocks: "https://images.unsplash.com/photo-1565626424178-c699f6601afd?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  site: "https://images.unsplash.com/photo-1787509982284-0672f5a50f50?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <Toaster position="bottom-right" toastOptions={{ style: { borderRadius: 0, border: "1px solid #0A0A0A", fontFamily: "IBM Plex Mono, monospace" } }} />
      <Navbar />
      <main>
        <Hero rebarImg={IMAGES.rebar} />
        <TextMarquee />
        <Servicios />
        <Materiales images={IMAGES} />
        <Stats siteImg={IMAGES.site} />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
