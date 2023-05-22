import { FunctionComponent, useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  TextInput,
  Text,
  HelperText,
  SegmentedButtons,
  Divider,
} from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { spacing } from "../utils/spacing";
import { ItemListCtx } from "../store/ItemListCtx";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ItemMacro, ItemStatus } from "../store/ItemList.types";

type ItemMacroForm = {
  proteins: string;
  carbs: string;
  fats: string;
};

const macroInputs: (keyof ItemMacroForm)[] = ["proteins", "fats", "carbs"];

type AddItemForm = {
  name: string;
  quantity: string;
  status: ItemStatus;
  cost: string;
} & ItemMacroForm;

const setTitleText = (value: ItemStatus) => {
  switch (value) {
    case "foodDiary":
      return "food diary";
    case "fridge":
      return "fridge";
    case "itemLibrary":
      return "item library";
    case "shoppingList":
      return "shopping list";
  }
};

const AddItemForm: FunctionComponent = () => {
  const { addItem } = useContext(ItemListCtx);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddItemForm>({
    defaultValues: {
      name: "",
      quantity: "",
      proteins: "",
      carbs: "",
      fats: "",
      status: "itemLibrary",
      cost: "",
    },
  });
  const onSubmit = (data: AddItemForm) => {
    const hasAllMacros = data.carbs && data.fats && data.proteins;
    if (data.status === "foodDiary" && !hasAllMacros) {
      return alert(
        "Input all macros if you want to add this item directly to Your diary!"
      );
    }
    addItem({
      name: data.name,
      quantity: Number(data.quantity),
      status: data.status,
      costPerItem: Number(
        (Number(data.cost) / Number(data.quantity)).toFixed(2)
      ),
      macrosPer100g: {
        proteins: Number(data.proteins),
        carbs: Number(data.carbs),
        fats: Number(data.fats),
      },
      diaryDate: data.status === "foodDiary" ? new Date() : null,
    });
    reset();
    alert(`Item was added to Your ${setTitleText(data.status)}`);
  };
  return (
    <View style={styles.container}>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="name"
              label="name"
              mode="outlined"
            />
          )}
          name="name"
        />
        {errors.name && <HelperText type="error">This is required.</HelperText>}
      </View>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[0-9]+$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="amount"
              label="amount"
              mode="outlined"
            />
          )}
          name="quantity"
        />
        {errors.quantity && (
          <HelperText type="error">
            This is required. Must be a number
          </HelperText>
        )}
      </View>
      <Controller
        control={control}
        rules={{
          pattern: /^[0-9]+$/,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="total price"
            label="total price"
            mode="outlined"
          />
        )}
        name="cost"
      />
      <Divider bold horizontalInset />
      <Text variant="titleMedium">Enter item macro elements per 100g:</Text>
      <View>
        <View style={styles.inputGroup}>
          {macroInputs.map((input) => {
            return (
              <Controller
                key={input}
                control={control}
                rules={{
                  pattern: /^[0-9]+$/,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder={input[0]}
                    mode="outlined"
                    label={input}
                    style={{ flex: 1 }}
                  />
                )}
                name={input}
              />
            );
          })}
        </View>
        {(errors.proteins || errors.carbs || errors.fats) && (
          <HelperText type="error">Must be a number</HelperText>
        )}
      </View>
      <Divider bold horizontalInset />
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <View style={{ gap: 8 }}>
                <Text variant="titleMedium">
                  Choose where you want to add this item:
                </Text>
                <SegmentedButtons
                  onValueChange={onChange}
                  value={value}
                  buttons={[
                    {
                      value: "itemLibrary",
                      icon: () => <Icon name="library" size={21} />,
                    },
                    {
                      value: "shoppingList",
                      icon: () => <Icon name="clipboard-list" size={21} />,
                    },
                    {
                      value: "fridge",
                      icon: () => <Icon name="fridge" size={21} />,
                    },
                    {
                      value: "foodDiary",
                      icon: () => <Icon name="food" size={21} />,
                    },
                  ]}
                />
                <HelperText type="info" style={{ textAlign: "center" }}>
                  Item will be added to {setTitleText(value)}
                </HelperText>
              </View>
            );
          }}
          name="status"
        />
      </View>
      <Button onPress={handleSubmit(onSubmit)} mode="outlined">
        Submit
      </Button>
    </View>
  );
};

export default AddItemForm;

const styles = StyleSheet.create({
  container: {
    gap: spacing.spacing16,
    marginVertical: spacing.spacing16,
  },
  inputGroup: {
    flexDirection: "row",
    gap: spacing.spacing16,
  },
});
