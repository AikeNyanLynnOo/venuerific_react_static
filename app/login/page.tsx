import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";

import { VNFTypo } from "@/components/VNFTypography/Typo";

export default function LoginPage() {
  return (
    <section className="h-auto min-h-screen bg-secondary-50 text-center py-12 w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20">
      <VNFTypo
        className="block px-4"
        text="Log in to your account"
        variant="titleSmSemibold"
      />
      <VNFTypo
        className="block mt-4 px-4"
        text="Welcome back! Please select your role"
        variant="textMdRegular"
      />
      <div className="flex flex-col my-8 sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 px-4 md:px-0">
        <div className="bg-white rounded-xl shadow-lg px-10 py-8 w-full flex items-center justify-center min-h-[330px] sm:w-1/2 max-w-sm">
          <div className="flex flex-col items-center w-full">
            <div className="bg-primary-50 p-4 rounded-lg">
              <Image
                alt="login_page_user"
                height={52}
                loading="lazy"
                src="/images/icons/login_page_user.svg"
                width={52}
              />
            </div>
            <VNFTypo
              className="mt-5 text-secondary-900"
              text="Event Planner"
              variant="textXlSemibold"
            />
            <VNFTypo
              className="mt-3 text-secondary-900"
              text="Find venues for your future events"
              variant="textMdRegular"
            />
            <Button
              as={Link}
              className="bg-primary-600 rounded-lg w-full mt-4"
              color="primary"
              href="/login/planner"
              variant="solid"
            >
              <VNFTypo
                className="text-white"
                text="Sign in"
                variant="textMdRegular"
              />
            </Button>

            <p className="mt-4 w-full">
              <VNFTypo
                className="text-secondary-600"
                text="Don't have an event planner account?"
                variant="textSmRegular"
              />
              <Link
                className="text-sm font-semibold leading-5 text-primary-700 ml-1"
                href="/signup"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 w-full flex items-center justify-center min-h-[330px] sm:w-1/2 max-w-sm">
          <div className="flex flex-col items-center w-full">
            <div className="bg-primary-50 p-4 rounded-lg">
              <Image
                alt="login_page_venue"
                height={52}
                loading="lazy"
                src="/images/icons/login_page_venue.svg"
                width={52}
              />
            </div>
            <VNFTypo
              className="mt-5 text-secondary-900"
              text="Owner"
              variant="textXlSemibold"
            />
            <VNFTypo
              className="mt-3 text-secondary-900"
              text="Manage venue listed and receive enquiries"
              variant="textMdRegular"
            />
            <Button
              as={Link}
              className="bg-primary-600 rounded-lg w-full mt-4"
              color="primary"
              href="/login/owner"
              variant="solid"
            >
              <VNFTypo
                className="text-white"
                text="Sign in"
                variant="textMdRegular"
              />
            </Button>

            <p className="mt-4 w-full">
              <VNFTypo
                className="text-secondary-600"
                text="Don't have an owner account?"
                variant="textSmRegular"
              />
              <Link
                className="text-sm font-semibold leading-5 text-primary-700 ml-1"
                href="/listvenue"
              >
                List your venue
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
