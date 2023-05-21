import { FunctionComponent, useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, TextInput, Text, HelperText } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { spacing } from "../utils/spacing";
import { ItemListCtx } from "../store/ItemListCtx";

type AddItemForm = {
  name: string;
  quantity: string;
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
            placeholder="quantity"
          />
        )}
        name="quantity"
      />
      {errors.quantity && (
        <HelperText type="error">This is required. Must be a number</HelperText>
      )}
      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </View>
  );
};

export default AddItemForm;

const styles = StyleSheet.create({
  container: {
    gap: spacing.spacing16,
    marginVertical: spacing.spacing16,
  },
});
