import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";

import { AvailabilityCalendar } from "@/components/calendars/AvailabilityCalendar";

interface CalendarModalProps {
  isOpen: boolean;
  placement: any;
  onOpenChange: any;
  title?: string;
  legend?: any[];
  data?: any[];
  handleCalendar: (start: string, end: string) => void;
  loading?: boolean;
  err?: any;
}

export const CalendarModal = ({
  isOpen,
  placement,
  onOpenChange,
  title,
  legend,
  data,
  handleCalendar,
  loading,
  err,
}: CalendarModalProps) => {
  return (
    <Modal
      disableAnimation
      classNames={{
        base: "rounded-b-none sm:rounded-lg",
        header: "border-b-[1px] border-secondary-200",
      }}
      isDismissable={false}
      isOpen={isOpen}
      placement={placement}
      size="xl"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col text-xl font-semibold">
              {title || "Availability"}
            </ModalHeader>
            <ModalBody className="p-5 pt-0">
              <div className="w-full max-h-[80vh] overflow-y-scroll hide-scrollbar py-5 flex flex-col gap-y-7">
                <AvailabilityCalendar
                  data={data}
                  err={err}
                  handleCalendar={handleCalendar}
                  legend={legend}
                  loading={loading}
                />
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
