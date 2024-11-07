"use client";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { Eye, EyeSlash, WarningCircle } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { setCookie } from "nookies";

import { VNFTypo } from "@/components/VNFTypography/Typo";
import { LIGHT_THEME } from "@/config/theme";
import { loginUser } from "@/utils/apiFunctions";

const authCookieName = process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME || "app_token";

export default function LoginAsPage(props: any) {
  const router = useRouter();
  const params = useParams();

  const [isError, setIsError] = useState(false);
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const toggleVisibility = () => setIsPwdVisible(!isPwdVisible);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setIsError(false);
  }, [email, password]);

  const showToast = () =>
    toast.success("Signing in, redirecting to home page", {
      className: "border",
      style: {
        backgroundColor: LIGHT_THEME.colors.success[100],
        border: `1px solid ${LIGHT_THEME.colors.success[400]}`,
        width: "auto",
        color: LIGHT_THEME.colors.success[600],
        maxWidth: "fit-content",
      },
    });

  useEffect(() => {
    if (isSuccess) {
      showToast();
    }
  }, [isSuccess]);

  const handleLogin = async () => {
    setIsLoading(true);
    const { status, statusText, success, message, data, meta } =
      await loginUser({
        email,
        password,
      });

    setIsLoading(false);

    if (success) {
      setIsSuccess(true);
      setCookie(null, authCookieName, meta.token, {
        // maxAge: 30 * 24 * 60 * 60, // 30 days
        maxAge: 30 * 60 * 60, // 3 hours
        path: "/", // available across entire site
      });
      // return router.push(`/${params.country || "sg"}`);
      window.location.href = `/${params.country || "sg"}`;

      return;
    }
    setIsError(true);
  };

  return (
    <section className="h-auto min-h-screen bg-secondary-50 text-center py-12 w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20">
      <VNFTypo
        className="block px-4"
        text="Log in to your account"
        variant="titleSmSemibold"
      />
      <VNFTypo
        className="block mt-4 px-4"
        text="Welcome back! Please enter your details."
        variant="textMdRegular"
      />
      <div className="px-0 sm:px-4 py-10 w-full sm:w-11/12 md:w-7/12 lg:w-5/12 xl:w-[460px] mx-auto">
        <div className="bg-white rounded-none sm:rounded-xl shadow-none border sm:border-none sm:shadow-lg px-4 sm:px-5 md:px-10 py-8 w-full h-auto flex flex-col gap-y-5">
          {isError && (
            <VNFTypo
              className="block text-left text-danger-500"
              text="Email or password is not valid."
              variant="textSmMedium"
            />
          )}

          <Input
            className={`rounded-lg bg-white border ${isError ? "border-danger-300" : "border-secondary-300"}`}
            classNames={{
              inputWrapper: [
                "bg-white",
                "group-data-[focus=true]:bg-white",
                "dark:group-data-[focus=true]:bg-white",
              ],
            }}
            endContent={
              isError && <WarningCircle className="text-danger-500" size={20} />
            }
            label={
              <VNFTypo
                className="block text-secondary-700"
                text="Email"
                variant="textSmMedium"
              />
            }
            labelPlacement="outside"
            placeholder="Enter your email"
            radius="sm"
            type="email"
            value={email}
            variant="flat"
            onValueChange={setEmail}
          />
          <Input
            className={`rounded-lg bg-white border ${isError ? "border-danger-300" : "border-secondary-300"}`}
            classNames={{
              inputWrapper: [
                "bg-white",
                "group-data-[focus=true]:bg-white",
                "dark:group-data-[focus=true]:bg-white",
              ],
            }}
            endContent={
              (isError && (
                <WarningCircle className="text-danger-500" size={20} />
              )) ||
              (isPwdVisible ? (
                <EyeSlash
                  className="text-primary-600 cursor-pointer"
                  size={20}
                  onClick={toggleVisibility}
                />
              ) : (
                <Eye
                  className="text-primary-600 cursor-pointer"
                  size={20}
                  onClick={toggleVisibility}
                />
              ))
            }
            label={
              <VNFTypo
                className="block text-secondary-700"
                text="Password"
                variant="textSmMedium"
              />
            }
            labelPlacement="outside"
            placeholder="Enter your password"
            radius="sm"
            type={(isPwdVisible && "text") || "password"}
            value={password}
            variant="flat"
            onValueChange={setPassword}
          />
          <div className="flex justify-between items-center px-0 w-full">
            <Checkbox defaultSelected radius="sm" size="sm">
              <VNFTypo
                className="text-secondary-700"
                text="Remember For 30 days"
                variant="textSmMedium"
              />
            </Checkbox>
            <Link
              className="text-sm font-semibold leading-5 text-primary-700"
              href="/forgot-pwd"
            >
              Forgot password
            </Link>
          </div>
          <div className="flex flex-col gap-y-3">
            <Button
              className="bg-primary-600 rounded-lg w-full"
              color="primary"
              isLoading={isLoading}
              variant="solid"
              onClick={handleLogin}
            >
              <VNFTypo
                className="text-white"
                text="Sign in"
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
            text="Don't have an account?"
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
