import { FunctionComponent, useState } from "react";
import {
  Pressable,
  View,
  StyleSheet,
  ScrollView,
  // TextInput,
} from "react-native";
import {
  Button,
  TextInput,
  useTheme,
  Text,
  Divider,
  List,
} from "react-native-paper";
import { spacing } from "../utils/spacing";
import { colors } from "../utils/colors";
import { Controller, useForm } from "react-hook-form";
import AddItemForm from "../src/AddItemForm";

interface ShoppingListProps {}

type ShoppingListItemType = {
  name: string;
  qty: number;
};

const dummyItems: ShoppingListItemType[] = [
  { name: "chickem", qty: 1 },
  { name: "banana", qty: 5 },
  { name: "coke zero", qty: 3 },
];

const ShoppingList: FunctionComponent<ShoppingListProps> = () => {
  const [items, setItems] = useState(dummyItems);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="titleMedium">Add new item to list:</Text>
      <AddItemForm />
      <Divider bold horizontalInset />
      <Text variant="titleMedium">Pick from your items:</Text>
      {items.map((item) => (
        <List.Item
          title={item.name}
          left={(props) => <List.Icon {...props} icon="circle" />}
        />
      ))}
      <Divider bold horizontalInset />
      <Text variant="titleMedium">Your shopping list:</Text>
      {items.map((item) => (
        <List.Item
          title={item.name}
          description={`amount: ${item.qty}`}
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
