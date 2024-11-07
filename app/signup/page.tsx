"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { VNFTypo } from "@/components/VNFTypography/Typo";
import InputGroup from "@/components/atoms/InputGroup";
import RadioGroup from "@/components/molecules/RadioGroup";
import { LIGHT_THEME } from "@/config/theme";

export default function SignupPage(props: any) {
  const { params } = props;
  const [isError, setIsError] = useState(false);
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const toggleVisibility = () => setIsPwdVisible(!isPwdVisible);

  const showToast = () =>
    toast.success("Signing in, redirecting to your account pages", {
      className: "border",
      style: {
        backgroundColor: LIGHT_THEME.colors.success[100],
        border: `1px solid ${LIGHT_THEME.colors.success[400]}`,
        width: "auto",
        color: LIGHT_THEME.colors.success[600],
        maxWidth: "fit-content",
      },
    });

  const handleChange = useCallback((value: any, field: string) => {
    switch (field) {
      case "name":
        break;
      case "email":
        break;
      case "pwd":
        setPwd(value);
        break;
      case "confirmPwd":
        setConfirmPwd(value);
        break;
      case "userType":
        break;

      default:
        break;
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      showToast();
    }
  }, [isSuccess]);

  return (
    <section className="h-auto min-h-screen bg-secondary-50 text-center py-12 w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20">
      <VNFTypo
        className="block px-4"
        text="Sign up to Venuerific"
        variant="titleSmSemibold"
      />
      <VNFTypo
        className="block mt-4 px-4"
        text="Welcome! Please enter your details."
        variant="textMdRegular"
      />
      <div className="px-0 sm:px-4 py-10 w-full sm:w-11/12 md:w-7/12 lg:w-5/12 xl:w-[460px] mx-auto">
        <div className="bg-white rounded-none sm:rounded-xl shadow-none border sm:border-none sm:shadow-lg px-4 sm:px-5 md:px-10 py-8 w-full h-auto flex flex-col gap-y-5">
          <InputGroup
            isValid
            handleChange={(e: any) => handleChange(e.target.value, "name")}
            inputLabel={
              <VNFTypo
                className="block text-secondary-700"
                text="Name"
                variant="textSmMedium"
              />
            }
            inputType="text"
            inputValue={name}
            placeholder="Enter your name"
          />

          <InputGroup
            isValid
            handleChange={(e: any) => handleChange(e.target.value, "email")}
            inputLabel={
              <VNFTypo
                className="block text-secondary-700"
                text="Email"
                variant="textSmMedium"
              />
            }
            inputType="email"
            inputValue={email}
            placeholder="Enter your email"
          />

          <InputGroup
            isValid
            handleChange={(e: any) => handleChange(e.target.value, "pwd")}
            inputLabel={
              <VNFTypo
                className="block text-secondary-700"
                text="Password"
                variant="textSmMedium"
              />
            }
            inputType="password"
            inputValue={pwd}
            placeholder="Enter your password"
          />

          <InputGroup
            handleChange={(e: any) =>
              handleChange(e.target.value, "confirmPwd")
            }
            isValid
            // errorText="Error"
            // warningText="Warning"
            inputLabel={
              <VNFTypo
                text="Repeat Password"
                className="block text-secondary-700"
                variant="textSmMedium"
              />
            }
            inputType="password"
            inputValue={confirmPwd}
            normalText="Password must contain at least 8 characters and at least 1 of each of the following: uppercase, lowercase, number and symbols (!@#$%^&*.,?)"
            placeholder="Enter your password again"
          />

          <div className="px-0 w-full my-3">
            <RadioGroup />
          </div>
          <div className="flex flex-col gap-y-3">
            <Button
              className="bg-primary-600 rounded-lg w-full"
              color="primary"
              isLoading={isLoading}
              variant="solid"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setIsLoading(false);
                  setIsError(true);
                }, 3000);
              }}
            >
              <VNFTypo
                className="text-white"
                text="Sign up"
                variant="textMdRegular"
              />
            </Button>
            <Button
              className="bg-white rounded-lg w-full flex sm:hidden"
              color="secondary"
              startContent={
                <Image
                  alt="google_icon"
                  height={20}
                  loading="lazy"
                  src="/images/icons/fingerprint.svg"
                  width={20}
                />
              }
              variant="faded"
            >
              <VNFTypo
                className="text-secondary-700"
                text="Biometric Sign in"
                variant="textMdRegular"
              />
            </Button>
            <Button
              className="bg-white rounded-lg w-full"
              color="secondary"
              startContent={
                <Image
                  alt="google_icon"
                  height={20}
                  loading="lazy"
                  src="/images/icons/google.svg"
                  width={20}
                />
              }
              variant="faded"
              onClick={() => {
                setIsError(false);
                setIsSuccess(true);
              }}
            >
              <VNFTypo
                className="text-secondary-700"
                text="Sign in with Google"
                variant="textMdRegular"
              />
            </Button>
            <Button
              className="bg-white rounded-lg w-full"
              color="secondary"
              startContent={
                <Image
                  alt="google_icon"
                  height={20}
                  loading="lazy"
                  src="/images/icons/singpass.svg"
                  width={20}
                />
              }
              variant="faded"
            >
              <VNFTypo
                className="text-secondary-700"
                text="Sign in with Singpass"
                variant="textMdRegular"
              />
            </Button>
          </div>
        </div>
        <p className="mt-5 w-full">
          <VNFTypo
            className="text-secondary-600"
            text="Already have an account?"
            variant="textSmRegular"
          />
          <Link
            className="text-sm font-semibold leading-5 text-primary-700 ml-1"
            href="/login"
          >
            Sign in
          </Link>
        </p>
      </div>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={10}
        // containerClassName="bg-red-100"
        // containerStyle={{}}
        // toastOptions={{
        // //   className: "bg-red-200 border",
        //   style: {
        //     border: "1px solid #713200",
        //     color: "#713200",
        //   },
        // }}
      />
    </section>
  );
}
