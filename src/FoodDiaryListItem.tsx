import {FunctionComponent} from "react";
import {CustomListItemProps} from "./CustomListItem";
import {DataTable} from "react-native-paper";
import {View} from "react-native";
import {ListItemActionsMenu} from "./ListItemActionsMenu";


type FoodDiaryListItemProps = CustomListItemProps

const FoodDiaryListItem: FunctionComponent<FoodDiaryListItemProps> = (itemProps) => {
    const {caloriesPer100g, macrosPer100g, quantity, name} = itemProps.item
    return <View>
        <DataTable.Row onPress={() => {
        }}>
            <DataTable.Cell style={{flex: 2}}>{quantity} of {name}</DataTable.Cell>
            <DataTable.Cell numeric>{caloriesPer100g}</DataTable.Cell>
            <DataTable.Cell numeric>{macrosPer100g?.fats}</DataTable.Cell>
            <DataTable.Cell numeric>{macrosPer100g?.proteins}</DataTable.Cell>
            <DataTable.Cell numeric>{macrosPer100g?.carbs}</DataTable.Cell>
        </DataTable.Row>
        <View style={{
            position: "absolute",
            right: -35,
            top: -4,
        }}>
            <ListItemActionsMenu
                {...itemProps}
            />
        </View>
    </View>
};

export default FoodDiaryListItem;
