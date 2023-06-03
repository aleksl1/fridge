import {QueryKey, useQuery, UseQueryOptions,} from "@tanstack/react-query";
import {keys} from "./queryKeys";
import {getAllProducts} from "../api/api";

const useProducts = (props: UseQueryOptions) => {
    const queryKey: QueryKey = [keys.products];

    const queryOptions = {
        queryFn: getAllProducts,
        ...props,
    };

    return useQuery(queryKey, queryOptions)
};

export default useProducts;

