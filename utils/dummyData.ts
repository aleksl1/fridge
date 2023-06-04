import {ListItemType} from "../store/ItemList.types";

export const libraryItems: ListItemType[] = [
    {
        name: "banana",
        quantity: 4,
        status: "itemLibrary",
        costPerItem: 0.5,
        macrosPerPiece: {proteins: 1, carbs: 20, fats: 0.5},
    },
    {
        name: "apple",
        quantity: 1,
        status: "itemLibrary",
        costPerItem: 0.8,
        macrosPerPiece: {proteins: 0.5, carbs: 14, fats: 0.3},
    },
    {
        name: "pineapple",
        quantity: 11,
        status: "itemLibrary",
        costPerItem: 3.2,
        macrosPerPiece: {proteins: 0.5, carbs: 13, fats: 0.1},
    },
    {
        name: "milk",
        quantity: 4,
        status: "itemLibrary",
        costPerItem: 2.5,
        macrosPerPiece: {proteins: 3, carbs: 5, fats: 2},
    },
    {
        name: "juice",
        quantity: 1,
        status: "itemLibrary",
        costPerItem: 4.6,
        macrosPerPiece: {proteins: 0.5, carbs: 15, fats: 0.2},
    },
    {
        name: "water",
        quantity: 11,
        status: "itemLibrary",
        costPerItem: 0.2,
        macrosPerPiece: {proteins: 0, carbs: 0, fats: 0},
    },
    {
        name: "chicken",
        quantity: 1,
        status: "itemLibrary",
        costPerItem: 8.5,
        macrosPerPiece: {proteins: 20, carbs: 0, fats: 2},
    },
    {
        name: "lemon",
        quantity: 11,
        status: "itemLibrary",
        costPerItem: 1.2,
        macrosPerPiece: {proteins: 1, carbs: 9, fats: 0},
    },
];
