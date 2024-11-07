"use client";

// NextJS

// Components

// Constants
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { useDisclosure } from "@nextui-org/modal";
import { useState } from "react";

import { CustomBreadCrumbs } from "../atoms/CustomBreadcrumbs";
import { DetailPageMediaTabs } from "../molecules/DetailPageMediaTabs";
import Footer from "../molecules/Footer";
import { CommonModal } from "../molecules/CommonModal";
import { VendorPackageDetailInfoTabs } from "../molecules/tabs/VendorPackageDetailInfoTabs";
import { VendorCard } from "../molecules/VendorCard";
import { VendorPackageDetailEnquiryForm } from "../molecules/VendorPackageDetailEnquiryForm";
import { VenueWhatsAppFormModal } from "../molecules/VenueWhatsAppFormModal";

import { DUMMY_VENDORS } from "@/config/constants";

interface VendorPackageDetailLayoutProps {
  params?: any;
  headerFooterRes?: any;
  shouldDetectIP?: boolean;
}

export const VendorPackageDetailLayout = ({
  params,
  headerFooterRes,
  shouldDetectIP,
}: VendorPackageDetailLayoutProps) => {
  // modal
  const vendorPackageDetailEnquiryFormModal = useDisclosure();
  // whatsapp modal
  const whatsAppModal = useDisclosure();

  // is call
  const [isCall, setIsCall] = useState(false);

  return (
    <section className="mt-[81px]">
      <div className="w-full mx-auto px-4 md:px-5 lg:px-12 xl:px-20 py-5">
        <div className="max-w-screen-2xl mx-auto">
          <CustomBreadCrumbs
            items={[
              {
                isIconOnly: true,
                iconSrc: "/images/icons/home.svg",
                isActive: true,
                href: "/",
              },
              {
                isIconOnly: false,
                isActive: false,
                text: "Longtail Page",
                href: "/",
              },
              {
                isIconOnly: false,
                isActive: true,
                text: "Vendor name",
              },
            ]}
          />
          <DetailPageMediaTabs
            customClasses="mt-4"
            photos={[
              { src: "/images/venues/venue1.webp", alt: "Image 1" },
              { src: "/images/venues/venue2.webp", alt: "Image 2" },
              { src: "/images/venues/venue3.webp", alt: "Image 3" },
              { src: "/images/venues/venue4.webp", alt: "Image 4" },
              { src: "/images/venues/venue4.webp", alt: "Image 5" },
            ]}
          />
          <div className="w-full ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <VendorPackageDetailInfoTabs />
              </div>

              {/* Sidebar Section */}
              <div className="hidden lg:block lg:col-span-1 space-y-6 sticky top-[81px] h-fit w-full overflow-y-scroll hide-scrollbar max-h-[90vh]">
                <div className="border rounded-xl p-4">
                  <div className="flex flex-col gap-y-1">
                    <span className="text-secondary-500 text-xs font-medium leading-4">
                      Package Price
                    </span>
                    <p className="text-lg font-semibold leading-7">
                      <span className="text-xl font-bold leading-9">$200</span>{" "}
                      / event
                    </p>
                  </div>
                  <Divider className="my-3" />
                  <p className="text-secondary-500 text-sm font-normal leading-5">
                    min. Capacity <span className="font-semibold">8 pax</span>
                  </p>
                </div>
                <div className="border rounded-xl p-4 shadow-sm">
                  {/* Enquriry Form */}
                  <VendorPackageDetailEnquiryForm
                    handleClickCall={() => {
                      setIsCall(true);
                      whatsAppModal.onOpen();
                    }}
                    handleClickWhatsApp={() => {
                      setIsCall(false);
                      whatsAppModal.onOpen();
                    }}
                  />
                </div>
              </div>
            </div>

            <Divider className="my-6" />
            {/* Other packages */}
            <div>
              <h2 className="text-xl font-semibold leading-8">
                Other packages
              </h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {DUMMY_VENDORS.slice(0, 4).map((vendor, index) => (
                  <VendorCard
                    key={index}
                    {...vendor}
                    showChips
                    showGoogleIcon
                  />
                ))}
              </div>
            </div>

            {/* Enquiry Form Modal */}
            <div className="flex flex-col gap-y-2 w-full lg:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl border p-4">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <span className="text-secondary-500 text-xs font-medium leading-4">
                    Packages Price
                  </span>
                  <p className="text-base font-semibold leading-7">
                    <span className="text-lg font-bold leading-9">$200</span> /
                    event
                  </p>
                </div>
                <div className="flex flex-col gap-y-1">
                  <span className="text-secondary-500 text-xs font-medium leading-4">
                    Min. time
                  </span>
                  <p className="text-base font-semibold leading-7">
                    <span className="text-lg font-bold leading-9 mr-1">8</span>
                    hours
                  </p>
                </div>
              </div>
              <Button
                className="rounded-lg w-full bg-primary-600 min-w-10 py-3 px-4"
                color="primary"
                variant="solid"
                onClick={vendorPackageDetailEnquiryFormModal.onOpen}
              >
                Enquire Now
              </Button>

              {/* Whatsapp Enquiry Modal */}
              <VenueWhatsAppFormModal
                isCall={isCall}
                isOpen={whatsAppModal.isOpen}
                placement={"bottom-center"}
                onOpenChange={whatsAppModal.onOpenChange}
              />

              {/* vendor package detail enquiry form modal */}
              <CommonModal
                isOpen={vendorPackageDetailEnquiryFormModal.isOpen}
                placement={"bottom-center"}
                title="Enquiry Form"
                onOpenChange={vendorPackageDetailEnquiryFormModal.onOpenChange}
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-y-1">
                    <span className="text-secondary-500 text-xs font-medium leading-4">
                      Packages Price
                    </span>
                    <p className="text-base font-semibold leading-7">
                      <span className="text-lg font-bold leading-9">$200</span>{" "}
                      / event
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <span className="text-secondary-500 text-xs font-medium leading-4">
                      Min. time
                    </span>
                    <p className="text-base font-semibold leading-7">
                      <span className="text-lg font-bold leading-9 mr-1">
                        8
                      </span>
                      hours
                    </p>
                  </div>
                </div>
                <Divider className="my-2" />
                <VendorPackageDetailEnquiryForm
                  handleClickCall={() => {
                    setIsCall(true);
                    whatsAppModal.onOpen();
                  }}
                  handleClickWhatsApp={() => {
                    setIsCall(false);
                    whatsAppModal.onOpen();
                  }}
                />
              </CommonModal>
            </div>
          </div>
        </div>
      </div>
      <Divider className="mt-10" />

      {/* Footer  */}
      <div className="w-full mt-10 mx-auto px-5 md:px-5 lg:px-12 xl:px-20 block md:flex items-center justify-between w-full">
        {/* <Footer headerFooterRes={headerFooterRes} /> */}
        <Footer />
      </div>
    </section>
  );
};
