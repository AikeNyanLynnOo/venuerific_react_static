"use client";

const PvmYourPlaceSec = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-14 bg-primary-800">
      <div className="max-w-[1000px] px-4 md:px-0 my-10 md:mt-4 mx-auto text-center">
        <h2 className="text-3xl text-white">Your Place Is In Good Hands.</h2>

        <p className="text-xl text-primary-200 mt-6">
          Venuerific has been the standard for venue management and events
          planning for almost a decade. We&apos;ve got this and we&apos;ve got
          you!
        </p>

        <div className="flex flex-col items-center md:flex-row justify-center mt-12 gap-8 md:gap-20">
          {[
            {
              src: "/images/pvm/professionalism_icon.webp",
              alt: "Professionalism Icon",
              label: "Professionalism",
            },
            {
              src: "/images/pvm/trustworthy_icon.webp",
              alt: "Trustworthy Icon",
              label: "Trustworthy",
            },
            {
              src: "/images/pvm/experience_icon.webp",
              alt: "Experience Icon",
              label: "Experienced",
            },
          ].map((item, index) => (
            <div
              className="flex items-center md:flex-col md:items-center text-left md:text-center w-full max-w-[200px]"
              key={index}
            >
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-12 h-12"
                  width="48"
                  height="48"
                />
              </div>
              <p className="ml-4 md:ml-0 mt-0 md:mt-4 text-lg font-medium text-white">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PvmYourPlaceSec;
