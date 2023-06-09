import { FunctionComponent, useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Divider,
  HelperText,
  Modal,
  Portal,
  SegmentedButtons,
  Text,
  TextInput,
} from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { spacing } from "../utils/spacing";
import { ItemListCtx } from "../store/ItemListCtx";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ItemStatus } from "../store/ItemList.types";
import { getRouteFromStatus, setTitleText } from "../utils/helpers";
import globalStyles from "../utils/globalStyles";
import { useRouter } from "expo-router";

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

type AddItemModalProps = {
  visible: boolean;
  hideModal: () => void;
  initialType: ItemStatus;
};

const AddItemFormModal: FunctionComponent<AddItemModalProps> = ({
  visible,
  hideModal,
  initialType,
}) => {
  const { addItem } = useContext(ItemListCtx);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<AddItemForm>({
    defaultValues: {
      name: "",
      quantity: "",
      proteins: "",
      carbs: "",
      fats: "",
      status: initialType,
      cost: "",
    },
  });
  const onSubmit = (data: AddItemForm) => {
    const hasAllMacros = data.carbs && data.fats && data.proteins;
    if (
      (data.status === "foodDiary" || data.status === "itemLibrary") &&
      !hasAllMacros
    ) {
      return alert(
        `Input all macros if you want to add this item directly to Your ${setTitleText(
          data.status
        )}!`
      );
    }
    const proteins = Number(data.proteins);
    const carbs = Number(data.carbs);
    const fats = Number(data.fats);
    addItem({
      name: data.name,
      quantity: Number(data.quantity),
      status: data.status,
      costPerItem: Number(
        (Number(data.cost) / Number(data.quantity)).toFixed(2)
      ),
      macrosPerPiece: {
        proteins,
        carbs,
        fats,
      },
      diaryDate: data.status === "foodDiary" ? new Date() : undefined,
    });
    reset();
    alert(`Item was added to Your ${setTitleText(data.status)}`);
    if (data.status !== "itemLibrary")
      router.replace(getRouteFromStatus(data.status));
    hideModal();
  };
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={globalStyles.modal}
      >
        <ScrollView>
          <View style={globalStyles.modalViewContainer}>
            <Text variant="titleLarge">Add new item</Text>
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
                    label="name"
                    mode="outlined"
                  />
                )}
                name="name"
              />
              {errors.name && <HelperText type="error">required.</HelperText>}
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
                    label="amount"
                    mode="outlined"
                    keyboardType="numeric"
                  />
                )}
                name="quantity"
              />
              {errors.quantity && (
                <HelperText type="error">required. must be a number</HelperText>
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
                  label="total price"
                  mode="outlined"
                  keyboardType="numeric"
                />
              )}
              name="cost"
            />
            <Divider bold horizontalInset />
            <Text variant="titleMedium">
              Enter item macro elements per 100g:
            </Text>
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
                          mode="outlined"
                          label={input}
                          style={{ flex: 1 }}
                          keyboardType="numeric"
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
                            icon: () => (
                              <Icon name="clipboard-list" size={21} />
                            ),
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
                    </View>
                  );
                }}
                name="status"
              />
            </View>
          </View>
          <Button
            onPress={handleSubmit(onSubmit)}
            mode="contained"
            style={styles.addBtn}
          >
            Add {watch("name") || "item"} to {setTitleText(watch("status"))}
          </Button>
        </ScrollView>
      </Modal>
    </Portal>
  );
};

export default AddItemFormModal;

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: "row",
    gap: spacing.spacing16,
  },
  addBtn: { margin: 16 },
});
