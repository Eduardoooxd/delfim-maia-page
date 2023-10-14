import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EXPERTISE_AREAS } from "./data";

export default function ExpertiseAreasAccordion() {
  return (
    <section className="z-50 w-full sm:w-1/2 sm:self-end">
      <Accordion type="single" className="w-full flex flex-col gap-2">
        {EXPERTISE_AREAS.map(({ area, description }, index) => (
          <AccordionItem
            className="bg-[rgba(148_12_0_/_75%)] border-none"
            value={`item-${index}`}
            key={index}
          >
            <AccordionTrigger className="font-bold text-lg text-white px-8 drop-shadow-text-outline">
              {area}
            </AccordionTrigger>
            <AccordionContent className="bg-[rgba(192_193_196/_95%)] pt-4 px-8">
              {description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
