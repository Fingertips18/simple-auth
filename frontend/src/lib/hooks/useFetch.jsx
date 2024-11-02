import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

const useFetch = (fetcher) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleFetch = useCallback(async () => {
    setLoading(true);

    try {
      const result = await fetcher();
      setData(result);
      toast.success(result.message);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  }, [fetcher]);

  useEffect(() => handleFetch, [handleFetch]);

  return { loading, data };
};

export { useFetch };
