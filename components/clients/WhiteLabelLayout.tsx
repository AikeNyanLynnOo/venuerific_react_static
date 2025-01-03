"use client";
import WhiteLabelPageForm from "../whiteLabel/WhiteLabelPageForm";
import { useVenueDetailStore } from "@/store/venue-detail-store";
import { useState } from "react";

const PROMO_CODES = [
  {
    image:
      "https://d21bklzz9tc7ug.cloudfront.net/shrine/promotions/755/1734528413/enjoy-10-off-party-packages.jpg",
    name: "Enjoy 10% off Party Packages",
    value: 755,
    valid_until: "31 Jan 2025",
    description:
      "CELEBRATE WITH 10% OFF ALL PARTY PACKAGES THIS DECEMBER 2024 AND JANUARY 2025! ENJOY THIS SPECIAL OFFER ON TUESDAYS, WEDNESDAYS, AND THURSDAYS—EXCLUDING PUBLIC HOLIDAYS AND EVES. WHETHER IT'S A BIRTHDAY, CORPORATE EVENT, OR ANY SPECIAL OCCASION, OUR COMPREHENSIVE PACKAGES INCLUDE EVERYTHING YOU NEED FOR A FUN AND UNFORGETTABLE CELEBRATION. BOOK NOW AND TAKE ADVANTAGE OF THIS LIMITED-TIME PROMOTION!",
    code: "7C7B760FEA",
    terms_and_conditions:
      "Promotion valid throughout December 2024 & January 2025 on Tuesdays, Wednesdays & Thursdays excluding public holidays and eves.",
  },
];

export default function WhiteLabelLayout() {
  // const { enquiry_options } = useVenueDetailStore();

  const [promo, setPromo] = useState<any>(null);
  const [promoCode, setPromoCode] = useState("");
  const [isPromoCodeValid, setIsPromoCodeValid] = useState(false);
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const enquiry_options = { promotion: PROMO_CODES };

  return (
    <div>
      <WhiteLabelPageForm
        promo={promo}
        promoCode={promoCode}
        isPromoApplied={isPromoApplied}
        isPromoCodeValid={isPromoCodeValid}
        setPromo={setPromo}
        setIsPromoApplied={setIsPromoApplied}
        enquiry_options={enquiry_options}
      />
    </div>
  );
}
