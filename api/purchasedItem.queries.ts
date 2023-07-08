import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { deletePurchasedItem, getPurchasedItems } from "./purchasedItem";

const keys = {
  purchasedItems: ["purchasedItems"],
};

const usePurchasedItems = () => {
  return useQuery({
    queryKey: keys.purchasedItems,
    queryFn: getPurchasedItems,
  });
};

const useDeletePurchasedItem = (id: number) => {
  return useMutation({
    mutationFn: () => deletePurchasedItem(id),
    onSuccess: async () => {
      const queryClient = new QueryClient();
      await queryClient.invalidateQueries(keys.purchasedItems);
    },
  });
};

export { useDeletePurchasedItem, usePurchasedItems };
