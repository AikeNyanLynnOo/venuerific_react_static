"use client";

const SuperVenueHero = () => {
  return (
    <div className="relative">
      {/* Background image for mobile and tablet */}
      <div className="absolute inset-0 w-full h-[400px] lg:h-[500px] block lg:hidden">
        <img
          src="/images/super_venue/super_venue_hero_mobile.webp"
          alt="Mobile venue background image"
          className="h-full w-full object-cover object-center"
        />
      </div>
      {/* Background image for desktop */}
      <div className="absolute inset-0 w-full h-[400px] lg:h-[500px] hidden lg:block">
        <img
          src="/images/super_venue/super_venue_hero.webp"
          alt="Desktop venue background image"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="relative z-10 mt-[81px] w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-20 lg:py-26">
        <div className="px-4 md:px-0 my-10 md:mt-6 max-w-screen-2xl mx-auto text-left lg:text-center">
          <p className="text-white text-sm lg:text-base font-semibold mb-2 lg:mb-6">
            Super Venue
          </p>
          <h1 className="text-white text-2xl lg:text-5xl font-bold mb-6 lg:mb-10 max-w-3xl lg:mx-auto">
            Stand Out as a Super Venue
          </h1>
          <p className="text-white text-base lg:text-xl max-w-2xl lg:mx-auto">
            Maximize your venue&apos;s potential as a Super Venue with
            Venuerific, a special status awarded to our best performing venues,
            offering benefits that bring high-quality bookings and premium
            visibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuperVenueHero;
