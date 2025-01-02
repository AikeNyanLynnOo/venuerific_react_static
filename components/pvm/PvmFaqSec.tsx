"use client";

import { CustomAccordionItem } from "@/components/atoms/CustomAccordionItem";

const faqItems = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time through your account settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. If canceled, you will still have access to your account until the end of the billing cycle.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, additional information like a PO number or specific billing address can be added during checkout.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is done monthly or annually, depending on your subscription choice. You can view detailed invoices in your account.",
  },
  {
    question: "How much does event space rental in Singapore cost?",
    answer:
      "The cost varies depending on the location, size, and amenities of the event space. Visit our pricing page for more details.",
  },
];

const PvmFaqSec = () => {
  return (
    <div className="mt-6 w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-10">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <h2 className="text-primary-700 text-4xl font-bold mb-16 text-left">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 px-0">
          {faqItems.map((faq, index) => (
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

export default PvmFaqSec;
