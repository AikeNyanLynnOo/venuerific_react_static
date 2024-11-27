"use client";

const HowWeWorkThreeSimpleSteps = () => {
  const stepsData = [
    {
      key: "step_1",
      image: "./images/how_we_work/three_simple_step_1.webp",
      title: "List Your Venue",
      text: "Click on the ”List Venue” button and enter all the details of your space.",
    },
    {
      key: "step_2",
      image: "./images/how_we_work/three_simple_step_2.webp",
      title: "Receive Event Leads",
      text: "Receive enquiries immediately from interested event organisers and increase your revenue.",
    },
    {
      key: "step_3",
      image: "./images/how_we_work/three_simple_step_3.webp",
      title: "Access Venue Management System",
      text: "Manage your event enquiries under one system with simple-to-use event data management software!",
    },
  ];

  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-10 mb-4 lg:mb-32">
      <div className="md:px-0 md:mt-4 max-w-screen-2xl mx-auto">
        <h2 className="text-3xl font-bold text-primary-700 mb-14 text-center lg:text-left">
          In Three Simple Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stepsData.map((step) => (
            <div
              key={step.key}
              className="flex flex-col items-center md:items-start bg-secondary-50 p-6 text-center md:text-left"
            >
              <img
                src={step.image}
                alt={step.title}
                className="mb-4 lg:mb-20"
                width="48"
                height="48"
              />
              <h3 className="text-lg md:text-xl font-semibold text-secondary-900 mb-2">
                {step.title}
              </h3>
              <p className="text-base md:text-lg text-secondary-600">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkThreeSimpleSteps;
