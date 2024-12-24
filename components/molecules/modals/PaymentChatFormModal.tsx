import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import { ArrowLeft } from "@phosphor-icons/react";
import PaymentChatMobile from "@/components/paymentForm/PaymentChatMobile";
import { Chip } from "@nextui-org/chip";

interface PaymentChatFormModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  chipState: string;
  getChipColor: () =>
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"; 
}

export const PaymentChatFormModal = ({
  isOpen,
  onOpenChange,
  chipState,
  getChipColor,
}: PaymentChatFormModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      scrollBehavior="inside"
      size="full"
      hideCloseButton
      classNames={{
        base: "fixed inset-0 bg-white rounded-none shadow-none",
        backdrop: "bg-black/40",
      }}
    >
      <ModalContent className="w-full h-full max-h-screen max-w-screen overflow-hidden">
        {(onClose) => (
          <>
            <ModalHeader className="flex items-center justify-between px-4 py-2 border-b">
              <div className="flex items-center">
                <div className="flex items-center text-primary-600 font-semibold">
                  <ArrowLeft className="mr-2" size={20} weight="bold" onClick={onClose} />
                </div>
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full flex-shrink-0 mx-4">
                  <img
                    src="/images/white_label/agustine_img.webp"
                    alt="Host Avatar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {/* Details */}
                <div>
                  <p className="text-[16px] font-semibold text-black">
                    Agustine T.
                  </p>
                  <span className="text-green-500 text-[12px] font-semibold">
                    Online
                  </span>
                </div>
              </div>
              {/* Chip */}
              <Chip color={getChipColor()} variant="flat">
                <span className="font-semibold">{chipState}</span>
              </Chip>
            </ModalHeader>

            <ModalBody className="p-0 h-full overflow-auto">
              <PaymentChatMobile />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
