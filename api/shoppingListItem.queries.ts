import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteShoppingListItem,
  getShoppingListItems,
} from "./shoppingListItem";

const keys = {
  shoppingListItems: ["shoppingListItems"],
};

const useShoppingListItems = () => {
  return useQuery({
    queryKey: keys.shoppingListItems,
    queryFn: getShoppingListItems,
  });
};

const useDeleteShoppingListItem = (id: number) => {
  return useMutation({
    mutationFn: () => deleteShoppingListItem(id),
    onSuccess: async () => {
      const queryClient = new QueryClient();
      await queryClient.invalidateQueries(keys.shoppingListItems);
    },
  });
};

export { useDeleteShoppingListItem, useShoppingListItems };
