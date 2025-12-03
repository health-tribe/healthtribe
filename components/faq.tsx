import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { faqs } from "@/lib/data";


export default function FAQ() {
  return (
    <section className="w-full bg-[#e8f0f8] py-16 px-4 md:px-6">
      <div className="mx-auto w-full max-w-3xl">
        
        {/* Header */}
        <header id="faq" className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Have questions? We&apos;ve got you covered with answers from our experts.
          </p>
        </header>

        {/* Accordion List */}
        <Accordion type="single" collapsible defaultValue="item-1" className="space-y-2">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.value}
              value={faq.value}
              className="border-b-2 border-green-800/20 last:border-b-0"
            >
              <AccordionTrigger 
                className="
                  text-left text-lg font-semibold text-gray-800 
                  hover:bg-green-50/50 hover:no-underline 
                  py-5 pr-4
                  transition-colors duration-200
                  [&>svg]:text-green-700 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:transition-transform [&>svg]:duration-300
                "
              >
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-base text-gray-600 leading-relaxed">
                <div className="pb-4 pt-2">
                    {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Call to Action Footer */}
        <div className="mt-16 flex flex-col items-center text-center">
          <h3 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Still In Trouble?
          </h3>

          <p className="mb-8 text-base text-gray-600 sm:text-lg">
            We are here to help
          </p>

          <Link href="/contact" passHref>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-green-400 bg-transparent px-8 py-6 text-lg font-medium text-green-600 hover:bg-green-50 hover:text-green-700 transition-all duration-300"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
