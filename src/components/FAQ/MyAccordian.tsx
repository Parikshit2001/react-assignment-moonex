import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function MyAccordian() {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem className="border-gray-800 px-20 py-1" value="item-1">
          <AccordionTrigger className="text-lg">
            How Do I get a Referral Code?
          </AccordionTrigger>
          <AccordionContent className="text-gray-500 text-lg">
            You Receive your Rewards in ETH once someone makes a transaction
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default MyAccordian;
