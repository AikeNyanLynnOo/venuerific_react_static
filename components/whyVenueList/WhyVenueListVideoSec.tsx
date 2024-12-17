const WhyVenueListVideoSec = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-screen-xl mx-auto p-6 md:pt-20 md:pl-36 md:pr-36 flex flex-col items-center">
        <div className="w-full relative">
          <div className="relative flex flex-col items-center space-y-4 z-10">
            <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[535px]">
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
            <p className="text-center text-secondary-500 text-xl font-semibold mb-16">
              Success Stories - How Venuerific Boosted Our Venues
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyVenueListVideoSec;
