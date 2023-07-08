const API_URL = "https://fridge-api-o54o.onrender.com/api";
export const ENDPOINTS = {
  baseItems: `${API_URL}/baseItems`,
  baseItem: (id: number) => `${API_URL}/baseItems/${id}`,
  shoppingListItems: `${API_URL}/shoppingListItems`,
  shoppingListItem: (id: number) => `${API_URL}/shoppingListItems/${id}`,
  purchasedItems: `${API_URL}/purchasedItems`,
  purchasedItem: (id: number) => `${API_URL}/purchasedItems/${id}`,
};
