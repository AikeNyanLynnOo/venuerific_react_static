"use client";

import { CustomAccordionItem } from "@/components/atoms/CustomAccordionItem";
import { FAQ_ITEMS } from "@/config/constants/super-venue-constants";

const SuperVenueFaqSec = () => {
  return (
    <div className="mt-6 w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-10">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <h2 className="text-primary-700 text-4xl font-bold mb-16 text-left">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 px-0">
          {FAQ_ITEMS.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 last:border-b-0 pb-10 mb-5"
            >
              <CustomAccordionItem
                title={faq.question}
                showBorder={false}
                showDivider={false}
              >
                <p className="text-secondary-600 text-base pt-1">
                  {faq.answer}
                </p>
              </CustomAccordionItem>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuperVenueFaqSec;
