import React, { useEffect, useMemo, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { useLanguage } from "../hooks/useLanguage";

const navLinks = [
  { href: "#home", key: "home", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
  ) },
  { href: "#about", key: "about", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
  ) },
  { href: "#experience", key: "experience", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
  ) },
  { href: "#technologies", key: "technologies", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
  ) },
  { href: "#projects", key: "projects", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
  ) },
  { href: "#certificates", key: "certificates", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
  ) },
  { href: "#contact", key: "contact", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
  ) },
];

const Header: React.FC = () => {
  const [overlay, setOverlay] = useState(false);
  const activeId = useActiveSection();
  const { lang, setLang, strings } = useLanguage();
  const initialTheme = useMemo(() => {
    if (typeof window === "undefined") return "dark";
    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }, []);
  const [theme, setTheme] = useState<"light" | "dark">(
    initialTheme === "light" ? "light" : "dark"
  );

  useEffect(() => {
    document.body.style.overflow = overlay ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [overlay]);

  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(".nav-pill");
    if (!nav) return;

    const updateUnderline = () => {
      const links = nav.querySelector<HTMLElement>(".nav-links");
      const underline = nav.querySelector<HTMLElement>(".nav-underline");
      if (!links || !underline) return;
      if (!underline) return;
      const active = links.querySelector<HTMLElement>(".is-active");
      if (!active) {
        underline.style.opacity = "0";
        return;
      }
      const linksRect = links.getBoundingClientRect();
      const linkRect = active.getBoundingClientRect();
      const left = linkRect.left - linksRect.left;
      const lineWidth = Math.round(linkRect.width * 0.7);
      underline.style.width = `${lineWidth}px`;
      const centeredLeft = left + (linkRect.width - lineWidth) / 2;
      underline.style.transform = `translateX(${centeredLeft}px)`;
      underline.style.opacity = "1";
      };

    updateUnderline();

    const handleResize = () => updateUnderline();
    window.addEventListener("resize", handleResize);

    const observer = new ResizeObserver(() => updateUnderline());
    observer.observe(nav);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [activeId, lang]);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleLang = () => {
    setLang(lang === "pt-BR" ? "en" : "pt-BR");
  };

  return (
    <header>
      <nav className="nav-pill">
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className={activeId === link.href.replace("#", "") ? "is-active" : ""}
            >
              {strings.nav[link.key as keyof typeof strings.nav]}
            </a>
          ))}
          <span className="nav-underline" aria-hidden="true" />
        </div>
        <button
          className="lang-toggle"
          type="button"
          aria-label={strings.aria.langToggle}
          onClick={toggleLang}
        >
          {lang === "pt-BR" ? (
            <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
              <rect width="18" height="12" fill="#009739" />
              <polygon points="9,1.2 16.2,6 9,10.8 1.8,6" fill="#FFDF00" />
              <circle cx="9" cy="6" r="2.6" fill="#002776" />
            </svg>
          ) : (
            <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
              <rect width="18" height="12" fill="#012169" />
              <path d="M0 0 L18 12 M18 0 L0 12" stroke="#FFF" strokeWidth="2" />
              <path d="M0 0 L18 12 M18 0 L0 12" stroke="#C8102E" strokeWidth="1" />
              <rect x="7" width="4" height="12" fill="#FFF" />
              <rect y="4" width="18" height="4" fill="#FFF" />
              <rect x="7.5" width="3" height="12" fill="#C8102E" />
              <rect y="4.5" width="18" height="3" fill="#C8102E" />
            </svg>
          )}
        </button>
        <button
          className="theme-toggle"
          type="button"
          aria-label={strings.aria.themeToggle}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
              <path
                d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M19.8 4.2 18 6M6 18l-1.8 1.8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M21.4 14.2A9.2 9.2 0 0 1 9.8 2.6a.9.9 0 0 0-1 .9A9.5 9.5 0 1 0 21.4 15a.9.9 0 0 0 0-.8.9.9 0 0 0-1-.0Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        <button className="nav-toggle" onClick={() => setOverlay(true)}>
          <span className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </nav>
      <div className={`nav-overlay${overlay ? " is-open" : ""}`}>
        <button className="nav-close" onClick={() => setOverlay(false)}>&times;</button>
        <div className="nav-overlay-controls">
          <button
            className="theme-toggle theme-toggle-overlay"
            type="button"
            aria-label={strings.aria.themeToggle}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M19.8 4.2 18 6M6 18l-1.8 1.8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span>{strings.theme.light}</span>
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M21.4 14.2A9.2 9.2 0 0 1 9.8 2.6a.9.9 0 0 0-1 .9A9.5 9.5 0 1 0 21.4 15a.9.9 0 0 0 0-.8.9.9 0 0 0-1-.0Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{strings.theme.dark}</span>
              </>
            )}
          </button>
          <button
            className="lang-toggle lang-toggle-overlay"
            type="button"
            aria-label={strings.aria.langToggle}
            onClick={toggleLang}
          >
            {lang === "pt-BR" ? (
              <>
                <svg width="20" height="14" viewBox="0 0 18 12" aria-hidden="true">
                  <rect width="18" height="12" fill="#009739" />
                  <polygon points="9,1.2 16.2,6 9,10.8 1.8,6" fill="#FFDF00" />
                  <circle cx="9" cy="6" r="2.6" fill="#002776" />
                </svg>
                <span>PT-BR</span>
              </>
            ) : (
              <>
                <svg width="20" height="14" viewBox="0 0 18 12" aria-hidden="true">
                  <rect width="18" height="12" fill="#012169" />
                  <path d="M0 0 L18 12 M18 0 L0 12" stroke="#FFF" strokeWidth="2" />
                  <path d="M0 0 L18 12 M18 0 L0 12" stroke="#C8102E" strokeWidth="1" />
                  <rect x="7" width="4" height="12" fill="#FFF" />
                  <rect y="4" width="18" height="4" fill="#FFF" />
                  <rect x="7.5" width="3" height="12" fill="#C8102E" />
                  <rect y="4.5" width="18" height="3" fill="#C8102E" />
                </svg>
                <span>EN</span>
              </>
            )}
          </button>
        </div>
        <div className="nav-overlay-links">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              onClick={() => setOverlay(false)}
              className={activeId === link.href.replace("#", "") ? "is-active" : ""}
            >
              {link.icon}
              <span>{strings.nav[link.key as keyof typeof strings.nav]}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
