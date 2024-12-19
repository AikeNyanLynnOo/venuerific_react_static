import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import WhiteLabelSchedule from "../../whiteLabel/WhiteLabelSchedule";
import { CaretDown } from "@phosphor-icons/react";

interface ScheduleModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ScheduleModal = ({ isOpen, onOpenChange }: ScheduleModalProps) => {
  const handleCloseModal = () => onOpenChange(false);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="bottom-center"
      scrollBehavior="inside"
      size="md"
      hideCloseButton
      classNames={{
        base: "rounded-t-lg rounded-b-none shadow-lg",
        backdrop: "bg-black/40",
      }}
    >
      <ModalContent className="max-h-[calc(100%-4rem)]">
        {(onClose) => (
          <>
            <ModalHeader className="flex items-center justify-between px-4 py-2 ">
              <span className="text-primary-600 font-semibold text-[16px]">
                Contact and Schedule
              </span>
              <CaretDown
                size={20}
                className="text-primary-600 cursor-pointer"
                onClick={handleCloseModal}
              />
            </ModalHeader>

            <ModalBody className="p-4">
              <WhiteLabelSchedule />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
