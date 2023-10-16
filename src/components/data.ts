import AMartinsFerreiraImage from "@/assets/images/team/A_Martins_Ferreira.webp";
import AnaFilipaPereiraImage from "@/assets/images/team/Ana_Filipa_Pereira.webp";
import DelfimMaiaImage from "@/assets/images/team/Delfim_Maia.webp";
import LidiaSilvaImage from "@/assets/images/team/Lidia_Silva.webp";
import LilianaMoreiraImage from "@/assets/images/team/Liliana_Moreira.webp";
import MBeatrizPlayoImage from "@/assets/images/team/M_Beatriz_Playo.webp";
import MiguelDelfimMaiaImage from "@/assets/images/team/Miguel_Delfim_Maia.webp";
import NunoSantosImage from "@/assets/images/team/Nuno_Santos.webp";
import OlgaSaraivaLopesImage from "@/assets/images/team/Olga_Saraiva_Lopes.webp";
import RuiMoreiraDaCostaImage from "@/assets/images/team/Rui_Moreira_Da_Costa.webp";
import SilviaAraujoSilvaImage from "@/assets/images/team/Silvia_Araújo_Silva.webp";
import GuilhermeMacedoImage from "@/images/team/Guilherme_Macedo.webp";

export interface TeamMember {
  name: string;
  image: ImageMetadata;
  role: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Delfim Maia",
    image: DelfimMaiaImage,
    role: "Advogado",
  },
  {
    name: "Miguel Delfim Maia",
    image: MiguelDelfimMaiaImage,
    role: "Advogado",
  },
  {
    name: "A.Martins Ferreira",
    image: AMartinsFerreiraImage,
    role: "Advogado",
  },
  {
    name: "M.Beatriz Playo",
    image: MBeatrizPlayoImage,
    role: "Advogada",
  },
  {
    name: "Olga Saraiva Lopes",
    image: OlgaSaraivaLopesImage,
    role: "Advogada",
  },
  {
    name: "Liliana Moreira",
    image: LilianaMoreiraImage,
    role: "Advogada",
  },
  {
    name: "Lidia Silva",
    image: LidiaSilvaImage,
    role: "Advogada",
  },
  {
    name: "Nuno Santos",
    image: NunoSantosImage,
    role: "Advogado",
  },
  {
    name: "Rui Moreira da Costa",
    image: RuiMoreiraDaCostaImage,
    role: "Advogado",
  },
  {
    name: "Ana Filipa Pereira",
    image: AnaFilipaPereiraImage,
    role: "Advogada",
  },
  {
    name: "Silvia Araújo Silva",
    image: SilviaAraujoSilvaImage,
    role: "Solicitadora",
  },
  {
    name: "Guilherme Macedo",
    image: GuilhermeMacedoImage,
    role: "Advogado Estagiário",
  },
];

export interface ExpertiseArea {
  area: string;
  description: string;
}

export const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    area: "Administrativo e Contratação Pública",
    description:
      "O Direito Administrativo e Contratação Pública abrange as regras e regulamentos que governam as ações do setor público e as transações contratuais com entidades governamentais.",
  },
  {
    area: "Civil e Contencioso Civil",
    description:
      "O Direito Administrativo e Contratação Pública abrange as regras e regulamentos que governam as ações do setor público e as transações contratuais com entidades governamentais.",
  },
  {
    area: "Comercial e Societário",
    description:
      "O Direito Administrativo e Contratação Pública abrange as regras e regulamentos que governam as ações do setor público e as transações contratuais com entidades governamentais.",
  },
  {
    area: "Contratos",
    description:
      "O Direito Administrativo e Contratação Pública abrange as regras.",
  },
  {
    area: "Família e Menores",
    description:
      "O Direito Administrativo e Contratação Pública abrange as regras e regulamentos que governam as ações do setor público e as transações contratuais com entidades governamentais.",
  },
  {
    area: "Imobiliário, Construção e Urbanismo",
    description:
      "O Direito Administrativo e Contratação Pública abrange as regras e regulamentos que governam as ações do setor público e as transações contratuais com entidades governamentais.",
  },
  {
    area: "Penal e Contraordenacional",
    description:
      "O Direito Administrativo e Contratação Pública abrange as regras e regulamentos que governam as ações do setor público e as transações contratuais com entidades governamentais.",
  },
  {
    area: "Reestruturação de Empresas e Insolvências",
    description:
      "O Direito Administrativo e Contratação Pública abrange as regras e regulamentos que governam as ações do setor público e as transações contratuais com entidades governamentais.",
  },
  {
    area: "Resolução de litígios",
    description:
      "O Direito Administrativo e Contratação Pública abrange as regras e regulamentos que governam as ações do setor público e as transações contratuais com entidades governamentais.",
  },
  {
    area: "Sucessório, Inventário e partilhas",
    description:
      "O Direito Administrativo e Contratação Pública abrange as regras e regulamentos que governam as ações do setor público e as transações contratuais com entidades governamentais.",
  },
];
