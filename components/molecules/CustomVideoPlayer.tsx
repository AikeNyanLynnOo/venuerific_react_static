import { Pause } from "@phosphor-icons/react";
import React, { useRef, useState } from "react";

export const CustomVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const progressValue =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;

      setProgress(progressValue);
    }
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        loop
        aria-hidden="true"
        className="w-full h-full object-cover"
        src="https://www.youtube.com/watch?v=8N2B-gbLejc"
        onClick={handlePlayPause}
        onTimeUpdate={handleProgress}
      >
        <track
          // src="/captions/mov_bbb_captions.vtt" // Update this path with the actual location of your captions file
          default
          kind="captions"
          label="English"
          srcLang="en"
        />
        Your browser does not support the video tag.
      </video>

      {/* Play button at the center */}
      {!isPlaying && (
        <button
          className="absolute inset-0 m-auto w-16 h-16 bg-white bg-opacity-80 rounded-full flex justify-center items-center cursor-pointer"
          onClick={handlePlayPause}
        >
          <svg
            className="w-10 h-10 text-gray-800"
            fill="currentColor"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.804 8L6.533 10.567c-.48.288-1.08-.086-1.08-.696V6.129c0-.61.6-.985 1.08-.696L10.804 8z" />
          </svg>
        </button>
      )}

      <div className="absolute bottom-3 w-full flex gap-x-3 items-center pr-6">
        {/* Pause button at the left/bottom */}
        {(isPlaying && (
          <button
            className="h-3 w-3 flex justify-center ml-3 items-center cursor-pointer"
            onClick={handlePause}
          >
            <Pause color="#FFFFFF" size={24} weight="fill" />
          </button>
        )) || <span className="w-3 h-3" />}
        {/* Progress Bar at the bottom */}
        <div className="h-2 bg-white bg-opacity-30 rounded-full w-full">
          <div
            className="h-full bg-white rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export const YoutubeEmbedVideo = ({ embedId }: { embedId: string }) => (
  <div className="video-responsive h-full">
    <iframe
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      className="h-full w-full"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      title="Embedded youtube"
      width="853"
    />
  </div>
);
