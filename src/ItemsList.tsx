import { FunctionComponent, useContext, useMemo, useState } from "react";
import { View } from "react-native";
import { IconButton, List, Portal, useTheme } from "react-native-paper";
import { ItemStatus, ListItemType } from "../store/ItemList.types";
import { ItemListCtx } from "../store/ItemListCtx";
import AddToNextListDialog from "./AddToNextListDialog";
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
  const {
    colors: { primary, error },
  } = useTheme();
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
      items.map((item, index) => {
        if (item.status !== type) return;
        return (
          <List.Item
            key={`${item.name}-${index}`}
            title={item.name}
            onPress={() => showPreview(item)}
            description={`amount: ${item.quantity}`}
            style={{ paddingEnd: 0 }}
            right={() => (
              <View style={{ flexDirection: "row" }}>
                <IconButton icon="minus" onPress={() => decrement(item)} />
                <IconButton icon="plus" onPress={() => increment(item)} />
                <IconButton
                  icon="delete"
                  iconColor={error}
                  onPress={() => {
                    removeItem(item);
                  }}
                />
                {item.status === "shoppingList" && (
                  <IconButton
                    icon="fridge"
                    iconColor={primary}
                    onPress={() =>
                      showAddToNextListDialog({ ...item, max: item.quantity })
                    }
                  />
                )}
                {item.status === "fridge" && (
                  <IconButton
                    icon="food"
                    iconColor={primary}
                    onPress={() =>
                      showAddToNextListDialog({ ...item, max: item.quantity })
                    }
                  />
                )}
              </View>
            )}
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
