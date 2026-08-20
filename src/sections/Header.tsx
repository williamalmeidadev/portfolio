import React, { useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import { useLanguage } from "../hooks/useLanguage";
import { useNavUnderline } from "../hooks/useNavUnderline";
import { useTheme } from "../hooks/useTheme";
import { navLinks } from "../data/navigation";

const Header: React.FC = () => {
  const [overlay, setOverlay] = useState(false);
  const activeId = useActiveSection();
  const { lang, setLang, strings } = useLanguage();
  const { theme, setTheme } = useTheme();

  useBodyScrollLock(overlay);
  useNavUnderline(activeId, lang);

  const toggleLang = () => setLang(lang === "pt-BR" ? "en" : "pt-BR");

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
        <button
          className="nav-toggle"
          type="button"
          aria-label={strings.aria.menuToggle}
          onClick={() => setOverlay(true)}
        >
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
