import { ENDPOINTS } from "./utils";

export const getPurchasedItems = async () => {
  const response = await fetch(ENDPOINTS.purchasedItems);
  return await response.json();
};

export const getPurchasedItem = async (id: number) => {
  const response = await fetch(ENDPOINTS.purchasedItem(id));
  return await response.json();
};

export const deletePurchasedItem = async (id: number) => {
  const response = await fetch(ENDPOINTS.purchasedItem(id), {
    method: "DELETE",
  });
  return await response.json();
};
