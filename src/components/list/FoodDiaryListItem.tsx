import { FunctionComponent } from "react";
import { CustomListItemProps } from "./CustomListItem";
import { DataTable } from "react-native-paper";
import { View } from "react-native";
import { ListItemActionsMenu } from "./ListItemActionsMenu";
import { calculateCaloriesFromMacros } from "../../../utils/helpers";

type FoodDiaryListItemProps = CustomListItemProps;

const FoodDiaryListItem: FunctionComponent<FoodDiaryListItemProps> = (
  itemProps
) => {
  const {
    macrosPerPiece: { fats, proteins, carbs },
    quantity,
    name,
  } = itemProps.item;
  return (
    <View>
      <DataTable.Row onPress={() => {}}>
        <DataTable.Cell style={{ flex: 2 }}>
          {quantity} of {name}
        </DataTable.Cell>
        <DataTable.Cell numeric>
          {calculateCaloriesFromMacros({ proteins, fats, carbs })}
        </DataTable.Cell>
        <DataTable.Cell numeric>{fats}</DataTable.Cell>
        <DataTable.Cell numeric>{proteins}</DataTable.Cell>
        <DataTable.Cell numeric>{carbs}</DataTable.Cell>
      </DataTable.Row>
      <View
        style={{
          position: "absolute",
          right: -35,
          top: -4,
        }}
      >
        <ListItemActionsMenu {...itemProps} />
      </View>
    </View>
  );
};

export default FoodDiaryListItem;
