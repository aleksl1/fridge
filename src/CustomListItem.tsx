import {FunctionComponent} from "react";
import {List, useTheme} from "react-native-paper";
import {ListItemType} from "../store/ItemList.types";
import {ListItemActionsMenu} from "./ListItemActionsMenu";
import {View} from "react-native";

export type CustomListItemProps = {
    item: ListItemType;
    onItemPress: () => void;
    onPlusPress?: () => void;
    onMinusPress?: () => void;
    onDeletePress?: () => void;
    onAddToNextListPress: () => void;
    onEditPress?: () => void;
};

const CustomListItem: FunctionComponent<CustomListItemProps> = (props) => {
    const {
        item,
        onItemPress,
    } = props;
    const {
        colors: {primary, primaryContainer},
    } = useTheme();

    return (
        <List.Item
            title={item.name}
            onPress={onItemPress}
            description={`amount: ${item.quantity}`}
            style={{
                paddingEnd: 0,
                backgroundColor: primaryContainer,
                padding: 0,
                margin: 0,
                borderColor: primary,
                borderWidth: 1,
                borderRadius: 15,
            }}
            right={() => <View style={{flexDirection: "row"}}>
                <ListItemActionsMenu {...props}/>
            </View>}
        />
    );
};

export default CustomListItem;
