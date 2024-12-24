import { VNFNavbar } from "@/components/molecules/VNFNavbar";
import Footer from "@/components/molecules/Footer";
import PaymentFormEnquiryDetails from "../paymentForm/PaymentFormEnquiryDetails";

export default function PaymentFormLayout() {
  return (
    <div>
      <VNFNavbar
        className="px-4 lg:px-5 items-center py-2 fixed lg:block hidden"
        maxWidth="full"
      />

      <PaymentFormEnquiryDetails />

      <div className="w-full mt-10 mx-auto px-5 lg:px-12 xl:px-20 hidden lg:block">
        <Footer />
      </div>
    </div>
  );
}
