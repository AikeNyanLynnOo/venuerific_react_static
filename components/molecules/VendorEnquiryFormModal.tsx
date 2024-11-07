import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";

import { VendorEnquiryForm } from "./VendorEnquiryForm";

interface VendorEnquiryFormModalProps {
  isOpen: boolean;
  placement: any;
  onOpenChange: any;
}

export const VendorEnquiryFormModal = ({
  isOpen,
  placement,
  onOpenChange,
}: VendorEnquiryFormModalProps) => {
  return (
    <Modal
      disableAnimation
      classNames={{
        base: "rounded-b-none sm:rounded-lg",
      }}
      isDismissable={false}
      isOpen={isOpen}
      placement={placement}
      size="2xl"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col text-xl font-semibold">
              Enquiry Form
            </ModalHeader>
            <ModalBody className="p-5 pt-0 max-h-[95vh] overflow-y-scroll hide-scrollbar">
              <VendorEnquiryForm />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
