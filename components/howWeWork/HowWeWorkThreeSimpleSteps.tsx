"use client";

const HowWeWorkThreeSimpleSteps = ({
  stepsData = [],
}: {
  stepsData: { title: string; text: string }[];
}) => {
  if (stepsData.length === 0) return null;

  return (
    <div className="w-full mx-auto py-10 mb-4 lg:mb-32 mt-12">
      <div className="md:px-0 md:mt-4 max-w-screen-2xl mx-auto">
        <h2 className="text-3xl font-bold text-primary-700 mb-14 text-center lg:text-left">
          In Three Simple Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start bg-secondary-50 p-6 text-center md:text-left"
            >
              <img
                src={`./images/how_we_work/three_simple_step_${index + 1}.webp`}
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
