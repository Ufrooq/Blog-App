import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const abortController = new AbortController();
  let ref = useRef();

  const fetchData = async () => {
    try {
      const response = await fetch(url, { signal: abortController.signal });
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
      if (error.name === "AbortError") {
        console.log("Fetc Aborted --->");
      } else {
        setIsError(true);
        setIsLoading(false);
      }
    }
  };
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, isLoading, isError };
};
