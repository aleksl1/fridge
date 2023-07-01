const API_URL = "https://fridge-api-o54o.onrender.com/api";
const ENDPOINTS = {
  baseItems: `${API_URL}/baseItems`,
  baseItem: (id: number) => `${API_URL}/baseItems/${id}`,
};
export const getBaseItems = async () => {
  const response = await fetch(ENDPOINTS.baseItems);
  return await response.json();
};

export const getBaseItem = async (id: number) => {
  const response = await fetch(ENDPOINTS.baseItem(id));
  return await response.json();
};

// export const createBaseItem = async () => {
//   const response = await fetch(ENDPOINTS.baseItems, {method: "POST"});
//   return await response.json();
// };
//
// export const updateBaseItem = async () => {
//   const response = await fetch(ENDPOINTS.baseItems, {method: "PUT"});
//   return await response.json();
// };

export const deleteBaseItem = async (id: number) => {
  const response = await fetch(ENDPOINTS.baseItems, { method: "DELETE" });
  return await response.json();
};
