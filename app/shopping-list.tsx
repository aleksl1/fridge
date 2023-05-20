import { FunctionComponent, useContext } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Divider, List, Text } from "react-native-paper";
import AddItemForm from "../src/AddItemForm";
import { ShoppingListCtx } from "../store/shoppingListCtx";
import { spacing } from "../utils/spacing";

const ShoppingList: FunctionComponent = () => {
  const { items } = useContext(ShoppingListCtx);
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
      {items.map((item) => (
        <List.Item
          key={item.name}
          title={item.name}
          description={`amount: ${item.quantity}`}
          left={(props) => <List.Icon {...props} icon="circle" />}
        />
      ))}
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
