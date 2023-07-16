import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      console.log(response);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
      } else {
        const jsonResponse = await response.json();
        setData(jsonResponse);
        setIsLoading(false);
        setIsError(false);
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, [url]);

  return { data, isLoading, isError };
};
