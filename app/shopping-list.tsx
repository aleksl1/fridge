import { FunctionComponent, useContext, useMemo, useState } from "react";
import { ScrollView, StyleSheet, View, Alert } from "react-native";
import {
  Badge,
  Button,
  Dialog,
  Divider,
  IconButton,
  List,
  Portal,
  Text,
} from "react-native-paper";
import AddItemForm from "../src/AddItemForm";
import {
  ShoppingListCtx,
  ShoppingListItemType,
} from "../store/shoppingListCtx";
import { spacing } from "../utils/spacing";

type PressedItemType = ShoppingListItemType & { max: number };

const ShoppingList: FunctionComponent = () => {
  const { items, increment, decrement, removeItem, total } =
    useContext(ShoppingListCtx);
  const [visible, setVisible] = useState(false);
  const [pressedItem, setPressedItem] = useState<PressedItemType>({
    name: "",
    quantity: 0,
    max: 0,
  });

  const showDialog = (item: PressedItemType) => {
    setPressedItem(item);
    setVisible(true);
  };

  const hideDialog = () => setVisible(false);

  const incrementPressed = (item: PressedItemType) => {
    if (item.max === pressedItem?.quantity) return;
    setPressedItem((prevState) => {
      const newState = { ...prevState, quantity: prevState?.quantity + 1 };
      return newState;
    });
  };

  const decrementPressed = (item: PressedItemType) => {
    if (pressedItem?.quantity === 1) return;
    setPressedItem((prevState) => {
      const newState = { ...prevState, quantity: prevState?.quantity - 1 };
      return newState;
    });
  };

  const shoppingList = useMemo(
    () =>
      items.map((item) => {
        return (
          <List.Item
            key={item.name}
            title={item.name}
            onPress={() => {}}
            description={`amount: ${item.quantity}`}
            style={{ paddingEnd: 0 }}
            right={() => (
              <View style={{ flexDirection: "row" }}>
                <IconButton icon="minus" onPress={() => decrement(item)} />
                <IconButton icon="plus" onPress={() => increment(item)} />
                <IconButton
                  icon="delete"
                  iconColor="red"
                  onPress={() => {
                    removeItem(item);
                  }}
                />
                <IconButton
                  icon="fridge"
                  iconColor="blue"
                  onPress={() => showDialog({ ...item, max: item.quantity })}
                />
              </View>
            )}
          />
        );
      }),
    [items, increment, decrement, removeItem, total]
  );
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="titleMedium">Add new item to list:</Text>
      <AddItemForm />
      <Divider bold horizontalInset />
      <Text variant="titleMedium">Pick from your items:</Text>
      {items.map((item) => (
        <List.Item
          key={item.name}
          title={item.name}
          left={(props) => <List.Icon {...props} icon="circle" />}
        />
      ))}
      <Divider bold horizontalInset />
      <Text variant="titleMedium">Your shopping list:</Text>
      {shoppingList}
      <Portal>
        {pressedItem && (
          <Dialog
            visible={visible}
            onDismiss={hideDialog}
            style={{
              maxWidth: 400,
              marginHorizontal: "auto",
              paddingHorizontal: 50,
            }}
          >
            <Dialog.Content>
              <View style={{ flexDirection: "row" }}>
                <IconButton
                  icon="minus"
                  onPress={() => decrementPressed(pressedItem)}
                  style={{ paddingTop: 8 }}
                />
                <Badge size={40}>{pressedItem.quantity}</Badge>
                <IconButton
                  icon="plus"
                  onPress={() => incrementPressed(pressedItem)}
                  style={{ paddingTop: 8 }}
                />
              </View>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                onPress={hideDialog}
                mode="contained"
                style={{ paddingHorizontal: 16 }}
              >
                {`Put ${pressedItem.quantity} of ${pressedItem.name} in Your fridge!`}
              </Button>
            </Dialog.Actions>
          </Dialog>
        )}
      </Portal>
    </ScrollView>
  );
};

export default ShoppingList;

const styles = StyleSheet.create({
  container: {
    margin: spacing.spacing16,
    gap: spacing.spacing16,
  },
});
