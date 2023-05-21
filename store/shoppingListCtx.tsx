import {
  FunctionComponent,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";

type ItemAction = (item: ShoppingListItemType) => void;

type ItemAmountAction = (item: ShoppingListItemType, value?: number) => void;

type ShoppingListCtxType = {
  items: ShoppingListItemType[] | [];
  addItem: ItemAction;
  removeItem: ItemAction;
  increment: ItemAmountAction;
  decrement: ItemAmountAction;
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
  items: [
    {
      name: "banana",
      quantity: 4,
    },
    {
      name: "apple",
      quantity: 1,
    },
    {
      name: "pineapple",
      quantity: 11,
    },
  ],
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
  const [items, setItems] = useState<ShoppingListItemType[]>(
    defaultValue.items
  );
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
  const increment: ItemAmountAction = (item, value = 1) => {
    const newItems = items;
    const itemIndex = newItems.findIndex((i) => i.name === item.name);
    newItems[itemIndex].quantity = newItems[itemIndex].quantity + value;
    setItems(newItems);
    calculateTotal();
  };
  const decrement: ItemAmountAction = (item, value = 1) => {
    let newItems = items;
    const itemIndex = newItems.findIndex((i) => i.name === item.name);
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
