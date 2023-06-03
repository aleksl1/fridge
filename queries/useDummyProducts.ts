import {QueryKey, useQuery, UseQueryOptions,} from "@tanstack/react-query";
import {keys} from "./queryKeys";
import {getFruitsData} from "./api";

const useDummyProducts = (props: UseQueryOptions) => {
    const queryKey: QueryKey = [keys.fruits];

    const queryOptions = {
        queryFn: getFruitsData,
        ...props,
    };

    const fruits = useQuery(queryKey, queryOptions);

    const { data, isLoading, isError, refetch } = fruits;

    return {
        fruits,
        fruitsData: data,
        isFruitsDataLoading: isLoading,
        isFruitsQueryError: isError,
        refetchFruits: refetch,
    };
};

export default useDummyProducts;

