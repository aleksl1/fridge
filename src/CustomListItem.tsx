import {FunctionComponent, useState} from "react";
import {Divider, IconButton, List, Menu, Text, useTheme} from "react-native-paper";
import {ListItemType} from "../store/ItemList.types";
import {View} from "react-native";
import {spacing} from "../utils/spacing";

type CustomListItemProps = {
    item: ListItemType;
    onItemPress: () => void;
    onPlusPress?: () => void;
    onMinusPress?: () => void;
    onDeletePress?: () => void;
    onAddToNextListPress: () => void;
    onEditPress?: () => void;
};

const CustomListItem: FunctionComponent<CustomListItemProps> = ({
                                                                    item,
                                                                    onAddToNextListPress,
                                                                    onDeletePress,
                                                                    onItemPress,
                                                                    onMinusPress,
                                                                    onPlusPress,
                                                                    onEditPress,
                                                                }) => {
    const {
        colors: {error, primary},
    } = useTheme();
    const [menuVisible, setMenuVisible] = useState(false);
    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);
    return (
        <List.Item
            title={item.name}
            onPress={onItemPress}
            description={`amount: ${item.quantity}`}
            style={{paddingEnd: 0}}
            right={() => {
                const titleStyle = {paddingStart: spacing.spacing16};
                return (
                    <View style={{flexDirection: "row"}}>
                        {item.status === "shoppingList" && (
                            <IconButton
                                icon="fridge"
                                iconColor={primary}
                                onPress={onAddToNextListPress}
                            />
                        )}
                        {item.status === "fridge" && (
                            <IconButton
                                icon="food"
                                iconColor={primary}
                                onPress={onAddToNextListPress}
                            />
                        )}
                        <Menu
                            visible={menuVisible}
                            onDismiss={closeMenu}
                            anchor={<IconButton icon="dots-vertical" onPress={openMenu}/>}
                        >
                            {onPlusPress && (
                                <Menu.Item
                                    titleStyle={titleStyle}
                                    onPress={onPlusPress}
                                    title={<Text variant="labelLarge">ADD</Text>}
                                    leadingIcon={() => <IconButton icon="plus"/>}
                                />
                            )}
                            {onMinusPress && (
                                <Menu.Item
                                    titleStyle={titleStyle}
                                    onPress={onMinusPress}
                                    title={<Text variant="labelLarge">REMOVE</Text>}
                                    leadingIcon={() => <IconButton icon="minus"/>}
                                />
                            )}
                            {!onEditPress && ( //todo change condition when edit function is added
                                <Menu.Item
                                    titleStyle={titleStyle}
                                    onPress={() => {
                                    }}
                                    title={<Text variant="labelLarge">EDIT</Text>}
                                    leadingIcon={() => <IconButton icon="pencil"/>}
                                />
                            )}
                            <Divider bold/>
                            {onDeletePress && (
                                <Menu.Item
                                    titleStyle={titleStyle}
                                    onPress={onDeletePress}
                                    title={<Text variant="labelLarge">DELETE</Text>}
                                    leadingIcon={() => <IconButton icon="delete" iconColor={error}/>}
                                />
                            )}
                        </Menu>
                    </View>
                );
            }}
        />
    );
};

export default CustomListItem;
