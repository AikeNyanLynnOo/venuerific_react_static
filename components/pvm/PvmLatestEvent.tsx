import { HorizontalScrollList } from "../molecules/HorizontalScrollList";
import { ScrollContainerWithTitle } from "../molecules/ScrollContainerWithTitle";
import { DUMMY_PROMOTEXTS } from "../../config/constants";
import { PvmEventCard } from "./PvmEventCard";

const PvmLatestEvent = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-16 bg-white">
      <ScrollContainerWithTitle
        className="px-4 md:px-0 my-10 md:mt-4 md:mb-10 max-w-screen-2xl mx-auto"
        title="We’ve helped hundreds of global companies"
        titleClasses="text-secondary-900 md:text-primary-700 font-semibold text-3xl mb-5"
        text={`Case studies from some of our amazing customers who are building faster.`}
        textClasses="text-secondary-600 text-xl"
      >
        <HorizontalScrollList
          cardType="whyshouldchoose"
          items={DUMMY_PROMOTEXTS}
        />
      </ScrollContainerWithTitle>
    </div>
  );
};

export default PvmLatestEvent;
