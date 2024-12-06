"use client";

import React from "react";

interface VideoCardProps {
  src: string;
  title: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ src, title }) => (
  <div className="relative">
    <iframe
      className="w-full h-[180px] md:h-[200px] lg:h-[200px] rounded-lg"
      src={src}
      title="Venue Video"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <p className="mt-2 text-primary-600 text-2xl">{title}</p>
  </div>
);

const VenueVideoSec: React.FC = () => {
  const videos = [
    {
      src: "https://www.youtube.com/embed/6BCuE7Hrq7o",
      title: "Ebisuya Hotel",
    },
    {
      src: "https://www.youtube.com/embed/6BCuE7Hrq7o",
      title: "Apiary Coworking Space",
    },
    {
      src: "https://www.youtube.com/embed/6BCuE7Hrq7o",
      title:
        "Samaba Bali Suites & Villa - Royal Samabe Residence and Pearl Chapel",
    },
    {
      src: "https://www.youtube.com/embed/6BCuE7Hrq7o",
      title:
        "Samaba Bali Suites & Villa - Royal Samabe Residence and Pearl Chapel",
    },
    {
      src: "https://www.youtube.com/embed/6BCuE7Hrq7o",
      title:
        "Samaba Bali Suites & Villa - Royal Samabe Residence and Pearl Chapel",
    },
    {
      src: "https://www.youtube.com/embed/6BCuE7Hrq7o",
      title:
        "Samaba Bali Suites & Villa - Royal Samabe Residence and Pearl Chapel",
    },
    {
      src: "https://www.youtube.com/embed/6BCuE7Hrq7o",
      title:
        "Samaba Bali Suites & Villa - Royal Samabe Residence and Pearl Chapel",
    },
    {
      src: "https://www.youtube.com/embed/6BCuE7Hrq7o",
      title:
        "Samaba Bali Suites & Villa - Royal Samabe Residence and Pearl Chapel",
    },
    {
      src: "https://www.youtube.com/embed/6BCuE7Hrq7o",
      title:
        "Samaba Bali Suites & Villa - Royal Samabe Residence and Pearl Chapel",
    },
  ];

  return (
    <div className="w-full mx-auto px-0 pt-0 md:pt-10 md:px-5 lg:px-12 xl:px-20 py-10">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoCard key={index} src={video.src} title={video.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VenueVideoSec;
