import { FunctionComponent, useState } from "react";
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  ScrollView,
  // TextInput,
} from "react-native";
import { Button, TextInput, useTheme } from "react-native-paper";
import { spacing } from "../utils/spacing";
import { colors } from "../utils/colors";
import { Controller, useForm } from "react-hook-form";

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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.addItemContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="firstName"
        />
        {errors.firstName && <Text>This is required.</Text>}
        <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
      </View>
      <View style={styles.itemsContainer}>
        {items.map((item) => (
          <Pressable style={styles.listItem}>
            <Text>{item.name}</Text>
            <View style={styles.itemActionsContainer}>
              {/* <Pressable>Delete</Pressable>
              <Pressable>Add to Fridge</Pressable>
              <Pressable>Add to Diary</Pressable> */}
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default ShoppingList;

const styles = StyleSheet.create({
  container: {
    margin: spacing.spacing16,
  },
  itemsContainer: {
    gap: spacing.spacing8,
  },
  listItem: {
    flexDirection: "row",
    alignContent: "space-around",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: colors.link,
    padding: spacing.spacing8,
  },
  itemActionsContainer: {
    flexDirection: "row",
    gap: spacing.spacing8,
  },
  addItemContainer: {
    // flexDirection: "row",
    // flexWrap: "wrap",
    gap: spacing.spacing16,
    marginVertical: spacing.spacing16,
  },
});
