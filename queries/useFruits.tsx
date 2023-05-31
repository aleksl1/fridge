import { useQuery } from "@tanstack/react-query";
import { keys } from "./queryKeys";
import { getFruitsData } from "./api";

const useFruits = () => {
  const fruits = useQuery({
    queryKey: [keys.fruits],
    queryFn: getFruitsData,
  });
  const { data, isLoading, isError, refetch } = fruits;
  return {
    fruits,
    fruitsData: data,
    isFruitsDataLoading: isLoading,
    isFruitsQueryError: isError,
    refetchFruits: refetch,
  };
};

export default useFruits;
