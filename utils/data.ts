import { ListItemType } from "../store/ItemList.types";

export const listItemArray: ListItemType[] = [
  {
    name: "Apple",
    quantity: 1,
    status: "itemLibrary",
    costPerItem: 1.5,
    macrosPerPiece: { proteins: 0.5, carbs: 20, fats: 0.3 },
    category: "fruit",
  },
  {
    name: "Broccoli",
    quantity: 1,
    status: "itemLibrary",
    macrosPerPiece: { proteins: 2, carbs: 6, fats: 0.5 },
    category: "vegetable",
  },
  {
    name: "Mineral Water",
    quantity: 1,
    status: "itemLibrary",
    costPerItem: 2,
    macrosPerPiece: { proteins: 0, carbs: 0, fats: 0 },
    category: "drink",
  },
  {
    name: "Chicken",
    quantity: 1,
    status: "itemLibrary",
    costPerItem: 5,
    macrosPerPiece: { proteins: 25, carbs: 0, fats: 10 },
    category: "meat",
  },
];
