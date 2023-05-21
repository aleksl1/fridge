import { ListItemType } from "../store/shoppingListCtx"

export const productsLibrary = [
  {
    "name": "Chleb pełnoziarnisty",
    "makro": {"b": 12, "t": 3, "w": 45}
  },
  {
    "name": "Jajka",
    "makro": {"b": 13, "t": 11, "w": 1}
  },
  {
    "name": "Mleko pełne",
    "makro": {"b": 3, "t": 3.5, "w": 5}
  },
  {
    "name": "Wołowina",
    "makro": {"b": 26, "t": 17, "w": 0}
  },
  {
    "name": "Tuńczyk w wodzie",
    "makro": {"b": 29, "t": 1, "w": 0}
  },
  {
    "name": "Makaron pełnoziarnisty",
    "makro": {"b": 14, "t": 2, "w": 75}
  },
  {
    "name": "Ryż biały",
    "makro": {"b": 7, "t": 0.5, "w": 77}
  },
  {
    "name": "Oliwa z oliwek",
    "makro": {"b": 0, "t": 100, "w": 0}
  },
  {
    "name": "Banany",
    "makro": {"b": 1, "t": 0, "w": 23}
  },
  {
    "name": "Jogurt naturalny",
    "makro": {"b": 5, "t": 2, "w": 7}
  },
  {
    "name": "Pomarańcze",
    "makro": {"b": 1, "t": 0, "w": 12}
  },
  {
    "name": "Marchew",
    "makro": {"b": 1, "t": 0, "w": 6}
  },
  {
    "name": "Brokuły",
    "makro": {"b": 3, "t": 0.4, "w": 7}
  },
  {
    "name": "Ser żółty",
    "makro": {"b": 25, "t": 33, "w": 3}
  },
  {
    "name": "Orzechy włoskie",
    "makro": {"b": 14, "t": 63, "w": 14}
  },
  {
    "name": "Chudy twaróg",
    "makro": {"b": 12, "t": 0.2, "w": 2}
  },
  {
    "name": "Kurczak (bez skóry)",
    "makro": {"b": 23, "t": 1, "w": 0}
  },
  {
    "name": "Jabłka",
    "makro": {"b": 0, "t": 0, "w": 14}
  }]

export const defaultItems: ListItemType[] = [
  {
    name: "banana",
    quantity: 4,
    status: "fridge",
  },
  {
    name: "apple",
    quantity: 1,
    status: "shoppingList",
  },
  {
    name: "pineapple",
    quantity: 11,
    status: "fridge",
  },
  {
    name: "milk",
    quantity: 4,
    status: "shoppingList",
  },
  {
    name: "juice",
    quantity: 1,
    status: "fridge",
  },
  {
    name: "water",
    quantity: 11,
    status: "shoppingList",
  },
  {
    name: "water",
    quantity: 2,
    status: "foodDiary",
  },
  {
    name: "chicken",
    quantity: 1,
    status: "foodDiary",
  },
  {
    name: "lemon",
    quantity: 11,
    status: "foodDiary",
  },
]
