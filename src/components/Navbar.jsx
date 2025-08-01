import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar({
                                   darkMode,
                                   toggleLang,
                                   toggleDark,
                                   activeSection,
                                   onMenuClick,
                               }) {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Menü item’ları ve ref’ler
    const menuItems = [
        { id: "home", label: t("nav.home") },
        { id: "services", label: t("nav.services") },
        { id: "products", label: t("nav.products") },
        { id: "blog", label: t("nav.blog") },
        { id: "partners", label: t("nav.partners") },
        { id: "aboutus", label: t("nav.aboutus") },
        { id: "approach", label: t("nav.approach") },
        { id: "contact", label: t("nav.contact") },
    ];
    const menuRefs = useRef(menuItems.map(() => React.createRef()));
    const menuContainerRef = useRef();

    // Underline pozisyonu
    const [underline, setUnderline] = useState({ left: 0, width: 0 });

    useEffect(() => {
        const idx = menuItems.findIndex((item) => item.id === activeSection);
        const ref = menuRefs.current[idx];
        if (ref?.current && menuContainerRef.current) {
            const span = ref.current.querySelector("span");
            if (span) {
                const spanRect = span.getBoundingClientRect();
                const parentRect = menuContainerRef.current.getBoundingClientRect();
                setUnderline({
                    left: spanRect.left - parentRect.left - 5,
                    width: spanRect.width + 10,
                });
            } else {
                const rect = ref.current.getBoundingClientRect();
                const parentRect = menuContainerRef.current.getBoundingClientRect();
                setUnderline({
                    left: rect.left - parentRect.left - 5,
                    width: rect.width + 10,
                });
            }
        }
    }, [activeSection, menuItems]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const base =
        "fixed top-0 w-full z-30 shadow-md backdrop-blur transition-colors";
    const themeBg = darkMode ? "bg-neutral-900" : "bg-white";
    const opacity = scrolled ? "bg-opacity-70" : "bg-opacity-80";
    const bgClasses = `${base} ${themeBg} ${opacity}`;

    // Yuvarlak bayraklar (flat ve modern)
    const UKFlag = (
        <span className="inline-block w-7 h-7 rounded-full overflow-hidden border border-gray-200 shadow" title="English">
      <svg viewBox="0 0 64 64" className="w-full h-full object-cover">
        <circle cx="32" cy="32" r="32" fill="#012169"/>
        <g>
          <path d="M0 0L64 64M64 0L0 64" stroke="#FFF" strokeWidth="10"/>
          <path d="M0 0L64 64M64 0L0 64" stroke="#C8102E" strokeWidth="6"/>
        </g>
        <rect x="27" width="10" height="64" fill="#FFF"/>
        <rect y="27" width="64" height="10" fill="#FFF"/>
        <rect x="29" width="6" height="64" fill="#C8102E"/>
        <rect y="29" width="64" height="6" fill="#C8102E"/>
      </svg>
    </span>
    );
    const TurkeyFlag = (
        <span className="inline-block w-7 h-7 rounded-full overflow-hidden border border-gray-200 shadow" title="Türkçe">
      <svg viewBox="0 0 64 64" className="w-full h-full object-cover">
        <circle cx="32" cy="32" r="32" fill="#E30A17"/>
        <circle cx="27" cy="32" r="14" fill="#fff"/>
        <circle cx="32" cy="32" r="11" fill="#E30A17"/>
        <circle cx="40" cy="32" r="4" fill="#fff"/>
        <path d="M48 32l5 3-5 3v-6z" fill="#fff"/>
      </svg>
    </span>
    );
    // Geçilecek dili gösteren ikon
    const isTR = i18n.language === "tr";
    const switchFlag = isTR ? UKFlag : TurkeyFlag;
    const switchLabel = isTR ? "Switch to English" : "Türkçe'ye geç";

    // Gelişmiş Dark/Light switch
    const [themeSwitching, setThemeSwitching] = useState(false);

    function handleThemeSwitch() {
        setThemeSwitching(true);
        setTimeout(() => setThemeSwitching(false), 350);
        toggleDark();
    }

    const sunIcon = (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="5" fill="#FFD93A" />
            <g stroke="#FFD93A" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
        </svg>
    );
    const moonIcon = (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <path
                d="M21 12.79A9 9 0 0112.21 3a.75.75 0 00-.91.91A7.5 7.5 0 1012 21a7.53 7.53 0 009-8.21z"
                fill="#F9FAFB"
                stroke="#F9FAFB"
                strokeWidth="1.5"
            />
        </svg>
    );

    const themeBtnBase =
        "ml-2 p-1 rounded-full relative transition hover:shadow-md focus:outline-none " +
        "bg-gray-100/60 dark:bg-neutral-700/80 border border-gray-300 dark:border-gray-600 w-9 h-9 flex items-center justify-center";
    const themeBtnSpin = themeSwitching
        ? "animate-[spin_0.35s_linear]"
        : "";

    function handleMenuClick(e, sectionId) {
        e.preventDefault();
        setMenuOpen(false);
        if (onMenuClick) onMenuClick(sectionId);
    }

    return (
        <nav className={bgClasses}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
                {/* Logo */}
                <span className="font-extrabold text-2xl flex">
          <span className="text-green-800 dark:text-green-300">Duru</span>
          <span className="text-teal-500 dark:text-teal-200 ml-1">genetik</span>
        </span>
                {/* Menü + underline */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* Sadece menü item’larını ve underline’ı saran kapsayıcı */}
                    <div className="relative flex items-center" ref={menuContainerRef}>
                        {menuItems.map(({ id, label }, idx) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                ref={menuRefs.current[idx]}
                                onClick={(e) => handleMenuClick(e, id)}
                                className={
                                    "relative whitespace-nowrap capitalize transition-colors px-2 py-1" +
                                    (activeSection === id
                                        ? " text-teal-600 dark:text-teal-300 font-semibold"
                                        : " hover:text-teal-500 dark:hover:text-teal-300")
                                }
                                style={{ zIndex: 1 }}
                            >
                                <span>{label}</span>
                            </a>
                        ))}
                        {/* Animasyonlu underline */}
                        <div
                            className="absolute bottom-0 left-0 h-[3px] bg-teal-600 dark:bg-teal-300 rounded"
                            style={{
                                width: `${underline.width}px`,
                                transform: `translateX(${underline.left}px)`,
                                zIndex: 0,
                                transition: "all 0.2s cubic-bezier(.4,0,.2,1)",
                                willChange: "width, transform",
                            }}
                        />
                    </div>
                    {/* Dil Butonu (geçilecek dili ve tooltipi gösterir) */}
                    <button
                        onClick={toggleLang}
                        className="ml-4 p-1 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200/60 dark:hover:bg-gray-700/60 transition focus:outline-none w-9 h-9 flex items-center justify-center"
                        aria-label={switchLabel}
                        title={switchLabel}
                        style={{ minWidth: 36, minHeight: 36 }}
                    >
                        {switchFlag}
                    </button>
                    {/* Tema Butonu */}
                    <button
                        onClick={handleThemeSwitch}
                        className={`${themeBtnBase} ${themeBtnSpin}`}
                        aria-label="Toggle Theme"
                        style={{ minWidth: 36, minHeight: 36 }}
                    >
            <span className="block transition-all duration-200 origin-center">
              {darkMode ? moonIcon : sunIcon}
            </span>
                        <span
                            className={
                                "pointer-events-none absolute inset-0 rounded-full opacity-40 " +
                                (darkMode
                                    ? "bg-neutral-600 blur-sm"
                                    : "bg-yellow-100 blur-sm")
                            }
                            style={{ zIndex: -1 }}
                        />
                    </button>
                </div>
                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Menu"
                >
                    {/* Klasik hamburger */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                         className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-700">
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        {menuItems.map(({ id, label }) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                onClick={(e) => handleMenuClick(e, id)}
                                className={
                                    "whitespace-nowrap capitalize transition-colors px-2 py-1" +
                                    (activeSection === id
                                        ? " text-teal-600 dark:text-teal-300 font-semibold underline underline-offset-8"
                                        : " hover:text-teal-500 dark:hover:text-teal-300")
                                }
                            >
                                {label}
                            </a>
                        ))}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={toggleLang}
                                className="p-1 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200/60 dark:hover:bg-gray-700/60 transition focus:outline-none w-9 h-9 flex items-center justify-center"
                                aria-label={switchLabel}
                                title={switchLabel}
                                style={{ minWidth: 36, minHeight: 36 }}
                            >
                                {switchFlag}
                            </button>
                            <button
                                onClick={handleThemeSwitch}
                                className={`${themeBtnBase} ${themeBtnSpin}`}
                                aria-label="Toggle Theme"
                                style={{ minWidth: 36, minHeight: 36 }}
                            >
                <span className="block transition-all duration-200 origin-center">
                  {darkMode ? moonIcon : sunIcon}
                </span>
                                <span
                                    className={
                                        "pointer-events-none absolute inset-0 rounded-full opacity-40 " +
                                        (darkMode
                                            ? "bg-neutral-600 blur-sm"
                                            : "bg-yellow-100 blur-sm")
                                    }
                                    style={{ zIndex: -1 }}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
