import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import WhiteLabelSchedule from "../../whiteLabel/WhiteLabelSchedule";

interface ScheduleModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ScheduleModal = ({ isOpen, onOpenChange }: ScheduleModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      scrollBehavior="inside"
      size="lg"
      classNames={{
        base: "rounded-b-none sm:rounded-lg",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-lg font-semibold">
              Contact and Schedule
            </ModalHeader>
            <ModalBody>
              <WhiteLabelSchedule />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
