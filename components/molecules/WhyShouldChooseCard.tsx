interface WhyShouldChooseCardProps {
  title?: string;
  text?: string;
  name?: string;
  position?: string;
  [otherProp: string]: any;
}

export const WhyShouldChooseCard = ({
  title,
  text,
  name,
  position,
}: WhyShouldChooseCardProps) => {
  return (
    <div className="group text-white w-fit bg-primary-900 border lg:border-none lg:hover:shadow-lg p-4 min-w-[384px]">
      <div className="flex flex-col gap-y-2 mt-4 justify-between h-full pb-4">
        <div>
          <span className="text-2xl font-semibold leading-9 text-white block">
            {name || ""}
          </span>
          <span className="text-base font-normal leading-6 text-white block">
            {position || ""}
          </span>
        </div>
        <div className="flex mt-3 gap-2 py-8 px-6 text-white w-full flex-col bg-neutralwhite-200 border border-neutralwhite-400 backdrop-blur-md">
          <span className="text-xl font-semibold leading-8 block w-full text-inherit">
            {title || ""}
          </span>
          <span className="text-base font-normal leading-6 block w-full text-inherit">
            {text || ""}
          </span>
        </div>
      </div>
    </div>
  );
};
