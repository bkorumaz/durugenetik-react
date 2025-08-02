import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Products from "./sections/Products";
import Blog from "./sections/Blog";
import Partners from "./sections/Partners";
import About from "./sections/About";
import Approach from "./sections/Approach";
import Contact from "./sections/Contact";
import "./i18n";
import { useTranslation } from "react-i18next";

const SECTION_IDS = [
    "home",
    "services",
    "products",
    "blog",
    "partners",
    "aboutus",
    "approach",
    "contact",
];

export default function App() {
    // Dark Mode
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            const userPref = localStorage.getItem("theme");
            if (userPref) return userPref === "dark";
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
    });
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);
    const toggleDark = () => setDarkMode((prev) => !prev);

    // Language
    const { i18n } = useTranslation();
    const toggleLang = () => {
        const newLang = i18n.language === "en" ? "tr" : "en";
        i18n.changeLanguage(newLang);
    };

    // Section scroll & highlight
    const [activeSection, setActiveSection] = useState("home");
    const sectionRefs = useRef(
        SECTION_IDS.reduce((acc, id) => {
            acc[id] = React.createRef();
            return acc;
        }, {})
    );

    // Ürünler bölümünü gözlemle ve video kaynağını buna göre ayarla
    const [videoLoaded, setVideoLoaded] = useState(true);
    const [productInView, setProductInView] = useState(false);
    const videoSrc = productInView
        ? "/videos/hero.mp4"
        : "/videos/dna-bg-video2.mp4";
    const poster = productInView
        ? "/images/hero-poster.jpg"
        : "/images/bg-mobile.jpg";
    useEffect(() => {
        setVideoLoaded(false);
    }, [videoSrc]);
    useEffect(() => {
        const ref = sectionRefs.current.products.current;
        if (!ref) return;
        const observer = new IntersectionObserver(
            ([entry]) => setProductInView(entry.intersectionRatio > 0.5),
            { threshold: [0.5] }
        );
        observer.observe(ref);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 65;
            let current = SECTION_IDS[0];
            for (let i = 0; i < SECTION_IDS.length; i++) {
                const ref = sectionRefs.current[SECTION_IDS[i]].current;
                if (ref) {
                    const offsetTop = ref.offsetTop;
                    if (scrollPos >= offsetTop) {
                        current = SECTION_IDS[i];
                    }
                }
            }
            setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenuClick = (sectionId) => {
        const ref = sectionRefs.current[sectionId];
        if (ref?.current) {
            window.scrollTo({
                top:
                    ref.current.getBoundingClientRect().top +
                    window.scrollY - 64,
                behavior: "smooth",
            });
            setActiveSection(sectionId);
        }
    };

    return (
        <div className="min-h-screen text-gray-800 dark:text-gray-200">
            <Navbar
                darkMode={darkMode}
                toggleLang={toggleLang}
                toggleDark={toggleDark}
                activeSection={activeSection}
                onMenuClick={handleMenuClick}
            />
            {/* Video yüklenene kadar poster arka plan */}
            <div
                className="fixed inset-0 w-full h-full -z-20 pointer-events-none select-none bg-black"
                style={{
                    background: `url(${poster}) center center / cover no-repeat`,
                    opacity: videoLoaded ? 0 : 1
                }}
            />
            {/* Background video - sadece src değişiyor, başka hiçbir efekt yok */}
            <video
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
                poster={poster}
                className="fixed inset-0 w-full h-full object-cover -z-10 pointer-events-none select-none bg-black"
                style={{
                    filter: darkMode ? "brightness(0.5)" : "none"
                }}
                key={videoSrc}
                onLoadedData={() => setVideoLoaded(true)}
            >
                <source src={videoSrc} type="video/mp4" />
            </video>

            <main className="relative z-10 pt-16">
                <section id="home" ref={sectionRefs.current.home}>
                    <Hero darkMode={darkMode} />
                </section>
                <section id="services" ref={sectionRefs.current.services}>
                    <Services />
                </section>
                <section id="products" ref={sectionRefs.current.products}>
                    <Products darkMode={darkMode} />
                </section>
                <section id="blog" ref={sectionRefs.current.blog}>
                    <Blog />
                </section>
                <section id="partners" ref={sectionRefs.current.partners}>
                    <Partners />
                </section>
                <section id="aboutus" ref={sectionRefs.current.aboutus}>
                    <About />
                </section>
                <section id="approach" ref={sectionRefs.current.approach}>
                    <Approach />
                </section>
                <section id="contact" ref={sectionRefs.current.contact}>
                    <Contact />
                </section>
            </main>
            <Footer />
        </div>
    );
}
