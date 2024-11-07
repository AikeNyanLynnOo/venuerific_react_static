"use client";

// NextJS

// Components

// Constants
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { useDisclosure } from "@nextui-org/modal";
import { useState } from "react";
import { Heart, ShareNetwork, Star } from "@phosphor-icons/react";
import Image from "next/image";

import Footer from "../molecules/Footer";
import { DetailPageMediaTabs } from "../molecules/DetailPageMediaTabs";
import { CustomBreadCrumbs } from "../atoms/CustomBreadcrumbs";
import { LightLabelWithIcon } from "../atoms/LightLabelWithIcon";
import { CommonModal } from "../molecules/CommonModal";
import { VendorCard } from "../molecules/VendorCard";
import { VendorDetailInfoTabs } from "../molecules/VendorDetailInfoTabs";
import { VendorEnquiryForm } from "../molecules/VendorEnquiryForm";
import { VendorEnquiryFormModal } from "../molecules/VendorEnquiryFormModal";

import { DUMMY_INFOS, DUMMY_VENDORS } from "@/config/constants";
import { COLORS } from "@/styles/colors";

interface VendorDetailLayoutProps {
  params?: any;
  headerFooterRes?: any;
  shouldDetectIP?: boolean;
}

export const VendorDetailLayout = ({
  params,
  headerFooterRes,
  shouldDetectIP,
}: VendorDetailLayoutProps) => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  // modal
  const vendorInfoModal = useDisclosure();
  const vendorEnquiryFormModal = useDisclosure();

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
                <VendorDetailInfoTabs />
              </div>

              {/* Sidebar Section */}
              <div className="hidden lg:block lg:col-span-1 space-y-6 sticky top-[81px] h-fit w-full overflow-y-scroll hide-scrollbar max-h-[90vh]">
                <div className="border rounded-xl p-3">
                  <img
                    alt="most_popular"
                    className="h-auto w-full rounded-xl object-cover"
                    src="/images/services/pvm.png"
                  />
                  <div className="flex flex-col gap-y-2 mt-3 w-full">
                    <span className="text-lg font-semibold leading-7 block w-full min-h-[28px] truncate">
                      Private Venue Management (PVM)
                    </span>
                    <span className="text-sm font-normal leading-5 block w-full text-neutral min-h-[20px] truncate">
                      Last active 1 hour ago
                    </span>

                    <LightLabelWithIcon
                      customClasses="flex items-center gap-x-2.5 justify-between p-2 w-fit px-0 py-0 min-h-[20px]"
                      customLabel={
                        <span className="text-sm font-normal leading-5 text-neutral">
                          {`4.6 (${24})`}
                        </span>
                      }
                      startIconNode={
                        <div className="flex gap-x-1">
                          <Image
                            alt="icon"
                            className="h-3 w-3 object-contain"
                            height={12}
                            loading="lazy"
                            src={`/images/icons/google.svg`}
                            width={12}
                          />
                          <Star color="#F8D830" size={14} weight="fill" />
                        </div>
                      }
                    />
                    <Divider className="my-2" />
                    <div className="flex flex-col gap-y-3">
                      {DUMMY_INFOS.map(({ icon, text, link }, index) => (
                        <div key={index} className="flex gap-x-3 items-center">
                          <Image
                            alt="icon"
                            className="h-4 w-4 object-contain"
                            height={16}
                            loading="lazy"
                            src={icon}
                            width={16}
                          />
                          <span>{text}</span>
                          <Image
                            alt="icon"
                            className="h-4 w-4 object-contain cursor-pointer"
                            height={16}
                            loading="lazy"
                            src="/images/icons/eye.png"
                            width={16}
                          />
                        </div>
                      ))}
                    </div>
                    <Divider className="my-1" />
                    <div className="flex justify-between items-center">
                      <LightLabelWithIcon
                        customClasses="flex gap-x-2 items-center w-fit cursor-pointer"
                        customLabel={
                          <span className="text-base font-normal leading-6 text-primary-600">
                            Favourite
                          </span>
                        }
                        startIconNode={
                          <Heart color={COLORS.primary[600]} size={20} />
                        }
                      />
                      <LightLabelWithIcon
                        customClasses="flex gap-x-2 items-center w-fit cursor-pointer"
                        customLabel={
                          <span className="text-base font-normal leading-6 text-primary-600">
                            Share
                          </span>
                        }
                        startIconNode={
                          <ShareNetwork color={COLORS.primary[600]} size={20} />
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="border rounded-xl p-3 shadow-sm">
                  {/* Enquriry Form */}
                  <VendorEnquiryForm />
                </div>
              </div>
            </div>

            <Divider className="my-6" />
            {/* Singapore Vendors You May Like */}
            <div>
              <h2 className="text-xl font-semibold leading-8">
                Singapore Vendors You May Like
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
            <div className="flex gap-x-3 justify-between items-center w-full lg:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl border p-4">
              <Button
                className="rounded-lg w-full min-w-10 py-3 px-4"
                color="default"
                variant="bordered"
                onClick={vendorInfoModal.onOpen}
              >
                Vendor Info
              </Button>
              <Button
                className="rounded-lg w-full bg-primary-600 min-w-10 py-3 px-4"
                color="primary"
                variant="solid"
                onClick={vendorEnquiryFormModal.onOpen}
              >
                Enquire Now
              </Button>

              {/* vendor enquiry form modal */}
              <VendorEnquiryFormModal
                isOpen={vendorEnquiryFormModal.isOpen}
                placement={"bottom-center"}
                onOpenChange={vendorEnquiryFormModal.onOpenChange}
              />

              {/* vendor info modal */}
              <CommonModal
                isOpen={vendorInfoModal.isOpen}
                placement={"bottom-center"}
                title="Vendor Info"
                onOpenChange={vendorInfoModal.onOpenChange}
              >
                <div className="rounded-xl">
                  <img
                    alt="most_popular"
                    className="h-auto w-full rounded-xl object-cover"
                    src="/images/services/pvm.png"
                  />
                  <div className="flex flex-col gap-y-2 mt-4 w-full">
                    <span className="text-lg font-semibold leading-7 block w-full min-h-[28px] truncate">
                      Private Venue Management (PVM)
                    </span>
                    <span className="text-sm font-normal leading-5 block w-full text-neutral min-h-[20px] truncate">
                      Last active 1 hour ago
                    </span>

                    <LightLabelWithIcon
                      customClasses="flex items-center gap-x-2.5 justify-between p-2 w-fit px-0 py-0 min-h-[20px]"
                      customLabel={
                        <span className="text-sm font-normal leading-5 text-neutral">
                          {`4.6 (${24})`}
                        </span>
                      }
                      startIconNode={
                        <div className="flex gap-x-1">
                          <Image
                            alt="icon"
                            className="h-3 w-3 object-contain"
                            height={12}
                            loading="lazy"
                            src={`/images/icons/google.svg`}
                            width={12}
                          />
                          <Star color="#F8D830" size={14} weight="fill" />
                        </div>
                      }
                    />
                    <Divider className="my-2" />
                    <div className="flex flex-col gap-y-3">
                      {DUMMY_INFOS.map(({ icon, text, link }, index) => (
                        <div key={index} className="flex gap-x-3 items-center">
                          <Image
                            alt="icon"
                            className="h-4 w-4 object-contain"
                            height={16}
                            loading="lazy"
                            src={icon}
                            width={16}
                          />
                          <span>{text}</span>
                          <Image
                            alt="icon"
                            className="h-4 w-4 object-contain cursor-pointer"
                            height={16}
                            loading="lazy"
                            src="/images/icons/eye.png"
                            width={16}
                          />
                        </div>
                      ))}
                    </div>
                    <Divider className="my-2" />
                    <div className="flex justify-between items-center">
                      <LightLabelWithIcon
                        customClasses="flex gap-x-2 items-center w-fit cursor-pointer"
                        customLabel={
                          <span className="text-base font-normal leading-6 text-primary-600">
                            Favourite
                          </span>
                        }
                        startIconNode={
                          <Heart color={COLORS.primary[600]} size={20} />
                        }
                      />
                      <LightLabelWithIcon
                        customClasses="flex gap-x-2 items-center w-fit cursor-pointer"
                        customLabel={
                          <span className="text-base font-normal leading-6 text-primary-600">
                            Share
                          </span>
                        }
                        startIconNode={
                          <ShareNetwork color={COLORS.primary[600]} size={20} />
                        }
                      />
                    </div>
                    <Button
                      className="rounded-lg w-full min-w-10 py-3 px-4 mt-2"
                      color="default"
                      variant="bordered"
                      onClick={vendorInfoModal.onClose}
                    >
                      Close
                    </Button>
                  </div>
                </div>
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
