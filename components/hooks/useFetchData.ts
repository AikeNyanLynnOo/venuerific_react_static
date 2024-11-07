import { useRouter } from "next/navigation";

// React
import { useEffect, useState } from "react";

export const useFetchData = ({
  fetcher,
  args,
  deps,
}: {
  fetcher?: any;
  args?: any;
  deps: any[];
}) => {
  const [data, setData] = useState<any>(null);
  const [meta, setMeta] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { status, statusText, success, message, data, meta } =
          await fetcher({
            ...args,
            referer: window.location.href,
            user_agent: window.navigator.userAgent,
          });

        if (!success && status === 401) {
          //401
          return router.push("/login");
        }

        if (data && data.redirect_to) {
          // redirect to
          return router.push(data.redirect_to);
        }

        if (!success) {
          throw new Error(message || "Failed to fetch data");
        }

        setLoading(false);
        setData(data);
        setMeta(meta);
      } catch (error: any) {
        setLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, [...deps]);

  return { data, meta, loading, error };
};
