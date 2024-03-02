import type { NavLink } from "@/components/Layout/Navbar";

export const languages = {
  pt: "Português",
  en: "English",
};

export const defaultLang = "pt";
export type TRANSLATIONS_TYPE = keyof typeof translations;

interface translations_content {
  navlinks: NavLink[];
  aboutUs: {
    title: string;
    valuesTitle: string;
    activityTitle: string;
    historyText: string[];
    valuesText: string[];
    activityText: string[];
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
  teamMemberPage: {
    emailText: string;
    professionalLicense: string;
    education: string;
    areasOfPractice: string;
    goBackText: string;
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
    aboutUs: {
      title: "About Us",
      historyText: [
        "With more than 40 years of history, we are proud to be a modern law firm capable of to respond to the most diverse requests that come our way.",
        "Founded in 1980 by Dr J. Delfim Maia, a lawyer who has always been characterised by his combative nature, seriousness, knowledge and technical competence, the then small firm has grown little by little over the years, and in accordance according to the needs and challenges posed to us by our clients.",
        "We are a team of multi-faceted lawyers with vast professional experience in the various areas of law. We are made up of lawyers from various generations with a solid academic background, who share our own philosophy of rigour, loyalty and team spirit.",
      ],
      valuesTitle: "Our Values",
      valuesText: [
        "The guiding values of our daily activity, in order to prevent or solve problems for our clients are professional independence, integrity, quality integrity, quality, technical competence, combativeness, audacity and dedication.",
      ],
      activityTitle: "Our Activity",
      activityText: [
        "Our activity is centred on litigation in court, where we have decades of accumulated experience, together with direct counselling of clients, both individuals and companies, whose contact and knowledge allows us to focus on  prevention, conciliation and counselling prior to business and strategic decisions with repercussions on property, business or personal life.",
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
    teamMemberPage: {
      emailText: "Email",
      professionalLicense: "Professional License",
      education: "Education",
      areasOfPractice: "Preferred Areas of Practice",
      goBackText: "Go Back",
    },
  },
  pt: {
    navlinks: [
      {
        title: "Sobre nós",
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
    aboutUs: {
      title: "Sobre nós",
      historyText: [
        "Com mais de 40 anos de história, orgulhamo-nos por ser um escritório moderno e apto para dar resposta às mais diversas solicitações que nos são dirigidas.",
        "Fundados em 1980 pelo Dr. J. Delfim Maia, advogado que sempre se caracterizou pelo seu caracter combativo, pela seriedade, conhecimento e competência técnica, o então pequeno escritório foi crescendo aos poucos, com o decorrer dos tempos, e de acordo com as necessidades e desafios que nos iam sendo colocados pelos clientes.",
        "Somos constituídos por uma equipa multifacetada e com vasta experiência profissional nas diversas áreas do Direito, formada por advogados de várias gerações com uma sólida formação académica, comungando de uma filosofia muito própria de rigor deontológico, lealdade e de espírito de equipa.",
      ],
      valuesTitle: "Os nossos Valores",
      valuesText: [
        "Os valores norteadores da nossa atividade diária, no sentido de prevenir ou resolver problemas aos nossos clientes, são a independência profissional, a integridade, a qualidade do serviço, a competência técnica, a combatividade, a audácia e a dedicação.",
      ],
      activityTitle: "A nossa Atividade",
      activityText: [
        "A nossa atividade centra-se na litigância em tribunal, onde temos experiência acumulada de décadas, a par do aconselhamento direto aos clientes, individuais e empresas, cujo contacto e conhecimento nos permite apostar na prevenção de litígios, na conciliação e no aconselhamento prévio a negócios e a decisões de estratégia com repercussões de índole patrimonial, comercial ou pessoal.",
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
        title: "Políticas",
        href: "policies",
      },
    },
    teamMemberPage: {
      emailText: "Email",
      professionalLicense: "Cédula",
      education: "Formação",
      areasOfPractice: "Áreas preferenciais",
      goBackText: "Voltar",
    },
  },
};
