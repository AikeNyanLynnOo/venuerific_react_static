const TryVenuerific = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden">
      <div className="max-w-screen-xl mx-auto p-6 sm:p-8 md:p-16 lg:p-24 flex flex-col justify-center space-y-6">
        <h2 className="text-primary-700 text-[32px] sm:text-[40px] lg:text-[48px] font-bold sm:hidden">
          Request a demo
        </h2>
        <p className="text-secondary-600 text-[14px] sm:text-[16px] md:text-[18px] sm:hidden">
          Discover the Venue Management CRM system that not only generates a substantial return on investment but also comes at an incredibly affordable subscription fee. 
          Invest just 5 minutes of your time now to unlock its full potential.
        </p>

        <h2 className="text-primary-700 text-[32px] sm:text-[40px] lg:text-[48px] font-bold hidden sm:block">
          Ready to try Venuerific?
        </h2>
        <p className="text-secondary-600 text-[14px] sm:text-[16px] md:text-[18px] hidden sm:block">
          Integrate Venuerific easily into your venue sales and marketing operations
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="border-2 border-secondary-300 px-6 py-3 text-lg font-semibold rounded-md sm:hidden hover:bg-secondary-300 hover:text-white transition-colors">
            See Demo
          </button>

          <button className="border-2 border-secondary-300 px-6 py-3 text-lg font-semibold rounded-md hidden sm:block hover:bg-secondary-300 hover:text-white transition-colors">
            Schedule a demo
          </button>
          <button className="bg-primary-600 text-white px-6 py-3 text-lg font-semibold rounded-md hidden sm:block hover:bg-primary-700 transition-colors">
            Sign up for free
          </button>
        </div>
      </div>

      <img
        src="/images/why_venue_list/try_venuerific_img.png"
        alt="Try Venuerific"
        className="rounded-md w-full h-[400px] sm:h-[555px] object-cover"
      />
    </div>
  );
};

export default TryVenuerific;
