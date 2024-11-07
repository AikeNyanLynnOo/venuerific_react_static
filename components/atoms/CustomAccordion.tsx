import { Divider } from "@nextui-org/divider";

import { CustomAccordionItem } from "./CustomAccordionItem";

interface CustomAccordionProps {
  faqs: any;
}
export const CustomAccordion = ({ faqs }: CustomAccordionProps) => {
  const faqsArr = Object.entries(faqs).map(([key, value]: any) => ({
    title: key,
    subItems: value.map((item: any) => ({
      question: item.question,
      answer: item.answer,
    })),
  }));

  return (
    <div className="flex flex-col gap-y-4">
      {faqsArr.map(({ title, subItems }, index) => (
        <CustomAccordionItem key={index} showBorder showDivider title={title}>
          {
            subItems && subItems.length > 0 && (
              <div className="flex flex-col gap-y-4">
                {subItems.map((subItem: any, index: number) => (
                  <CustomAccordionItem key={index} title={subItem.question}>
                    <p className="text-base font-normal leading-6 text-secondary-600 pb-5">
                      {subItem.answer}
                    </p>
                    {index !== subItems.length - 1 && <Divider />}
                  </CustomAccordionItem>
                ))}
              </div>
            )
            //  || (
            //   <p className="text-base font-normal leading-6 text-secondary-600">
            //     {text}
            //   </p>
            // )
          }
        </CustomAccordionItem>
      ))}
    </div>
  );
};
