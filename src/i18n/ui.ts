import type { NavLink } from "@/components/Navbar";

export const languages = {
  pt: "Português",
  en: "English",
};

export const defaultLang = "pt";
export type TRANSLATIONS_TYPE = keyof typeof translations;

interface translations_content {
  navlinks: NavLink[];
  history: {
    title: string;
    subTitle: string;
    historyText: string[];
  };
  team: {
    title: string;
  };
  expertiseAreas: {
    title: string;
  };
  contacts: {
    title: string;
    telephone: {
      title: string;
      information: string;
    };
    address: {
      title: string;
    };
  };
  footer: {
    title: string;
    copyrightText: string;
    terms: {
      title: string;
      href: string;
    };
    policies: {
      title: string;
      href: string;
    };
  };
}

interface translations_interface {
  en: translations_content;
  pt: translations_content;
}

export const translations: translations_interface = {
  en: {
    navlinks: [
      {
        title: "About us",
        name: "history",
        href: "#history",
      },
      {
        title: "Team",
        name: "team",
        href: "#team",
      },
      {
        title: "Areas of Practice",
        name: "expertise-areas",
        href: "#expertise-areas",
      },
      {
        title: "Contacts",
        name: "contacts",
        href: "#contacts",
      },
    ],
    history: {
      title: "About Us",
      subTitle: "Our History",
      historyText: [
        "With more than 40 years of history, we are proud to be a modern law firm, able to respond to the most diverse requests that come our way.",
        "Founded in 1980 by Dr J. Delfim Maia, a lawyer who has always been characterised by his combative nature, seriousness, knowledge and technical competence, the then small firm has grown little by little over time, in line with the needs and challenges that our clients have placed before us..",
        "We are made up of a multi-faceted team with vast professional experience in the various areas of law, made up of lawyers from various generations and a solicitor, who, in addition to a solid academic background, all share our own philosophy of ethical rigour, loyalty and team spirit.",
        "The guiding values of our daily activity, in order to prevent or solve problems for our clients, are professional independence, integrity, quality of service, technical competence, combativeness, audacity and dedication.",
        "Realising that we can't master every area, we are committed to complementarity and have developed a number of partnerships that have enabled us to provide a cohesive and coordinated response, with specialists we trust, who share the same work values.",
        "The spirit of teamwork and collaboration that unites us also allows for the exchange of experiences and debate that are essential for us to seek the best response to the requests we receive on a daily basis.",
      ],
    },
    team: {
      title: "Team",
    },
    expertiseAreas: {
      title: "Areas of Practice",
    },
    contacts: {
      title: "Contacts",
      telephone: {
        title: "Telephone",
        information: "(call to national landline network)",
      },
      address: {
        title: "Address",
      },
    },
    footer: {
      title: "Quick Menu",
      copyrightText: "Developed by ComunicaAÇÃO",
      terms: {
        title: "Terms and conditions",
        href: "terms-conditions",
      },
      policies: {
        title: "Policies",
        href: "policies",
      },
    },
  },
  pt: {
    navlinks: [
      {
        title: "Quem Somos",
        name: "history",
        href: "#history",
      },
      {
        title: "Equipa",
        name: "team",
        href: "#team",
      },
      {
        title: "Áreas de atuação",
        name: "expertise-areas",
        href: "#expertise-areas",
      },
      {
        title: "Contactos",
        name: "contacts",
        href: "#contacts",
      },
    ],
    history: {
      title: "Quem Somos",
      subTitle: "A nossa História",
      historyText: [
        "Com mais de 40 anos de história, orgulhamo-nos por ser um escritório moderno e apto para dar resposta às mais diversas solicitações que nos são dirigidas.",
        "Fundados em 1980 pelo Dr. J. Delfim Maia, advogado que sempre se caracterizou pelo seu caracter combativo, pela seriedade, conhecimento e competência técnica, o então pequeno escritório foi crescendo aos poucos, com o decorrer dos tempos, e de acordo com as necessidades e desafios que nos iam sendo colocados pelos clientes.",
        "Somos constituídos por uma equipa multifacetada e com vasta experiência profissional nas diversas áreas do Direito, formada por advogados de várias gerações e uma solicitadora, que, para além, de uma sólida formação académica, comungamos todos de uma filosofia muito própria de rigor deontológico, lealdade e de espírito de equipa.",
        "Os valores norteadores da nossa atividade diária, no sentido de prevenir ou resolver problemas aos nossos clientes, são a independência profissional, a integridade, a qualidade do serviço, a competência técnica, a combatividade, a audácia e a dedicação.",
        "Cientes de que não podemos dominar todas as áreas, apostamos na complementaridade, desenvolvendo algumas parcerias que nos têm permitido dar uma resposta coesa e articulada, com especialistas da nossa confiança, que partilhamdos mesmos valores de trabalho.",
        "O espírito de equipa e de colaboração que nos une, permite ainda a troca de experiências e o debate indispensáveis a que, diariamente, busquemos a melhor resposta às solicitações que nos são dirigidas.",
      ],
    },
    team: {
      title: "Equipa",
    },
    expertiseAreas: {
      title: "Áreas de atuação",
    },
    contacts: {
      title: "Contactos",
      telephone: {
        title: "Tel",
        information: "(chamada para a rede fixa nacional)",
      },
      address: {
        title: "Morada",
      },
    },
    footer: {
      title: "Menu Rápido",
      copyrightText: "Desenvolvido por ComunicAÇÃO",
      terms: {
        title: "Termos e Condições",
        href: "terms-conditions",
      },
      policies: {
        title: "Politicas",
        href: "policies",
      },
    },
  },
};
