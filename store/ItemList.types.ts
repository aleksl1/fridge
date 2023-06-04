export type ItemStatus =
    | "shoppingList"
    | "fridge"
    | "foodDiary"
    | "itemLibrary"
    | "expenses"

export type ItemMacro = {
    proteins: number;
    carbs: number;
    fats: number;
};

export type ListItemType = {
    name: string;
    quantity: number;
    status: ItemStatus;
    costPerItem?: number;
    macrosPerPiece: ItemMacro;
    caloriesPerPiece: number;
    diaryDate?: Date
};

export type ItemAction = (item: ListItemType) => void;

export type ItemAmountAction = (item: ListItemType, value?: number) => void;

export type ItemListCtxType = {
    items: ListItemType[];
    addItem: ItemAction;
    removeItem: ItemAction;
    increment: ItemAmountAction;
    decrement: ItemAmountAction;
    total: number;
    itemExists: (item: ListItemType) => boolean
};

export type ItemListProviderProps = {
    children: JSX.Element;
};