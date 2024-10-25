import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ReactElement } from "react";

interface AttributesProps {
  id: number;
  title: string;
  children: ReactElement | string;
}
export function Attributes(props: AttributesProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={`item-${props.id}`}>
        <AccordionTrigger>{props.title}</AccordionTrigger>
        <AccordionContent className="bg-slate-300 flex align-center justify-center">
          {props.children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}