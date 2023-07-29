import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { deleteBaseItem, getBaseItems } from "./baseItem";

const keys = {
  baseItems: ["baseItems"],
};

const useBaseItems = () => {
  return useQuery({
    queryKey: keys.baseItems,
    queryFn: getBaseItems,
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

export { useDeleteBaseItem, useBaseItems };
