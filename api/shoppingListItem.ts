import { ENDPOINTS } from "./utils";

export const getShoppingListItems = async () => {
  const response = await fetch(ENDPOINTS.shoppingListItems);
  return await response.json();
};

export const getShoppingListItem = async (id: number) => {
  const response = await fetch(ENDPOINTS.shoppingListItem(id));
  return await response.json();
};

export const deleteShoppingListItem = async (id: number) => {
  const response = await fetch(ENDPOINTS.shoppingListItem(id), {
    method: "DELETE",
  });
  return await response.json();
};
