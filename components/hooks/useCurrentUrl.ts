"use client";
import { useEffect, useState } from "react";

export const useCurrentUrl = () => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const currentUrl = window.location.href;

    setUrl(currentUrl);
  }, []);

  return url;
};
