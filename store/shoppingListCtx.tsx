import {
  FunctionComponent,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";

type ItemAction = (item: ShoppingListItemType) => void;

type ShoppingListCtxType = {
  items: ShoppingListItemType[] | [];
  addItem: ItemAction;
  removeItem: ItemAction;
  increment: ItemAction;
  decrement: ItemAction;
  total: number;
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
  const [items, setItems] = useState<ShoppingListItemType[]>([]);
  const [total, setTotal] = useState<number>(0);
  const addItem: ItemAction = (item) => {
    setItems((prevState) => [...prevState, item]);
    calculateTotal();
  };
  const removeItem: ItemAction = (item) => {
    const newItems = items.filter((i) => i.name !== item.name);
    setItems(newItems);
    calculateTotal();
  };
  const increment: ItemAction = (item) => {
    const newItems = items;
    const itemIndex = newItems.findIndex((i) => i.name === item.name);
    newItems[itemIndex].quantity = newItems[itemIndex].quantity + 1;
    console.log("incr", newItems, itemIndex);
    setItems(newItems);
    calculateTotal();
  };
  const decrement: ItemAction = (item) => {
    let newItems = items;
    const itemIndex = newItems.findIndex((i) => i.name === item.name);
    if (newItems[itemIndex].quantity === 1) {
      newItems = items.filter((i) => i.name !== item.name);
    } else {
      newItems[itemIndex].quantity = newItems[itemIndex].quantity - 1;
      console.log("dec", newItems, itemIndex);
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
