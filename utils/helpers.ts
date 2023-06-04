import {Href} from "expo-router/build/link/href";
import {ItemMacro, ItemStatus} from "../store/ItemList.types";

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

export const calculateCaloriesFromMacros = ({proteins, fats, carbs}: ItemMacro) => {
    const calories = proteins * 4 + fats * 9 + carbs * 4;
    return calories.toFixed(0)
};

export const getRouteFromStatus = (status: ItemStatus): Href => {
    switch (status) {
        case "fridge":
            return "/fridge"
        case "foodDiary":
            return "/food-diary"
        case "shoppingList":
            return "/shopping-list"
    }
    return ""
}