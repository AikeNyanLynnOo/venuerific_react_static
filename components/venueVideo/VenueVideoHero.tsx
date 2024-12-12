"use client";

const VenueVideoHero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 w-full h-[400px] md:h-[500px]">
        <img
          src="/images/venue_video/venue_video_hero_mobile_img.webp"
          alt="How We Work Hero - Mobile"
          className="h-full w-full object-cover object-center md:hidden"
        />
        <img
          src="/images/venue_video/venue_video_hero_img.webp"
          alt="How We Work Hero - Desktop"
          className="h-full w-full object-cover object-center hidden md:block"
        />
      </div>

      {/* Content */}
      <div className="mt-[81px] w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 relative z-30">
        <div className="px-4 md:px-0 max-w-screen-2xl mx-auto flex flex-col items-center justify-center h-[400px] md:h-[500px] py-10 lg:flex-row lg:items-center lg:justify-start">
          <div className="max-w-screen-xl mx-auto lg:w-3/5 lg:pr-8 space-y-4 lg:text-left text-white z-40 relative lg:mx-0">
            <h1 className="text-3xl lg:text-5xl font-semibold">
              Venue Video Highlights
            </h1>
            <p className="text-white text-lg max-w-[80ch]">
              We&apos;re an event venue marketplace that provides top production
              services in Indonesia too. Take a closer look at our top event
              space rental Indonesia through the videos below.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueVideoHero;
