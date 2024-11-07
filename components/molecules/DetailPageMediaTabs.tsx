"use client";
import { Button } from "@nextui-org/button";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Image as IconImage } from "@phosphor-icons/react";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

import { LightLabelWithIcon } from "../atoms/LightLabelWithIcon";
import { VirtualTourIframe } from "../atoms/VirtualTourIframe";

import { YoutubeEmbedVideo } from "./CustomVideoPlayer";
import { ImageWithErrorHandle } from "./ImageWithErrorHandle";
import LightboxGallery from "./LightboxGallery";

const DynamicVenueCard = dynamic(() =>
  import("@/components/molecules/VenueCard").then((mod) => mod.VenueCard),
);
const DynamicVendorCard = dynamic(() =>
  import("@/components/molecules/VendorCard").then((mod) => mod.VendorCard),
);

interface DetailPageMediaTabsProps {
  photos: any[];
  youtube_video_id?: string;
  virtual_tour_url?: string;
  customClasses?: string;
  //
}

export const DetailPageMediaTabs = ({
  photos,
  youtube_video_id,
  virtual_tour_url,
  customClasses,
}: DetailPageMediaTabsProps) => {
  const [selected, setSelected] = useState("photos");

  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null,
  );

  const openImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setCurrentImageIndex(null);
  };

  const goNext = () => {
    if (currentImageIndex !== null) {
      //   setCurrentImageIndex((currentImageIndex + 1) % photos.length);
      if (currentImageIndex < photos.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      } else {
        setCurrentImageIndex(0);
      }
    }
  };

  const goPrev = () => {
    if (currentImageIndex !== null) {
      //   setCurrentImageIndex(
      //     (currentImageIndex - 1 + photos.length) % photos.length
      //   );
      if (currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      } else {
        setCurrentImageIndex(photos.length - 1);
      }
    }
  };
  const tabsClasses = useMemo(
    () =>
      twMerge(
        "bg-white border-b px-0 rounded-t-lg w-full block max-w-screen-2xl mx-auto",
        customClasses,
      ),
    [customClasses],
  );

  return (
    <Tabs
      aria-label="Options"
      className={tabsClasses}
      classNames={{
        tabList: "p-0 flex gap-x-7 w-fit",
        cursor: "w-full h-0.5 bg-primary-600",
        tab: "h-12 min-w-fit p-0",
        tabContent: "min-w-fit p-0",
      }}
      color="primary"
      selectedKey={selected}
      variant="underlined"
      onSelectionChange={(key) => setSelected(`${key}`)}
    >
      <Tab
        key="photos"
        className="p-0 flex"
        title={
          <LightLabelWithIcon
            customClasses="px-0"
            customLabel={
              <span
                className={`text-base font-semibold leading-6 ${selected === "photos" ? "text-primary-700" : "text-secondary-500"}`}
              >
                {`Photos ${photos ? `(${photos.length})` : ""}`}
              </span>
            }
          />
        }
      >
        {/* Photos */}
        <div className="py-7 h-[412px] xl:h-[500px] w-full">
          <div className="relative h-full w-full grid grid-rows-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 md:gap-4">
            {photos &&
              photos.length > 0 &&
              photos.slice(0, 5).map((image, index) => (
                <div
                  key={index}
                  className={`relative ${
                    index === 0
                      ? "col-span-2 row-span-2 lg:col-span-3"
                      : "hidden md:block sm:row-span-1"
                  }`}
                >
                  <ImageWithErrorHandle
                    fill
                    alt={image.alt}
                    className="object-cover w-full h-full cursor-pointer"
                    fallbackSrc="/images/venues/venue1.webp"
                    src={image.src}
                    onClick={() => openImage(index)}
                  />
                </div>
              ))}
            <Button
              className="absolute bottom-4 md:bottom-8 lg:bottom-4 right-4 rounded-lg w-fit bg-white min-w-10 px-2 lg:px-3 border shadow-lg"
              color="default"
              startContent={<IconImage size={18} />}
              variant="flat"
              onClick={() => openImage(0)}
            >
              Show All
            </Button>
          </div>
        </div>
        {/* Lightbox */}

        <LightboxGallery
          closeLightbox={closeLightbox}
          currentImageIndex={currentImageIndex}
          goNext={goNext}
          goPrev={goPrev}
          openImage={openImage}
          photos={photos}
        />
      </Tab>
      {youtube_video_id && (
        <Tab
          key="videos"
          className="p-0 flex"
          title={
            <LightLabelWithIcon
              customClasses="px-0"
              customLabel={
                <span
                  className={`text-base font-semibold leading-6 ${selected === "videos" ? "text-primary-700" : "text-secondary-500"}`}
                >
                  Videos
                </span>
              }
            />
          }
        >
          {/* Videos */}
          <div className="py-7 h-[412px] xl:h-[500px] w-full">
            {/* <CustomVideoPlayer /> */}
            <YoutubeEmbedVideo embedId={youtube_video_id} />
          </div>
        </Tab>
      )}

      {virtual_tour_url && (
        <Tab
          key="360"
          className="p-0 flex"
          title={
            <LightLabelWithIcon
              customClasses="px-0"
              customLabel={
                <span
                  className={`text-base font-semibold leading-6 ${selected === "360" ? "text-primary-700" : "text-secondary-500"}`}
                >
                  360 Video
                </span>
              }
            />
          }
        >
          {/* 360 ideos */}
          <div className="py-7 h-[412px] xl:h-[500px] w-full">
            {/* <CustomVideoPlayer /> */}
            <VirtualTourIframe virtual_tour_url={virtual_tour_url} />
          </div>
        </Tab>
      )}
    </Tabs>
  );
};
