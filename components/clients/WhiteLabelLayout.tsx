"use client";
import WhiteLabelPageForm from "../whiteLabel/WhiteLabelPageForm";
import { useVenueDetailStore } from "@/store/venue-detail-store";
import { useState } from "react";

// const PROMO_CODES = [
//   {
//     name: "Jewel Event Promo",
//     value: "716",
//     valid_until: "Valid til 31 Dec 2024",
//     description:
//       "ENJOY UP TO 55% OF SELECTED EVENT VENUES AT JEWEL CHANGI AIRPORT.",
//     code: "JEWELEVENTS",
//     terms_and_conditions: "asdf",
//   },
//   {
//     name: "Jewel Event Promo",
//     value: "716",
//     valid_until: "Valid til 31 Dec 2024",
//     description:
//       "ENJOY UP TO 55% OF SELECTED EVENT VENUES AT JEWEL CHANGI AIRPORT.",
//     code: "JEWELEVENTS",
//     terms_and_conditions: "asdf",
//   },
// ];

export default function WhiteLabelLayout() {
  const { enquiry_options } = useVenueDetailStore();

  const [promo, setPromo] = useState<any>(null); 
  const [promoCode, setPromoCode] = useState("");
  const [isPromoCodeValid, setIsPromoCodeValid] = useState(false);
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  // const enquiry_options = { promotion: PROMO_CODES };

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
