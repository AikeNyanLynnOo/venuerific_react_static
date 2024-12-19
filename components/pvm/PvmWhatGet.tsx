"use client";

const PvmWhatGet = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-10">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <h2 className="text-primary-800 text-3xl font-semibold mb-6 text-center lg:text-left">
          Why Venuerific as Your Venue Management Partner?
        </h2>
        <p className="text-secondary-600 font-medium text-lg mb-10 text-center lg:text-left">
          Venuerific brings the expertise to manage a diverse range of venues
          and host every type of event. Whether it&apos;s a high-profile
          corporate dinner or personal milestones like engagements, birthdays,
          and weddings, we have the solutions and services you need.
        </p>

        <div className="flex flex-col lg:flex-row items-start pt-6 gap-8">
          <div className="flex-1 hidden lg:block">
            <img
              src="/images/pvm/pvm_what_get_img.webp"
              alt="Event Management Image"
              width="560"
              height="560"
              className="rounded-md"
            />
          </div>

          <div className="flex-1">
            <ul className="space-y-4 font-semibold">
              {[
                "Implement a proven management and marketing methodology",
                "Manage the paperwork trail for all venue inquiries and sales",
                "Coordinate all aspects of a client’s event/function requirements",
                "Proactively manage all venue sales inquiries",
                "Manage the event on the day/night",
                "Provide venue follow-up services",
                "Access to enviable database of corporate clientele",
                "Maximised venue utilisation",
                "Increased client satisfaction with your venue/facilities",
                "Increased venue revenue and profits",
              ].map((text, index) => (
                <li key={index} className="flex items-start text-secondary-900">
                  <img
                    src="/images/pvm/featured_icon.webp"
                    alt="Check Icon"
                    width="32"
                    height="32"
                    className="mr-4"
                  />
                  <span className="pt-1">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PvmWhatGet;
