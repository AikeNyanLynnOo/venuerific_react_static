import Image from "next/image";
import whyVenueListHero from "../../public/images/hero_imgs/why_venue_list_hero.png";
import whyVenueListImg1 from "../../public/images/why_venue_list/why_venue_list_img1.png";
import VenuerificSolution from "@/components/whyVenueList/venuerificSolution/VenuerificSolution";
import WhyVenuerific from "@/components/whyVenueList/whyVenuerific/WhyVenuerific";
import WhyVenueListVideoSec from "@/components/whyVenueList/whyVenueListVideoSec/WhyVenueListVideoSec";
import VenueMarketing from "@/components/whyVenueList/venueMarketing/VenueMarketing";
import VenueTrustedBusiness from "@/components/whyVenueList/venueTruestedBusiness/VenueTrustedBusiness";
import TryVenuerific from "@/components/whyVenueList/tryVenuerific/TryVenuerific";

export default function WhyVenueList() {
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 lg:p-16 space-y-8 lg:space-y-0 lg:flex-row">
        <div className="absolute inset-0 h-full w-full z-0">
          <Image
            src={whyVenueListHero}
            alt="Venue background image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="opacity-100"
            priority
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gray opacity-40"></div>

        {/* Content Section */}
        <div className="lg:w-3/5 space-y-4 text-center lg:text-left text-white z-20 relative">
          <h1 className="text-3xl lg:text-5xl font-normal">
            Get More Leads with Venuerific
          </h1>
          <p className="text-white text-lg max-w-[60ch]">
            Transform your venue with Venuerific, making it easy to generate
            more leads, manage them, and convert them into revenue.
          </p>
          <div className="bg-gradient-to-r from-[#9C3EF3] to-[#4E8CFF] rounded-md p-2 inline-block">
            <p className="text-white font-semibold text-lg">
              On average, Venuerific venues earn up to $30,000 per month.
            </p>
          </div>

          {/* G2 User Ratings */}
          <div className="text-gray-300 flex items-center space-x-4">
            <Image
              src={whyVenueListImg1}
              alt="G2 User Ratings Logo"
              width={72}
              height={73}
              className="object-contain"
            />
            <div>
              <p className="text-[14px]">G2 User Ratings</p>
              <div className="flex items-center space-x-2 text-white">
                <span className="text-[25px]">⭐</span>
                <span className="font-semibold text-[25px] text-white">
                  4.6
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div
          className="lg:w-2/5 bg-white p-6 shadow-lg rounded-lg space-y-4 z-20 relative"
          style={{ borderRadius: "12px" }}
        >
          <h2 className="text-xl font-semibold text-gray-800">
            Fill out the form to speak with our experts
          </h2>
          <p className="text-gray-600">
            to see how Venuerific can help your venue.
          </p>

          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col text-gray-700 font-normal">
                First Name*
                <input
                  type="text"
                  placeholder="Your first name"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </label>
              <label className="flex flex-col text-gray-700 font-normal">
                Last Name*
                <input
                  type="text"
                  placeholder="Your last name"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </label>
              <label className="flex flex-col text-gray-700 font-normal">
                Venue Name*
                <input
                  type="text"
                  placeholder="Your venue name"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </label>
              <label className="flex flex-col text-gray-700 font-normal">
                Venue Website
                <input
                  type="text"
                  placeholder="Your venue website"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Contact Inputs */}
              <label className="flex flex-col text-gray-700 font-normal">
                Email Address*
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </label>
              <label className="flex flex-col text-gray-700 font-normal">
                Phone Number*
                <input
                  type="text"
                  placeholder="Your phone number"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </label>
            </div>

            <label className="flex flex-col text-gray-700 font-normal">
              Country*
              <select
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option>Select your country</option>
                <option>Singapore</option>
                <option>Malaysia</option>
                <option>Indonesia</option>
              </select>
            </label>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold p-2 rounded-lg"
            >
              Schedule a Demo
            </button>
          </form>
        </div>
      </div>

      {/* Venues Truested Business Section */}
      <VenueTrustedBusiness />

      {/* Why Venuerific Section */}
      <WhyVenuerific />

      {/* Venuerific Solution Section */}
      <VenuerificSolution />

      {/* Venuerific Video Section */}
      <WhyVenueListVideoSec />

      {/* Venuerific Marketing Section */}
      <VenueMarketing />

      {/* Try Venuerific Section */}
      <TryVenuerific />
    </div>
  );
}
