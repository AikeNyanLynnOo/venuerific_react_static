const WhyVenueListVideoSec = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary-50"></div>
        <div className="relative flex flex-col items-center space-y-4 z-10">
          <div style={{ width: "872px", height: "535px" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/E1gWks8_vxA"
              title="Success Stories - How Venuerific Boosted Our Venues"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md shadow-lg"
            ></iframe>
          </div>
          <p className="text-center text-secondary-500 text-[20px] font-semibold" style={{ marginBottom: "60px" }}>
            Success Stories - How Venuerific Boosted Our Venues
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyVenueListVideoSec;
