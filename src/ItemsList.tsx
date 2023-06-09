import {
  FunctionComponent,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { StyleProp, TextStyle, View } from "react-native";
import { DataTable, Portal, Text } from "react-native-paper";
import { ItemStatus, ListItemType } from "../store/ItemList.types";
import { ItemListCtx } from "../store/ItemListCtx";
import AddToNextListDialog from "./AddToNextListDialog";
import CustomListItem from "./CustomListItem";
import ItemPreviewDialog from "./ItemPreviewDialog";
import FoodDiaryListItem from "./FoodDiaryListItem";
import { spacing } from "../utils/spacing";
import { calculateCaloriesFromMacros } from "../utils/helpers";
import ExpensesListItem from "./ExpensesListItem";
import { CURRENCY } from "../utils/variables";

export type PressedItemType = ListItemType & { max: number };

type ItemListProps = {
  type: ItemStatus;
};

const initialTotalCalories = { calories: "", fats: 0, proteins: 0, carbs: 0 };

const ItemList: FunctionComponent<ItemListProps> = ({ type }) => {
  const { items, increment, decrement, removeItem, total } =
    useContext(ItemListCtx);
  const [addToNextListVisible, setAddToNextListVisible] = useState(false);
  const [pressedPreview, setPressedPreview] = useState<ListItemType>();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [pressedItem, setPressedItem] = useState<PressedItemType>(
    {} as PressedItemType
  );
  const [totalCalories, setTotalCalories] = useState(initialTotalCalories);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const { calories, fats, proteins, carbs } = totalCalories;
  const showAddToNextListDialog = (item: PressedItemType) => {
    setPressedItem(item);
    setAddToNextListVisible(true);
  };

  const showPreview = (item: ListItemType) => {
    setPressedPreview(item);
    setPreviewVisible(true);
  };

  const hideAddToNextListDialog = () => setAddToNextListVisible(false);

  const hidePreview = () => setPreviewVisible(false);

  const incrementPressed = (item: PressedItemType) => {
    if (item.max === pressedItem?.quantity) return;
    setPressedItem((prevState) => ({
      ...prevState,
      quantity: prevState?.quantity + 1,
    }));
  };

  const decrementPressed = () => {
    if (pressedItem?.quantity === 1) return;
    setPressedItem((prevState) => ({
      ...prevState,
      quantity: prevState?.quantity - 1,
    }));
  };

  const itemList = useMemo(
    () =>
      items.map((item, index) => {
        const { status, costPerItem, name, quantity } = item;
        const isExpense =
          Boolean(costPerItem) &&
          type === "expenses" &&
          status !== "itemLibrary" &&
          status !== "shoppingList";
        if (!isExpense && status !== type) return;
        if (!isExpense && status === "foodDiary") {
          const date = item.diaryDate?.toLocaleDateString();
          const prevItemDate = items[index - 1].diaryDate?.toLocaleDateString();
          const showDate = date !== prevItemDate || index === 0;
          return (
            <View
              key={`${item.name}-${item.status}`}
              style={{ gap: spacing.spacing8, marginTop: spacing.spacing16 }}
            >
              {showDate && (
                <Text variant="titleSmall" style={{ fontWeight: "bold" }}>
                  Your diary on {date}
                </Text>
              )}
              <FoodDiaryListItem
                item={item}
                onItemPress={() => showPreview(item)}
                onMinusPress={() => decrement(item)}
                onPlusPress={() => increment(item)}
                onDeletePress={() => removeItem(item)}
                onAddToNextListPress={() =>
                  showAddToNextListDialog({ ...item, max: item.quantity })
                }
              />
            </View>
          );
        }
        if (isExpense)
          return (
            <ExpensesListItem
              key={`${name}-${status}`}
              item={item}
              onItemPress={() => {}}
              onAddToNextListPress={() => {}}
            />
          );
        return (
          <CustomListItem
            key={`${name}-${status}`}
            item={item}
            onItemPress={() => showPreview(item)}
            onMinusPress={() => decrement(item)}
            onPlusPress={() => increment(item)}
            onDeletePress={() => removeItem(item)}
            onAddToNextListPress={() =>
              showAddToNextListDialog({ ...item, max: quantity })
            }
          />
        );
      }),
    [items, increment, decrement, removeItem, total]
  );

  useEffect(() => {
    if (type === "foodDiary") {
      const diaryItems = items.filter((item) => item.status === "foodDiary");
      let p = 0;
      let c = 0;
      let f = 0;
      diaryItems.forEach(
        ({ macrosPerPiece: { proteins, fats, carbs }, quantity }) => {
          p = p + proteins * quantity;
          c = c + carbs * quantity;
          f = f + fats * quantity;
        }
      );
      setTotalCalories({
        calories: calculateCaloriesFromMacros({
          proteins: p,
          fats: f,
          carbs: c,
        }),
        proteins: p,
        fats: f,
        carbs: c,
      });
    }
    if (type === "expenses") {
      let totalExpenses = 0;
      items.forEach(({ status, quantity, costPerItem }) => {
        if (
          status !== "shoppingList" &&
          status !== "itemLibrary" &&
          costPerItem
        ) {
          totalExpenses = totalExpenses + costPerItem * quantity;
        }
      });
      setTotalExpenses(totalExpenses);
    }
  }, [items, total]);

  const caloriesSummary = useMemo(() => {
    const cellTextStyle: StyleProp<TextStyle> = { fontWeight: "bold" };
    return (
      <DataTable.Row>
        <DataTable.Cell textStyle={cellTextStyle} style={{ flex: 2 }}>
          Total calories:
        </DataTable.Cell>
        <DataTable.Cell textStyle={cellTextStyle} numeric>
          {calories}
        </DataTable.Cell>
        <DataTable.Cell textStyle={cellTextStyle} numeric>
          {fats}
        </DataTable.Cell>
        <DataTable.Cell textStyle={cellTextStyle} numeric>
          {proteins}
        </DataTable.Cell>
        <DataTable.Cell textStyle={cellTextStyle} numeric>
          {carbs}
        </DataTable.Cell>
      </DataTable.Row>
    );
  }, [totalCalories]);

  const expenseSummary = useMemo(() => {
    return (
      <Text variant="titleLarge" style={{ fontWeight: "bold" }}>
        Your total expenses: {totalExpenses} {CURRENCY}
      </Text>
    );
  }, [totalExpenses]);

  return (
    <View style={{ gap: spacing.spacing8, marginBottom: spacing.spacing16 }}>
      {type === "expenses" && expenseSummary}
      {itemList}
      {type === "foodDiary" && caloriesSummary}
      <Portal>
        {pressedItem && (
          <AddToNextListDialog
            hideDialog={hideAddToNextListDialog}
            visible={addToNextListVisible}
            incrementPressed={incrementPressed}
            decrementPressed={decrementPressed}
            type={type}
            pressedItem={pressedItem}
          />
        )}
        {pressedPreview && (
          <ItemPreviewDialog
            visible={previewVisible}
            hideDialog={hidePreview}
            pressedItem={pressedPreview}
          />
        )}
      </Portal>
    </View>
  );
};

export default ItemList;
