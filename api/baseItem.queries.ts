import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { deleteBaseItem, getBaseItem, getBaseItems } from "./baseItem";

const keys = {
  baseItems: ["baseItems"],
  baseItem: (id: number) => [...keys.baseItems, id],
};

const useBaseItems = () => {
  return useQuery({
    queryKey: keys.baseItems,
    queryFn: getBaseItems,
  });
};

const useBaseItem = (id: number) => {
  return useQuery({
    queryKey: keys.baseItem(id),
    queryFn: () => getBaseItem(id),
  });
};

const useDeleteBaseItem = (id: number) => {
  return useMutation({
    mutationFn: () => deleteBaseItem(id),
    onSuccess: async () => {
      const queryClient = new QueryClient();
      await queryClient.invalidateQueries(keys.baseItems);
    },
  });
};

export { useDeleteBaseItem, useBaseItems, useBaseItem };
