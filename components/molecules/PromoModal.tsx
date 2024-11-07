import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";

import { PromoCodeCard } from "../atoms/PromoCodeCard";

interface PromoModalProps {
  isOpen: boolean;
  placement: any;
  onOpenChange: any;
  promotion: any[];
}

// const PROMO_CODES = [
//   {
//     name: "Jewel Event Promo",
//     value: "716",
//     valid_until: "Valid til 31 Dec 2024",
//     description:
//       "ENJOY UP TO 55% OF SELECTED EVENT VENUES AT JEWEL CHANGI AIRPORT.",
//     code: "JEWELEVENTS",
//     terms_and_conditions: "asdf",
//   },
//   {
//     name: "Jewel Event Promo",
//     value: "716",
//     valid_until: "Valid til 31 Dec 2024",
//     description:
//       "ENJOY UP TO 55% OF SELECTED EVENT VENUES AT JEWEL CHANGI AIRPORT.",
//     code: "JEWELEVENTS",
//     terms_and_conditions: "asdf",
//   },
// ];

export const PromoModal = ({
  isOpen,
  placement,
  onOpenChange,
  promotion,
}: PromoModalProps) => {
  return (
    <Modal
      disableAnimation
      classNames={{
        base: "rounded-b-none sm:rounded-lg",
      }}
      isDismissable={false}
      isOpen={isOpen}
      placement={placement}
      size="lg"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-base font-bold leading-6">
              Promo Available
            </ModalHeader>
            <ModalBody className="p-5 pt-0">
              <div className="flex flex-col gap-y-3">
                {promotion &&
                  promotion.length > 0 &&
                  promotion.map((promo, index) => (
                    <PromoCodeCard {...promo} key={index} />
                  ))}
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
