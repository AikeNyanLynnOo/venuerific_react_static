import { Tab, Tabs } from "@nextui-org/tabs";
import { useState } from "react";
import { ArrowSquareOut, CaretDown, CaretUp } from "@phosphor-icons/react";

import { ReviewCardInDetail } from "../ReviewCardInDetail";

import { LightLabelWithIcon } from "@/components/atoms/LightLabelWithIcon";
import { COLORS } from "@/styles/colors";

interface ReviewTabsProps {
  reviews?: any;
  google_reviews?: any;
  visibleReviews: any;
  showMoreReviews: any;
  setShowMoreReviews: any;
  google_place_id: string;
}

export const ReviewTabs = ({
  reviews,
  google_reviews,
  visibleReviews,
  showMoreReviews,
  setShowMoreReviews,
  google_place_id,
}: ReviewTabsProps) => {
  const [selected, setSelected] = useState("site_reviews");

  if (
    reviews &&
    reviews.length > 0 &&
    google_reviews &&
    google_reviews.length > 0
  ) {
    return (
      <Tabs
        aria-label="Options"
        className="bg-white border-b px-0 w-full block max-w-screen-2xl mx-auto"
        classNames={{
          tabList: "p-0 flex gap-x-7 w-fit",
          cursor: "w-full h-0.5 bg-primary-600",
          tab: "h-12 min-w-fit p-0",
          tabContent: "min-w-fit p-0",
        }}
        color="primary"
        selectedKey={selected}
        variant="underlined"
        onSelectionChange={(key) => {
          setSelected(`${key}`);
        }}
      >
        <Tab
          key="site_reviews"
          className="p-0 flex"
          title={
            <span
              className={`text-base font-semibold leading-6 ${selected === "site_reviews" ? "text-primary-700" : "text-secondary-500"}`}
            >
              Venuerific Reviews
            </span>
          }
        >
          <div className="mt-4 flex flex-col gap-y-4 px-0">
            {visibleReviews.map((promo: any, index: any) => (
              <ReviewCardInDetail {...promo} key={index} />
            ))}
          </div>
          {/* See more reviews */}
          {reviews.length - visibleReviews.length > 0 && (
            <LightLabelWithIcon
              customClasses="px-0 flex items-center gap-x-2 cursor-pointer mt-4"
              customLabel={
                <span className="text-primary-700 text-sm font-semibold leading-5">
                  See {(showMoreReviews && "Less") || "More"}
                  {!showMoreReviews
                    ? ` (${reviews.length - visibleReviews.length})`
                    : ""}
                </span>
              }
              endIconNode={
                (showMoreReviews && (
                  <CaretUp color={COLORS.primary[600]} size={20} />
                )) || <CaretDown color={COLORS.primary[700]} size={20} />
              }
              onClick={() => setShowMoreReviews(!showMoreReviews)}
            />
          )}
        </Tab>
        <Tab
          key="google_reviews"
          className="p-0 flex"
          title={
            <span
              className={`text-base font-semibold leading-6 ${selected === "google_reviews" ? "text-primary-700" : "text-secondary-500"}`}
            >
              Google Reviews
            </span>
          }
        >
          <div className="mt-4 flex flex-col gap-y-4 px-0">
            <a
              className="font-semibold text-base text-primary-600 flex items-center"
              href={`https://search.google.com/local/reviews?placeid=${google_place_id}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              See all reviews
              <ArrowSquareOut
                className="ml-1"
                color={COLORS.primary[600]}
                size={18}
                weight="bold"
              />
            </a>
            {google_reviews.map((promo: any, index: any) => (
              <ReviewCardInDetail {...promo} key={index} />
            ))}
          </div>
        </Tab>
      </Tabs>
    );
  }
  if (reviews && reviews.length > 0) {
    return (
      <>
        <h2 className="text-xl font-semibold leading-8">Reviews</h2>
        <div className="mt-4 flex flex-col gap-y-4 px-0">
          {visibleReviews.map((promo: any, index: any) => (
            <ReviewCardInDetail {...promo} key={index} />
          ))}
        </div>
        {/* See more reviews */}
        {reviews.length - visibleReviews.length > 0 && (
          <LightLabelWithIcon
            customClasses="px-0 flex items-center gap-x-2 cursor-pointer mt-4"
            customLabel={
              <span className="text-primary-700 text-sm font-semibold leading-5">
                See {(showMoreReviews && "Less") || "More"}
                {!showMoreReviews
                  ? ` (${reviews.length - visibleReviews.length})`
                  : ""}
              </span>
            }
            endIconNode={
              (showMoreReviews && (
                <CaretUp color={COLORS.primary[600]} size={20} />
              )) || <CaretDown color={COLORS.primary[700]} size={20} />
            }
            onClick={() => setShowMoreReviews(!showMoreReviews)}
          />
        )}
      </>
    );
  }
  if (google_reviews && google_reviews.length > 0) {
    return (
      <>
        <h2 className="text-xl font-semibold leading-8 flex items-center gap-x-4">
          Google Reviews
          <a
            className="font-semibold text-base text-primary-600 flex items-center"
            href={`https://search.google.com/local/reviews?placeid=${google_place_id}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            See all reviews
            <ArrowSquareOut
              className="ml-1"
              color={COLORS.primary[600]}
              size={18}
              weight="bold"
            />
          </a>
        </h2>
        <div className="mt-4 flex flex-col gap-y-4 px-0">
          {google_reviews.map((promo: any, index: any) => (
            <ReviewCardInDetail {...promo} key={index} />
          ))}
        </div>
      </>
    );
  }

  return <></>;
};
