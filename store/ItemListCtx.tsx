import { createContext, FunctionComponent, useState } from "react";
import {
  ItemAction,
  ItemAmountAction,
  ItemListCtxType,
  ItemListProviderProps,
  ListItemType,
} from "./ItemList.types";
import { listItemArray } from "../utils/data";

const defaultValue: ItemListCtxType = {
  items: [...listItemArray],
  addItem: () => false,
  removeItem: () => {},
  increment: () => {},
  decrement: () => {},
  total: 0,
  itemExists: () => false,
};

export const ItemListCtx = createContext<ItemListCtxType>(defaultValue);

const ItemListProvider: FunctionComponent<ItemListProviderProps> = ({
  children,
}) => {
  const [items, setItems] = useState<ListItemType[]>(defaultValue.items);
  const [total, setTotal] = useState<number>(0);

  const addItem: ItemAction = (item) => {
    if (item.quantity === 0) return false;
    if (!item.costPerItem && item.status === "expenses") {
      alert("You can't add this to expense list without a price!");
      return false;
    }

    if (itemExists(item)) {
      const itemIndex = findIndexByName(item);
      const newItems = [...items];
      newItems[itemIndex].quantity =
        newItems[itemIndex].quantity + item.quantity;
    } else {
      setItems((prevState) => [...prevState, item]);
    }
    calculateTotal();
    return true;
  };
  const itemExists = (item: ListItemType): boolean => {
    const itemExists = items.find((existingItem) => {
      return (
        existingItem.name === item.name && existingItem.status === item.status
      );
    });
    return Boolean(itemExists);
  };
  const filterByName = (item: ListItemType): ListItemType[] =>
    items.filter((i) =>
      i.status === item.status ? i.name !== item.name : item
    );
  const findIndexByName = (item: ListItemType): number =>
    items.findIndex((i) => i.status === item.status && i.name === item.name);

  const removeItem: ItemAction = (item) => {
    const newItems = filterByName(item);
    setItems(newItems);
    calculateTotal();
  };
  const increment: ItemAmountAction = (item, value = 1) => {
    const itemIndex = findIndexByName(item);
    const newItems = items;
    newItems[itemIndex].quantity = newItems[itemIndex].quantity + value;
    setItems(newItems);
    calculateTotal();
  };
  const decrement: ItemAmountAction = (item, value = 1) => {
    const itemIndex = findIndexByName(item);
    let newItems = items;
    if (newItems[itemIndex].quantity <= value) {
      removeItem(item);
      return;
    } else {
      newItems[itemIndex].quantity = newItems[itemIndex].quantity - value;
    }
    setItems(newItems);
    calculateTotal();
  };
  const calculateTotal = () => {
    const totalQuantity = items.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotal(totalQuantity);
  };
  return (
    <ItemListCtx.Provider
      value={{
        items,
        addItem,
        removeItem,
        increment,
        decrement,
        total,
        itemExists,
      }}
    >
      {children}
    </ItemListCtx.Provider>
  );
};

export default ItemListProvider;
