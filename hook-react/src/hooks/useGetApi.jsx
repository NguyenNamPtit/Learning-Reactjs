import axios from "axios";
import React, { useEffect, useState } from "react";

const useGetApi = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    const getApi = async () => {
      const res = await axios.get(url);
      setData(res.data);
    };
    getApi();
  }, []);
  return data;
};

export default useGetApi;
