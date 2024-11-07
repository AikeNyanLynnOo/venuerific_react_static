import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import { ReactNode } from "react";

interface CommonModalProps {
  isOpen: boolean;
  placement: any;
  onOpenChange: any;
  title?: string;
  size?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "xs"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full"
    | undefined;
  children?: ReactNode;
}

export const CommonModal = ({
  isOpen,
  placement,
  onOpenChange,
  title,
  size,
  children,
}: CommonModalProps) => {
  return (
    <Modal
      disableAnimation
      classNames={{
        base: "rounded-b-none sm:rounded-lg",
      }}
      isDismissable={false}
      isOpen={isOpen}
      placement={placement}
      size={size || "md"}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col text-xl font-semibold">
              {title || ""}
            </ModalHeader>
            <ModalBody className="p-5 pt-0">{children}</ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
