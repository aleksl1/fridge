import { FunctionComponent } from "react";
import { View } from "react-native";
import {
  DataTable,
  Dialog,
  List,
  ListIconProps,
  Text,
  useTheme,
} from "react-native-paper";
import { ListItemType } from "../store/ItemList.types";
import { IconProps } from "react-native-paper/lib/typescript/src/components/MaterialCommunityIcon";
import { Style } from "react-native-paper/lib/typescript/src/components/List/utils";
import { spacing } from "../utils/spacing";
import { setTitleText } from "../utils/helpers";

type ItemPreviewDialogProps = {
  visible: boolean;
  pressedItem: ListItemType;
  hideDialog: () => void;
};

const ItemPreviewDialog: FunctionComponent<ItemPreviewDialogProps> = ({
  visible,
  hideDialog,
  pressedItem,
}) => {
  const {
    colors: { primary, onSecondary },
  } = useTheme();
  const {
    name,
    quantity,
    status,
    costPerItem,
    macrosPer100g,
    diaryDate,
    caloriesPer100g,
  } = pressedItem;
  const listLeftIcon = (props: { color: string; style: Style }) => (
    <List.Icon {...props} icon="chevron-right" />
  );

  const caloriesInfo = () =>
    caloriesPer100g === "0" ? (
      <List.Item
        title={`calories in 100g: ${caloriesPer100g}`}
        left={listLeftIcon}
      />
    ) : (
      <>
        <List.Item
          title={`calories in 100g: ${caloriesPer100g}`}
          left={listLeftIcon}
        />
        <View style={{ marginStart: spacing.spacing16 }}>
          <List.Item
            title={`proteins: ${macrosPer100g?.proteins}`}
            left={listLeftIcon}
          />
          <List.Item
            title={`fats: ${macrosPer100g?.fats}`}
            left={listLeftIcon}
          />
          <List.Item
            title={`carbs: ${macrosPer100g?.carbs}`}
            left={listLeftIcon}
          />
        </View>
      </>
    );

  return (
    <Dialog
      visible={visible}
      onDismiss={hideDialog}
      style={{ backgroundColor: onSecondary }}
    >
      <Dialog.Content style={{ padding: 0, marginBottom: spacing.spacing16 }}>
        <List.Section>
          <List.Accordion
            title={
              <View style={{ flexDirection: "row", gap: spacing.spacing16 }}>
                <List.Icon color={primary} icon="food" />
                <Text variant="titleMedium">{`${name} in your ${setTitleText(
                  status
                )}`}</Text>
              </View>
            }
            titleNumberOfLines={2}
            right={() => null}
            expanded={true}
            style={{
              backgroundColor: onSecondary,
            }}
            titleStyle={{ textAlign: "center" }}
          >
            <List.Item title={`amount: ${quantity}`} left={listLeftIcon} />
            <List.Item
              title={`cost per item: ${costPerItem} PLN`}
              left={listLeftIcon}
            />
            {caloriesPer100g !== undefined && caloriesInfo()}
            {diaryDate && (
              <List.Item
                title={`Added on: ${diaryDate.toLocaleDateString()}`}
                left={listLeftIcon}
              />
            )}
          </List.Accordion>
        </List.Section>
      </Dialog.Content>
    </Dialog>
  );
};

export default ItemPreviewDialog;
