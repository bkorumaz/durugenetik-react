import React, { useState, useEffect, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar({
    darkMode,
    toggleLang,
    toggleDark,
    activeSection,
    onMenuClick,
}) {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = useMemo(
        () => [
            { id: "home", label: t("nav.home") },
            { id: "services", label: t("nav.services") },
            { id: "products", label: t("nav.products") },
            { id: "blog", label: t("nav.blog") },
            { id: "partners", label: t("nav.partners") },
            { id: "aboutus", label: t("nav.aboutus") },
            { id: "approach", label: t("nav.approach") },
            { id: "contact", label: t("nav.contact") },
        ],
        [i18n.language]
    );
    const menuRefs = useRef(menuItems.map(() => React.createRef()));
    const menuContainerRef = useRef();
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

    // FULL DÜZ RENK (asla opacity, blur, overlay, vs yok)
    const base = "fixed top-0 left-0 w-screen z-30 transition-colors";
    const themeBg = darkMode ? "bg-neutral-900" : "bg-white";
    const bgClasses = `${base} ${themeBg}`;

    const switchBtnClass =
        "ml-2 flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 transition hover:shadow-md focus:outline-none";

    const ENTRButton = (code) => (
        <span
            className="flex items-center justify-center w-7 h-7 rounded-full font-semibold text-xs"
            style={{ fontFamily: "inherit" }}
        >
            {code}
        </span>
    );
    const isTR = i18n.language === "tr";
    const switchFlag = isTR ? ENTRButton("EN") : ENTRButton("TR");
    const switchLabel = isTR ? "Switch to English" : "Türkçe'ye geç";

    const [themeSwitching, setThemeSwitching] = useState(false);
    function handleThemeSwitch() {
        setThemeSwitching(true);
        setTimeout(() => setThemeSwitching(false), 350);
        toggleDark();
        setMenuOpen(false);
    }

    function handleLangSwitch() {
        toggleLang();
        setMenuOpen(false);
    }

    const sunIcon = (
        <svg
            className="w-7 h-7 text-gray-700 dark:text-gray-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <circle cx="12" cy="12" r="5" />
            <g>
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

    function handleMenuClick(e, sectionId) {
        e.preventDefault();
        setMenuOpen(false);
        if (onMenuClick) onMenuClick(sectionId);
    }

    // Nav item classes:
    const navItemBase = "relative whitespace-nowrap capitalize px-2 py-1 font-semibold transition-colors";
    const navItemLight = "text-gray-900 hover:text-teal-600";
    const navItemDark = "text-gray-200 hover:text-teal-300";
    const navItemActiveLight = "text-teal-700 font-bold";
    const navItemActiveDark = "text-teal-300 font-bold";

    return (
        <nav className={bgClasses}>
            <div className="max-w-6xl w-full mx-auto px-6 flex justify-between items-center h-16">
                {/* Logo */}
                <span className="font-extrabold text-2xl flex">
                    <span className="text-green-800 dark:text-green-300">Duru</span>
                    <span className="text-teal-500 dark:text-teal-200 ml-1">genetik</span>
                </span>
                {/* Menu + underline */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="relative flex items-center" ref={menuContainerRef}>
                        {menuItems.map(({ id, label }, idx) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                ref={menuRefs.current[idx]}
                                onClick={(e) => handleMenuClick(e, id)}
                                className={
                                    navItemBase +
                                    " " +
                                    (darkMode
                                        ? (activeSection === id
                                            ? navItemActiveDark
                                            : navItemDark)
                                        : (activeSection === id
                                            ? navItemActiveLight
                                            : navItemLight))
                                }
                                style={{ zIndex: 1 }}
                            >
                                <span>{label}</span>
                            </a>
                        ))}
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
                    {/* DIL BUTTON */}
                    <button
                        onClick={handleLangSwitch}
                        className={switchBtnClass}
                        aria-label={switchLabel}
                        title={switchLabel}
                        style={{ minWidth: 36, minHeight: 36 }}
                    >
                        {switchFlag}
                    </button>
                    {/* DARK/LIGHT BUTTON */}
                    <button
                        onClick={handleThemeSwitch}
                        className={switchBtnClass + (themeSwitching ? " animate-[spin_0.35s_linear]" : "")}
                        aria-label="Toggle Theme"
                        style={{ minWidth: 36, minHeight: 36 }}
                    >
                        <span className="block transition-all duration-200 origin-center">
                            {darkMode ? moonIcon : sunIcon}
                        </span>
                    </button>
                </div>
                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                         className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {menuOpen && (
                <div className={`md:hidden w-full ${darkMode ? "bg-neutral-900" : "bg-white"}`}>
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        {menuItems.map(({ id, label }) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                onClick={(e) => handleMenuClick(e, id)}
                                className={
                                    navItemBase +
                                    " " +
                                    (darkMode
                                        ? (activeSection === id
                                            ? navItemActiveDark
                                            : navItemDark)
                                        : (activeSection === id
                                            ? navItemActiveLight
                                            : navItemLight))
                                }
                            >
                                {label}
                            </a>
                        ))}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={handleLangSwitch}
                                className={switchBtnClass}
                                aria-label={switchLabel}
                                title={switchLabel}
                                style={{ minWidth: 36, minHeight: 36 }}
                            >
                                {switchFlag}
                            </button>
                            <button
                                onClick={handleThemeSwitch}
                                className={switchBtnClass + (themeSwitching ? " animate-[spin_0.35s_linear]" : "")}
                                aria-label="Toggle Theme"
                                style={{ minWidth: 36, minHeight: 36 }}
                            >
                                <span className="block transition-all duration-200 origin-center">
                                    {darkMode ? moonIcon : sunIcon}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
