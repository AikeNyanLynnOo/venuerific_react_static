import { Skeleton } from "@nextui-org/skeleton";
import Image, { ImageProps } from "next/image";
import { Fragment, useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ImageWithSkeletonProps extends ImageProps {
  fallbackSrc?: string;
}

export const ImageWithSkeleton = ({
  src,
  alt,
  fallbackSrc = "/images/venues/venue1.webp",
  ...props
}: ImageWithSkeletonProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { className, ...imgProps } = props;

  useEffect(() => {
    setIsLoading(true);
    setImgSrc(src);
  }, [src]);

  const imgClasses = useMemo(() => {
    return twMerge(className, `${isLoading ? "hidden" : "inline-block"}`);
  }, [className, isLoading]);

  return (
    <Fragment>
      {isLoading && <Skeleton className={className} />}
      <Image
        {...imgProps}
        alt={alt}
        className={imgClasses}
        placeholder="blur"
        src={imgSrc}
        onError={() => {
          if (!isError) {
            setImgSrc(fallbackSrc); // Switch to fallback image if there's an error
            setIsError(true); // Prevent infinite loops if fallback also errors
          }
        }}
        onLoad={() => setIsLoading(true)}
        blurDataURL={
          props.blurDataURL ||
          "data:image/png;base64,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"
        } // Provide blurDataURL for a blurry placeholder
        onLoadingComplete={() => setIsLoading(false)}
      />
    </Fragment>
  );
};
