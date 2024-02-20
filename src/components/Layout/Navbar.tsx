import { languages, type TRANSLATIONS_TYPE } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";
import LogoImage from "@/images/logo.jpeg";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export interface NavLink {
  title: string;
  name: string;
  href: string;
}

type NavbarProps = {
  language: TRANSLATIONS_TYPE;
};

export default function Navbar({ language }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const originalStyle: string = window.getComputedStyle(
      document.body,
    ).overflow;

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [mobileMenuOpen]);

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
        "sticky z-[100] top-0 left-0 w-full bg-white py-2 flex flex-col gap-4 transition-opacity duration-300 ease-in shadow",
        `${mobileMenuOpen ? "min-h-screen" : ""}`,
      )}
    >
      <div className="flex justify-between gap-4 items-center">
        <section className="px-8 lg:px-24">
          <a href={`/${language}`}>
            <img
              className="aspect-[1600/1341] w-[7rem]"
              src={LogoImage.src}
              alt="Image do logo de Delfim Maia"
            />
          </a>
        </section>

        <section className="flex-col gap-1 hidden lg:flex">
          <section className="flex gap-8 pr-8 lg:pr-24">
            {navlinks.map(({ title, href, name }) => (
              <a
                className=" font-bold text-sm lg:text-base hover:text-delfim-primary transition-colors"
                section-name={name}
                href={`/${language}${href}`}
                key={name}
              >
                {title}
              </a>
            ))}
          </section>
        </section>

        <section className="lg:hidden px-8">
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
          `${mobileMenuOpen ? "flex" : "hidden lg:hidden"}`,
        )}
      >
        {navlinks.map(({ title, href, name }) => (
          <a
            className="font-bold text-xl"
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

        <ul className="flex lg:hidden gap-2">
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
