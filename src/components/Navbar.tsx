import LogoImage from "@/images/logo.webp";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navlinks: {
  title: string;
  name: string;
  href: string;
}[] = [
  {
    title: "Quem Somos",
    name: "history",
    href: "/#history",
  },
  {
    title: "Equipa",
    name: "team",
    href: "/#team",
  },
  {
    title: "Áreas de atuação",
    name: "expertise-areas",
    href: "/#expertise-areas",
  },
  {
    title: "Contactos",
    name: "contacts",
    href: "/#contacts",
  },
];

type NavbarProps = {
  revealNavbar: boolean;
};

export default function Navbar({ revealNavbar }: NavbarProps) {
  const [opacityToDisplay, setOpacityToDisplay] = useState<
    "opacity-100" | "opacity-0"
  >(!revealNavbar ? "opacity-100" : "opacity-0");

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

  return (
    <nav
      className={cn(
        "fixed z-[100] top-0 left-0 w-full bg-white py-2 flex justify-between gap-4 items-center transition-opacity duration-300 ease-in",
        opacityToDisplay,
      )}
    >
      <section className="px-8 sm:px-24">
        <a href="/">
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
              href={href}
              key={name}
            >
              {title}
            </a>
          ))}
        </section>
        <div className="border-b-4 border-navbar-border"></div>
      </section>
    </nav>
  );
}
