import { ArrowLeft, ArrowRight, X } from "@phosphor-icons/react";
import React from "react";

type LightboxGalleryProps = {
  currentImageIndex: any;
  photos: any[];
  closeLightbox: () => void;
  goNext: () => void;
  goPrev: () => void;
  openImage: (index: number) => void;
};

const LightboxGallery = ({
  currentImageIndex,
  photos,
  closeLightbox,
  goNext,
  goPrev,
  openImage,
}: LightboxGalleryProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      {currentImageIndex !== null && (
        <div className="fixed inset-0 backdrop-blur-lg bg-black/90 px-4 md:px-5 lg:px-12 xl:px-20 py-5 z-50">
          {/* header */}
          <div>
            <p className="text-white text-lg font-semibold leading-8 w-10/12">
              {photos[currentImageIndex].title || (
                <span className="capitalize">
                  {photos[currentImageIndex].alt}
                </span>
              )}
            </p>
            <span className="text-white mr-4">{`${photos.length} images`}</span>
            <span className="text-white">{`${currentImageIndex + 1} / ${photos.length}`}</span>
          </div>

          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          <button
            className="absolute z-10 left-6 bottom-40 md:top-1/2 md:-translate-y-1/2 text-white text-3xl font-bold rounded-full bg-black p-3 h-fit w-fit"
            onClick={goPrev}
          >
            <ArrowLeft size={24} />
          </button>

          <div className="max-w-3xl 2xl:max-w-screen-2xl max-h-4xl w-full h-3/6 lg:h-4/6 mx-auto absolute top-1/2 lg:top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:-translate-y-1/3 px-4 md:px-5">
            <img
              alt={photos[currentImageIndex].alt}
              className="w-full h-full object-contain block"
              src={photos[currentImageIndex].src}
            />
          </div>

          <button
            className="absolute z-10 right-6 bottom-40 md:top-1/2 md:-translate-y-1/2 text-white text-3xl font-bold rounded-full bg-black p-3 h-fit w-fit"
            onClick={goNext}
          >
            <ArrowRight size={24} />
          </button>

          <div className="flex flex-nowrap gap-3 w-full absolute left-0 px-4 bottom-10 w-full overflow-x-scroll hide-scrollbar text-white">
            {photos.map(({ src, alt }, index) => (
              <button key={index} onClick={() => openImage(index)}>
                <img
                  alt={alt}
                  className={`w-[100px] min-w-[100px] h-[80px] md:w-[200px] md:min-w-[200px] md:h-[120px] inline-block object-cover cursor-pointer ${index === currentImageIndex ? "opacity-100" : "opacity-30"}`}
                  src={src}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LightboxGallery;
