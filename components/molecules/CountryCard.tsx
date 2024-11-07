"use client";
import { Button } from "@nextui-org/button";
import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";

interface CountryCardProps {
  location?: string;
  image_url?: string;
  link?: string;
}

export const CountryCard = ({
  location,
  image_url,
  link,
}: CountryCardProps) => {
  return (
    <div className="group min-w-[304px] md:min-w-0 lg:border-none lg:hover:shadow-lg">
      <div className="relative">
        <Image
          alt={location || ""}
          className="w-full h-[430px] object-cover h-[260px] z-0"
          height={430}
          src={image_url || ""}
          width={500}
        />
        <div className="flex flex-col gap-y-4 my-4 w-full px-3 absolute z-1 left-0 right-0 bottom-0 text-center">
          <p className="block w-full text-white text-lg font-semibold leading-7">
            {location || ""}
          </p>
          <a href={link || "#"}>
            <Button
              // as={Link}
              className={`flex md:hidden md:group-hover:flex rounded-lg flex w-full h-full bg-primary-700 py-2 text-sm font-semibold leading-5 text-white`}
              endContent={<ArrowRight className="text-white" size={20} />}
              // href={link || "#"}
            >
              Explore Venues
            </Button>
            <span className="sr-only"> Explore about venues</span>
          </a>
        </div>
      </div>
    </div>
  );
};
