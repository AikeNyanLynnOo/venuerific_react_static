import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import { Switch } from "@nextui-org/switch";
import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicMuiAuto = dynamic(() =>
  import("@/components/molecules/MuiAuto").then((module) => module.MuiAuto),
);

import { useParams, useRouter } from "next/navigation";

interface VendorSearchModalProps {
  isOpen: boolean;
  placement: any;
  onOpenChange: any;
}

export const VendorSearchModal = ({
  isOpen,
  placement,
  onOpenChange,
}: VendorSearchModalProps) => {
  const params = useParams();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [venueType, setVenueType] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [deals, setDeals] = useState(false);

  const [isError, setIsError] = useState(false);

  const handleLocationChange = (e: any, v: any) => {
    if (v && v.name) {
      setSearchLocation(v.name);

      return;
    }
    setSearchLocation(v || "");
  };

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
              More Filters
            </ModalHeader>
            <ModalBody className="p-5 pt-0">
              <div className="w-full max-h-[80vh] overflow-y-scroll hide-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 w-full">
                  <div className="w-full col-span-2">
                    <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
                      Venue Type
                    </span>
                    <DynamicMuiAuto
                      handleChange={() => {}}
                      options={[]}
                      placeholder="Find Services"
                      startIconSrc="/images/icons/search.svg"
                      value={venueType}
                    />
                  </div>
                  <div className="w-full col-span-2">
                    <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
                      Location
                    </span>

                    <DynamicMuiAuto
                      handleChange={handleLocationChange}
                      options={[]}
                      placeholder="Area City"
                      value={searchLocation}
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1 flex items-center gap-4">
                    <Switch
                      color="primary"
                      isSelected={deals}
                      size="sm"
                      onValueChange={setDeals}
                    >
                      <span className="text-secondary-700 text-sm font-medium leading-5">
                        Venue With Packages
                      </span>
                    </Switch>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-x-2">
                  <Button
                    className="flex-1 md:flex-none"
                    color="default"
                    radius="sm"
                    variant="bordered"
                    onClick={() => {}}
                  >
                    Clear
                  </Button>
                  <Button
                    className="rounded-lg flex-1 md:w-full bg-primary-600 min-w-10 px-3"
                    color="primary"
                    variant="solid"
                    onClick={() => {}}
                  >
                    Show Vendors
                  </Button>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
