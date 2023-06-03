import {
  QueryKey,
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import { keys } from "./queryKeys";
import { getFruitsData } from "./api";

export type FruitData = {
  name: string;
};

type FruitsHookResult = {
  fruits: UseQueryResult<FruitData[], unknown>;
  fruitsData: FruitData[] | undefined;
  isFruitsDataLoading: boolean;
  isFruitsQueryError: boolean;
  refetchFruits: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<FruitData[], unknown>>;
};

const useFruits = (props: UseQueryOptions<FruitData[]>): FruitsHookResult => {
  const queryKey: QueryKey = [keys.fruits];

  const queryOptions: UseQueryOptions<FruitData[]> = {
    queryFn: getFruitsData,
    ...props,
  };

  const fruits = useQuery<FruitData[]>(queryKey, queryOptions);

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

