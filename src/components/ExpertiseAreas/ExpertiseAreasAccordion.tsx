import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRef } from "react";

interface ExpertiseArea {
  areaPt: string;
  descriptionPt: string;
  areaEn: string;
  descriptionEn: string;
}

interface ExpertiseAreasAccordionProps {
  expertiseAreas: ExpertiseArea[];
  currentLanguage: "pt" | "en";
}

export default function ExpertiseAreasAccordion({
  expertiseAreas,
  currentLanguage,
}: ExpertiseAreasAccordionProps) {
  return (
    <section className="p-4 z-50 w-full sm:w-1/2 sm:self-end">
      <Accordion
        type="single"
        defaultValue="item-0"
        className="w-full flex flex-col gap-1"
      >
        {expertiseAreas?.map(
          ({ areaEn, areaPt, descriptionEn, descriptionPt }, index) => {
            if (currentLanguage === "en") {
              return (
                <ExpertiseAreasAccordionItem
                  key={index}
                  area={areaEn}
                  description={descriptionEn}
                  index={index}
                />
              );
            }
            return (
              <ExpertiseAreasAccordionItem
                key={index}
                area={areaPt}
                description={descriptionPt}
                index={index}
              />
            );
          },
        )}
      </Accordion>
    </section>
  );
}

const ExpertiseAreasAccordionItem = ({
  area,
  description,
  index,
}: {
  area: string;
  description: string;
  index: number;
}) => {
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleClickScroll = () => {
    if (triggerRef.current) {
      const triggerButton = triggerRef.current;

      triggerButton.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <AccordionItem
        className="bg-[rgba(148_12_0_/_75%)] border-none"
        value={`item-${index}`}
      >
        <AccordionTrigger
          ref={triggerRef}
          onClick={handleClickScroll}
          className="font-bold text-lg text-white px-8 drop-shadow-text-outline text-start"
        >
          {area}
        </AccordionTrigger>
        <AccordionContent className="bg-[rgba(192_193_196/_95%)] pt-4 px-4 w-full">
          {description}
        </AccordionContent>
      </AccordionItem>
    </>
  );
};
