import { useEffect, useState } from "react";
import axios from "axios";

function useGetData(path) {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}${path}`
      );
      setData(response.data);
      setIsPending(false);
    } catch (err) {
      setError(err);
      setIsPending(false);
    }
  };

  useEffect(() => {
    setIsPending(true);
    setError(false);
    getData();
  }, [path]);

  return [data, isPending, error];
}

export default useGetData;
