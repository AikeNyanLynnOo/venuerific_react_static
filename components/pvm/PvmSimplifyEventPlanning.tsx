"use client";

const PvmPlaceManageSec = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto py-18 lg:py-10 flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-[60px]">
        <div className="flex-1 space-y-8 text-left lg:mx-auto flex lg:items-center">
          <div>
            <p className="text-primary-800 text-3xl font-semibold leading-relaxed">
              Next-Level Venue Management
              <span className="block">Simplify Event Planning</span>
            </p>

            <p className="mt-8 text-secondary-600 text-xl leading-relaxed">
              Transform how you manage your venue with us, covering everything
              from venue marketing , lead generation to seamless event
              execution.
            </p>
            <div className="mt-10 flex flex-col items-start space-y-3">
              <span className="text-primary-600 text-6xl font-semibold">
                +30
              </span>
              <span className="text-secondary-500 text-2xl font-semibold">
                Places managed by us
              </span>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
          <img
            src="/images/pvm/pvm_place_manage_sec_img.webp"
            alt="Venue Management"
            className="w-[343px] h-[241px] lg:w-full lg:h-[538px] object-cover rounded-[20px] lg:rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PvmPlaceManageSec;