"use client";

import React from "react";
import { VENUE_VIDEO_DATA } from "@/config/constants/venue-video-constants";
interface VideoCardProps {
  src: string;
  title: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ src, title }) => {
  const youtubeUrl = src.replace("embed", "watch?v");

  return (
    <div className="relative">
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <iframe
          className="w-full h-[180px] md:h-[200px] lg:h-[200px] rounded-lg"
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </a>
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-2 text-primary-600 text-xl font-semibold"
      >
        {title}
      </a>
    </div>
  );
};

const videoCards = VENUE_VIDEO_DATA.map((video, index) => (
  <VideoCard key={index} src={video.src} title={video.title} />
));

const VenueVideoSec: React.FC = () => {
  return (
    <div className="w-full mx-auto px-0 pt-0 md:pt-10 md:px-5 lg:px-12 xl:px-20 py-10">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {videoCards}
        </div>
      </div>
    </div>
  );
};

export default VenueVideoSec;
