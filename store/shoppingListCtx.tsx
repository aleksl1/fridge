import { FunctionComponent, ReactNode, createContext, useState } from "react";

type ShoppingListCtxType = {
  items: ShoppingListItemType[] | [];
  addItem: (item: ShoppingListItemType) => void;
  removeItem: (item: ShoppingListItemType) => void;
};

type ShoppingListProviderProps = {
  children: JSX.Element;
};

export type ShoppingListItemType = {
  name: string;
  quantity: number;
};

const defaultValue: ShoppingListCtxType = {
  items: [],
  addItem: (item: ShoppingListItemType) => {},
  removeItem: (item: ShoppingListItemType) => {},
};

export const ShoppingListCtx = createContext<ShoppingListCtxType>(defaultValue);

const ShoppingListProvider: FunctionComponent<ShoppingListProviderProps> = ({
  children,
}) => {
  const [items, setItems] = useState<ShoppingListItemType[]>([]);
  const addItem = (item: ShoppingListItemType) => {
    setItems((prevState) => [...prevState, item]);
  };
  const removeItem = (item: ShoppingListItemType) => {
    const newItems = items.filter((i) => i.name !== item.name);
    setItems(newItems);
  };
  return (
    <ShoppingListCtx.Provider
      value={{
        items,
        addItem,
        removeItem,
      }}
    >
      {children}
    </ShoppingListCtx.Provider>
  );
};

export default ShoppingListProvider;
