import { ItemCategory, ItemMacro, ItemStatus } from "../store/ItemList.types";
import { theme } from "./theme";

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
    case "expenses":
      return "expenses list";
  }
};

export const calculateCaloriesFromMacros = ({
  proteins,
  fats,
  carbs,
}: ItemMacro) => {
  const calories = proteins * 4 + fats * 9 + carbs * 4;
  return calories.toFixed(0);
};

export const categoryColors = {
  drink: "#0099ff",
  fruit: "#ffcc00",
  vegetable: "#66cc33",
  meat: "#cc0000",
};
export const getBorderColor = (category: ItemCategory | undefined) => {
  switch (category) {
    case "drink":
      return categoryColors["drink"];
    case "vegetable":
      return categoryColors["vegetable"];
    case "fruit":
      return categoryColors["fruit"];
    case "meat":
      return categoryColors["meat"];
    default:
      return theme.colors.primary;
  }
};
