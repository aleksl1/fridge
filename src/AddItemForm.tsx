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
import { ItemMacro } from "../store/ItemList.types";

type ItemMacroForm = {
  proteins: string;
  carbs: string;
  fats: string;
};

const macroInputs: (keyof ItemMacroForm)[] = ["proteins", "fats", "carbs"];

type AddItemForm = {
  name: string;
  quantity: string;
} & ItemMacroForm;

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
    },
  });
  const onSubmit = (data: AddItemForm) => {
    addItem({
      name: data.name,
      quantity: Number(data.quantity),
      status: "shoppingList",
    });
    reset();
  };
  return (
    <View style={styles.container}>
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
        <HelperText type="error">This is required. Must be a number</HelperText>
      )}
      <SegmentedButtons
        onValueChange={() => {}}
        value={"fridge"}
        buttons={[
          {
            value: "shoppingList",
            label: "Shopping List",
            icon: () => <Icon name="clipboard-list" size={21} />,
          },
          {
            value: "fridge",
            label: "Fridge",
            icon: () => <Icon name="fridge" size={21} />,
          },
          {
            value: "foodDiary",
            label: "Food diary",
            icon: () => <Icon name="food" size={21} />,
          },
        ]}
      />
      <Divider bold horizontalInset />
      <Text variant="titleMedium">Enter item macro elements per 100g:</Text>
      <View style={styles.inputGroup}>
        {macroInputs.map((input) => {
          return (
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
        <HelperText type="error">This is required. Must be a number</HelperText>
      )}
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
    gap: 16,
  },
});
