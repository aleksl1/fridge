import { ENDPOINTS } from "./utils";

export const getBaseItems = async () => {
  const response = await fetch(ENDPOINTS.baseItems);
  return await response.json();
};

export const getBaseItem = async (id: number) => {
  const response = await fetch(ENDPOINTS.baseItem(id));
  return await response.json();
};

export const deleteBaseItem = async (id: number) => {
  const response = await fetch(ENDPOINTS.baseItem(id), { method: "DELETE" });
  return await response.json();
};
