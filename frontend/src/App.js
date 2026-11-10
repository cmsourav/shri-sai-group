import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import "@/App.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Trust from "@/pages/Trust";
import Boutique from "@/pages/Boutique";
import Travels from "@/pages/Travels";
import Tyre from "@/pages/Tyre";
import Contact from "@/pages/Contact";

const useLenis = () => {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
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
};

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname]);
    return null;
};

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sai-neravu-trust" element={<Trust />} />
                <Route path="/kira-boutique" element={<Boutique />} />
                <Route path="/ky-travels" element={<Travels />} />
                <Route path="/shri-sai-tyre" element={<Tyre />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    useLenis();
    return (
        <div className="grain bg-[#050A15] text-[#FAFAFA] min-h-screen">
            <BrowserRouter>
                <ScrollToTop />
                <Nav />
                <AnimatedRoutes />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
