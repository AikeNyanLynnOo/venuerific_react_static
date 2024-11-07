import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import Image from "next/image";
import { useState } from "react";

import { LightLabelWithIcon } from "@/components/atoms/LightLabelWithIcon";

interface VenueSocialShareModalProps {
  isOpen: boolean;
  placement: any;
  onOpenChange: any;
  photo?: string;
  name?: string;
  link?: string;
  social_share?: any[];
}

export const VenueSocialShareModal = ({
  isOpen,
  placement,
  onOpenChange,
  photo,
  name,
  link,
  social_share,
}: VenueSocialShareModalProps) => {
  const [isCopied, setIsCopied] = useState(false);

  console.log;

  const handleCopyLink = () => {
    if (link) {
      navigator.clipboard.writeText(link).then(() => setIsCopied(true));
    }
  };

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
      size="md"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col text-xl font-semibold">
              Share this venue
            </ModalHeader>
            <ModalBody className="p-5 pt-0">
              <div className="w-full max-h-[80vh] overflow-y-scroll hide-scrollbar py-5 flex flex-col gap-y-7">
                {/* Image and Title */}
                <div className="flex space-x-6">
                  <img
                    alt="Alta Studio"
                    className="w-28 h-24 rounded-lg object-cover"
                    src={photo || ""}
                  />
                  <h2 className="text-lg font-semibold">{name || ""}</h2>
                </div>

                {/* Share via */}
                <div>
                  <p className="text-base font-semibold leading-6">Share via</p>
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    {social_share &&
                      social_share.length > 0 &&
                      social_share.map(
                        (
                          {
                            name,
                            icon,
                            link,
                          }: { name: string; icon: string; link: string },
                          index: number,
                        ) => (
                          <a key={index} href={link}>
                            <LightLabelWithIcon
                              key={index}
                              customClasses="px-0 flex items-center gap-x-2"
                              customLabel={
                                <span className="text-base font-normal leading-6 text-secondary-600">
                                  {name}
                                </span>
                              }
                              startIconNode={
                                <Image
                                  alt="icon"
                                  className="h-[18px] w-[18px] mt-0.5"
                                  height={24}
                                  loading="lazy"
                                  src={icon}
                                  width={24}
                                />
                              }
                            />
                          </a>
                        ),
                      )}
                  </div>
                </div>

                {/* Copy Link */}
                <div>
                  <p className="text-base font-semibold leading-6">Copy link</p>
                  <div className="flex items-center mt-2 border border-gray-300 rounded-lg overflow-hidden">
                    <input
                      readOnly
                      className="flex-grow px-2 py-2 text-gray-600 hover:outline-none focus:outline-none"
                      type="text"
                      value={link}
                    />
                    <button
                      className="bg-secondary-200 hover:bg-secondary-300 px-4 py-2 text-base font-semibold leading-6"
                      onClick={handleCopyLink}
                    >
                      {(isCopied && "Copied") || "Copy"}
                    </button>
                  </div>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
