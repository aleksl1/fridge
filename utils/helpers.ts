import { ItemMacro, ItemStatus } from "../store/ItemList.types";

export const setTitleText = (value: ItemStatus) => {
  switch (value) {
    case "foodDiary":
      return "food diary";
    case "fridge":
      return "fridge";
    case "itemLibrary":
      return "item library";
    case "shoppingList":
      return "shopping list";
  }
};

export const calculateCaloriesPer100g = (macrosPer100g: ItemMacro) => {
  const {proteins,fats,carbs} = macrosPer100g;
  if(proteins === 0 && fats === 0 && carbs === 0) {
    return "0"
  }
  const calories = proteins * 4 + fats * 9 + carbs * 4
    return calories;
}