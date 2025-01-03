import { VNFNavbar } from "@/components/molecules/VNFNavbar";
import Footer from "@/components/molecules/Footer";
import RefundPaymentForm from "../refundPayment/RefundPaymentForm";
import RefundBreadCrumbs from "../refundPayment/RefundBreadCrumbs";
import RefundPaymentFaq from "../refundPayment/RefundPaymentFaq";

export default function RefundPaymentLayout() {
  return (
    <div>
      <VNFNavbar
        className="px-4 md:px-5 items-center py-2 fixed"
        maxWidth="full"
      />
      <RefundBreadCrumbs/>
      <RefundPaymentFaq/>
      <RefundPaymentForm />
      <div className="w-full mt-10 mx-auto px-5 md:px-5 lg:px-12 xl:px-20 block md:flex items-center justify-between">
        <Footer />
      </div>
    </div>
  );
}
