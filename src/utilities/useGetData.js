import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "./server";

function useGetData(path) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get(`${server}${path}`);
      setError(false);
      setData(response.data);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, error, getData];
}

export default useGetData;
