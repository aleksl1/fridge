import {QueryKey, useQuery, UseQueryOptions,} from "@tanstack/react-query";
import {keys} from "./queryKeys";
import {getDummyProducts} from "../api/api";

const useDummyProducts = (props: UseQueryOptions) => {
    const queryKey: QueryKey = [keys.dummyProducts];

    const queryOptions = {
        queryFn: getDummyProducts,
        ...props,
    };

    const dummyProducts = useQuery(queryKey, queryOptions);

    const {data, isLoading, isError, refetch} = dummyProducts;

    return {
        dummyProducts,
        dummyProductsData: data,
        isDummyProductsDataLoading: isLoading,
        isDummyProductsQueryError: isError,
        refetchDummyProducts: refetch,
    };
};

export default useDummyProducts;

