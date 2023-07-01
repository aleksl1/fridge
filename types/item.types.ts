type BaseItem = {
  id: number;
  name: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  carbs: number;
  fats: number;
  proteins: number;
  piecesPer100g: number;
};

type UnitType = "pcs" | "gram";

type ShoppingListItem = BaseItem & {
  quantity: number;
  unit: UnitType;
};

type PurchasedItem = ShoppingListItem & {
  price: number;
  purchaseDate: string;
  wasUsed: boolean; // if wasUsed is false item is in the fridge, if it is true item is in food diary, in both cases it is in expenses
};
