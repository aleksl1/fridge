import { ItemStatus } from "../store/ItemList.types";

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