export const VirtualTourIframe = ({
  virtual_tour_url,
}: {
  virtual_tour_url: string;
}) => (
  <div className="h-full">
    <iframe
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      className="h-full w-full max-h-full overflow-hidden virtual-tour-iframe"
      //   src="https://singaporebrides.com/virtual-tours/jewel-changi-airport/"
      //   src="https://kuula.co/share/collection/7JY71?logo=-1&info=0&fs=1&vr=0&gyro=0&thumbs=1"
      //   src="https://ths.li/mYeUrj8"
      height="480"
      src={virtual_tour_url}
      title="Virtual tour"
      width="853"
    />
  </div>
);
