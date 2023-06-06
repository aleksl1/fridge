import {ListItemType} from "../store/ItemList.types";

export const libraryItems: ListItemType[] = [
    {
        name: "banana",
        quantity: 1,
        status: "itemLibrary",
        costPerItem: 0.5,
        macrosPerPiece: {proteins: 1, carbs: 20, fats: 0.5},
        category: "fruit"
    },
    {
        name: "apple",
        quantity: 1,
        status: "itemLibrary",
        costPerItem: 0.8,
        macrosPerPiece: {proteins: 0.5, carbs: 14, fats: 0.3},
        category: "fruit"
    },
    {
        name: "carrot",
        quantity: 1,
        status: "itemLibrary",
        costPerItem: 0.5,
        macrosPerPiece: {proteins: 0.5, carbs: 3, fats: 0},
        category: "vegetable"
    },
    {
        name: "pineapple",
        quantity: 1,
        status: "itemLibrary",
        costPerItem: 3.2,
        macrosPerPiece: {proteins: 0.5, carbs: 13, fats: 0.1},
        category: "fruit"
    },
    {
        name: "milk",
        quantity: 1,
        status: "itemLibrary",
        costPerItem: 2.5,
        macrosPerPiece: {proteins: 3, carbs: 5, fats: 2},
        category: "drink"
    },
    {
        name: "juice",
        quantity: 1,
        status: "itemLibrary",
        costPerItem: 4.6,
        macrosPerPiece: {proteins: 0.5, carbs: 15, fats: 0.2},
        category: "drink"
    },
    {
        name: "water",
        quantity: 1,
        status: "itemLibrary",
        costPerItem: 0.2,
        macrosPerPiece: {proteins: 0, carbs: 0, fats: 0},
        category: "drink"
    },
    {
        name: "chicken",
        quantity: 1,
        status: "itemLibrary",
        costPerItem: 8.5,
        macrosPerPiece: {proteins: 20, carbs: 0, fats: 2},
        category: "meat",
    },
    {
        name: "lemon",
        quantity: 1,
        status: "itemLibrary",
        costPerItem: 1.2,
        macrosPerPiece: {proteins: 1, carbs: 9, fats: 0},
        category: "fruit"
    },
];
