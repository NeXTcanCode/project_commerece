import { useState, useEffect } from "react";

function useGetData(x) {
  const [data, setData] = useState([]);

  useEffect(
    function () {
      async function load_get_data() {
        let get_products = await x();
        return setData(get_products);
      }
      load_get_data();
    },
    [x]
  );

  return { data };
}

export default useGetData;
