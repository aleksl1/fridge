import {FunctionComponent} from "react";
import {CustomListItemProps} from "./CustomListItem";
import {DataTable} from "react-native-paper";
import {View} from "react-native";
import {ListItemActionsMenu} from "./ListItemActionsMenu";


type FoodDiaryListItemProps = CustomListItemProps

const FoodDiaryListItem: FunctionComponent<FoodDiaryListItemProps> = (itemProps) => {
    const {caloriesPerPiece, macrosPerPiece, quantity, name} = itemProps.item
    return <View>
        <DataTable.Row onPress={() => {
        }}>
            <DataTable.Cell style={{flex: 2}}>{quantity} of {name}</DataTable.Cell>
            <DataTable.Cell numeric>{caloriesPerPiece}</DataTable.Cell>
            <DataTable.Cell numeric>{macrosPerPiece.fats}</DataTable.Cell>
            <DataTable.Cell numeric>{macrosPerPiece.proteins}</DataTable.Cell>
            <DataTable.Cell numeric>{macrosPerPiece.carbs}</DataTable.Cell>
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
