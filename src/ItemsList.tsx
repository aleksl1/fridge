import { FunctionComponent, useContext, useMemo, useState } from "react";
import { View } from "react-native";
import { Portal, useTheme } from "react-native-paper";
import { ItemStatus, ListItemType } from "../store/ItemList.types";
import { ItemListCtx } from "../store/ItemListCtx";
import AddToNextListDialog from "./AddToNextListDialog";
import CustomListItem from "./CustomListItem";
import ItemPreviewDialog from "./ItemPreviewDialog";

export type PressedItemType = ListItemType & { max: number };

type ItemListProps = {
  type: ItemStatus;
};

const ItemList: FunctionComponent<ItemListProps> = ({ type }) => {
  const { items, increment, decrement, removeItem, total, addItem } =
    useContext(ItemListCtx);
  const [addToNextListVisible, setAddToNextListVisible] = useState(false);
  const [pressedPreview, setPressedPreview] = useState<ListItemType>();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [pressedItem, setPressedItem] = useState<PressedItemType>({
    name: "",
    quantity: 0,
    status: type,
    max: 0,
  });
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
    setPressedItem((prevState) => {
      const newState = { ...prevState, quantity: prevState?.quantity + 1 };
      return newState;
    });
  };

  const decrementPressed = () => {
    if (pressedItem?.quantity === 1) return;
    setPressedItem((prevState) => {
      const newState = { ...prevState, quantity: prevState?.quantity - 1 };
      return newState;
    });
  };

  const itemList = useMemo(
    () =>
      items.map((item) => {
        if (item.status !== type) return;
        return (
          <CustomListItem
            key={`${item.name}-${item.status}`}
            item={item}
            onItemPress={() => showPreview(item)}
            // onMinusPress={() => decrement(item)}
            // onPlusPress={() => increment(item)}
            onDeletePress={() => {
              removeItem(item);
            }}
            onAddToNextListPress={() =>
              showAddToNextListDialog({ ...item, max: item.quantity })
            }
          />
        );
      }),
    [items, increment, decrement, removeItem, total]
  );
  return (
    <View>
      {itemList}
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
