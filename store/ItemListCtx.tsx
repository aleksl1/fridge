import { FunctionComponent, createContext, useState } from "react";
import { defaultItems } from "../utils/dummyData";
import {
  ItemAction,
  ItemAmountAction,
  ItemListCtxType,
  ItemListProviderProps,
  ListItemType,
} from "./ItemList.types";

const defaultValue: ItemListCtxType = {
  items: defaultItems,
  addItem: (item) => {},
  removeItem: (item) => {},
  increment: (item) => {},
  decrement: (item) => {},
  total: 0,
};

export const ItemListCtx = createContext<ItemListCtxType>(defaultValue);

const ItemListProvider: FunctionComponent<ItemListProviderProps> = ({
  children,
}) => {
  const [items, setItems] = useState<ListItemType[]>(defaultValue.items);
  const [total, setTotal] = useState<number>(0);
  const addItem: ItemAction = (item) => {
    setItems((prevState) => [...prevState, item]);
    calculateTotal();
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
      }}
    >
      {children}
    </ItemListCtx.Provider>
  );
};

export default ItemListProvider;
