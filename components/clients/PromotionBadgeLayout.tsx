import { PromotionBadge } from "../atoms/PromotionBadge/PromotionBadge";

const promotions = [
  {
    name: "Jewel Event Venues Promo",
    valid_until: "31 Mar 2024",
    description:
      "ENJOY UP TO 55% OFF SELECTED EVENT VENUES AT JEWEL CHANGI AIRPORT.",
    code: "JEWELEVENTS",
  },
  {
    name: "Jewel Event Venues Promo2",
    valid_until: "31 June 2024",
    description:
      "ENJOY UP TO 55% OFF SELECTED EVENT VENUES AT JEWEL CHANGI AIRPORT.",
    code: "JEWELEVENTS",
  },
  {
    name: "Jewel Event Venues Promo3",
    valid_until: "1 Spet 2024",
    description:
      "ENJOY UP TO 55% OFF SELECTED EVENT VENUES AT JEWEL CHANGI AIRPORT.",
    code: "JEWELEVENTS",
  },
];

export default function PromotionBadgeLayout() {
  return (
    <div>
      <PromotionBadge promotions={promotions} />
    </div>
  );
}
