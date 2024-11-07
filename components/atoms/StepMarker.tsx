import { Check } from "@phosphor-icons/react";

interface StepMarker {
  steps?: any[];
  step: number;
}

export const StepMarker = ({ steps, step }: StepMarker) => {
  return (
    <div className="mb-4">
      {step === 0 && (
        <div className="flex items-center w-full gap-x-3">
          <div className="flex flex-1 flex-nowrap items-center gap-x-3">
            <div
              className={`rounded-full h-6 w-6 min-w-6 flex items-center justify-center bg-primary-700 text-xs font-semibold text-white`}
            >
              1
            </div>
            <span className="text-sm block h-6 font-semibold text-nowrap">
              Event Information
            </span>
            <div className="h-1 rounded-full w-full bg-secondary-200" />
          </div>
          <div
            className={`rounded-full h-6 w-6 flex items-center justify-center bg-secondary-500 text-xs font-semibold text-white`}
          >
            2
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="flex items-center w-full gap-x-3">
          <div
            className={`rounded-full h-6 w-6 flex items-center justify-center bg-success-600 text-xs font-semibold text-white`}
          >
            <Check color="#FFFFFF" size={16} weight="bold" />
          </div>
          <div className="flex flex-1 flex-nowrap items-center gap-x-3">
            <div className="h-1 rounded-full w-full bg-secondary-200" />
            <div
              className={`rounded-full h-6 w-6 min-w-6 flex items-center justify-center bg-primary-700 text-xs font-semibold text-white`}
            >
              2
            </div>
            <span className="text-sm block h-6 font-semibold text-nowrap">
              Contact and other info
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
