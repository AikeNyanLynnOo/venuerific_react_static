import React from "react";

interface MapIframeProps {
  iframe_title: string;
  iframe_src: string;
}

export const MapIframe = ({ iframe_src, iframe_title }: MapIframeProps) => {
  return (
    <div className="h-full w-full mt-3">
      <iframe
        allowFullScreen
        className="w-full"
        height="350"
        loading="lazy"
        src={iframe_src}
        style={{ border: 0 }}
        title={iframe_title}
        width="600"
      />
    </div>
  );
};
