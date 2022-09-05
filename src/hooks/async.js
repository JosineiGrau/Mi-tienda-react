import { useEffect, useState } from "react";

export const useAsync = (asyncFn, dependencias = []) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [dataCarrusel, setDataCarrusel] = useState();

  useEffect(() => {
    setIsLoading(true);
    asyncFn()
      .then((products) => {
        setData(products);
        setDataCarrusel(products.slice(0, 5));
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, dependencias);

  return {
    data,
    error,
    isLoading,
    dataCarrusel,
  };
};
