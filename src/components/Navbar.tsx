import { languages, type TRANSLATIONS_TYPE } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";
import LogoImage from "@/images/logo.webp";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export interface NavLink {
  title: string;
  name: string;
  href: string;
}

type NavbarProps = {
  revealNavbar: boolean;
  language: TRANSLATIONS_TYPE;
};

export default function Navbar({ revealNavbar, language }: NavbarProps) {
  const [opacityToDisplay, setOpacityToDisplay] = useState<
    "opacity-100" | "opacity-0"
  >(!revealNavbar ? "opacity-100" : "opacity-0");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getOpacityToDisplay = () => {
    if (!revealNavbar) {
      return "opacity-100";
    }

    if (!window) {
      return "";
    }

    const { scrollY, screenY } = window;

    if (screenY > 500 || scrollY > 500) {
      setOpacityToDisplay("opacity-100");
      return;
    }

    setOpacityToDisplay("opacity-0");
  };

  useEffect(() => {
    if (revealNavbar) {
      getOpacityToDisplay();
      window?.addEventListener("scroll", getOpacityToDisplay);
    }

    return () => {
      if (revealNavbar) {
        // Only remove if it's added while
        window?.removeEventListener("scroll", getOpacityToDisplay);
      }
    };
  }, []);

  useEffect(() => {
    const sectionsToObserve = [
      "history",
      "team",
      "expertise-areas",
      "contacts",
    ];

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;

          document.querySelectorAll("nav a").forEach((navLink) => {
            const navLinkId = navLink.getAttribute("section-name");
            if (navLinkId === id) {
              navLink.classList.add("navlink-active");
            } else {
              navLink.classList.remove("navlink-active");
            }
          });
        }
      });
    }, options);

    sectionsToObserve.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsToObserve.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevValue) => !prevValue);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const translationContent = useTranslations(language);
  const { navlinks } = translationContent;

  return (
    <nav
      className={cn(
        "fixed z-[100] top-0 left-0 w-full bg-white py-2 flex flex-col gap-4 transition-opacity duration-300 ease-in",
        opacityToDisplay,
        `${mobileMenuOpen ? "min-h-screen" : ""}`,
      )}
    >
      <div className="flex justify-between gap-4 items-center">
        <section className="px-8 sm:px-24">
          <a href={`/${language}`}>
            <img
              className="w-[6.25rem] h-[4,875rem]"
              src={LogoImage.src}
              alt="Image do logo de Delfim Maia"
            />
          </a>
        </section>

        <section className="flex-col gap-1 hidden sm:flex">
          <section className="flex gap-8 pr-8 sm:pr-24">
            {navlinks.map(({ title, href, name }) => (
              <a
                className="capitalize font-bold text-sm sm:text-base hover:text-delfim-primary transition-colors"
                section-name={name}
                href={`/${language}${href}`}
                key={name}
              >
                {title}
              </a>
            ))}
          </section>
          <div className="border-b-4 border-navbar-border"></div>
        </section>

        <section className="sm:hidden px-8">
          <Button
            onClick={() => toggleMobileMenu()}
            variant="ghost"
            size="icon"
          >
            {mobileMenuOpen ? (
              <X className="text-delfim-primary h-8 w-8" />
            ) : (
              <Menu className="text-delfim-primary h-8 w-8" />
            )}
          </Button>
        </section>
      </div>

      <section
        className={cn(
          "flex-col gap-4 px-8",
          `${mobileMenuOpen ? "flex" : "hidden sm:hidden"}`,
        )}
      >
        {navlinks.map(({ title, href, name }) => (
          <a
            className="capitalize font-bold text-xl"
            section-name={name}
            href={`/${language}${href}`}
            onClick={() => {
              closeMobileMenu();
            }}
            key={name}
          >
            {title}
          </a>
        ))}

        <ul className="flex sm:hidden gap-2">
          {Object.entries(languages).map(([languageList]) => (
            <li key={languageList}>
              <a
                className={cn(
                  "uppercase font-bold text-xl",
                  `${language === languageList ? "text-delfim-primary " : ""}`,
                )}
                href={`/${languageList}/`}
              >
                {languageList}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
}
