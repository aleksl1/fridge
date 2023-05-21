import { FunctionComponent, createContext, useState } from "react";
import { defaultItems } from "../utils/dummyData";

export type ItemStatus =
  | "shoppingList"
  | "fridge"
  | "foodDiary"
  | "itemLibrary";

export type ListItemType = {
  name: string;
  quantity: number;
  status: ItemStatus;
};

type ItemAction = (item: ListItemType) => void;

type ItemAmountAction = (item: ListItemType, value?: number) => void;

type ShoppingListCtxType = {
  items: ListItemType[] | [];
  addItem: ItemAction;
  removeItem: ItemAction;
  increment: ItemAmountAction;
  decrement: ItemAmountAction;
  total: number;
};

type ShoppingListProviderProps = {
  children: JSX.Element;
};

const defaultValue: ShoppingListCtxType = {
  items: defaultItems,
  addItem: (item) => {},
  removeItem: (item) => {},
  increment: (item) => {},
  decrement: (item) => {},
  total: 0,
};

export const ShoppingListCtx = createContext<ShoppingListCtxType>(defaultValue);

const ShoppingListProvider: FunctionComponent<ShoppingListProviderProps> = ({
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
    <ShoppingListCtx.Provider
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
    </ShoppingListCtx.Provider>
  );
};

export default ShoppingListProvider;
