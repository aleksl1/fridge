import { FunctionComponent, useState } from "react";
import {
  Divider,
  IconButton,
  List,
  Menu,
  useTheme,
  Button,
} from "react-native-paper";
import { ListItemType } from "../store/ItemList.types";
import { View } from "react-native";

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
    colors: { error, primary },
  } = useTheme();
  const [menuVisible, setMenuVisible] = useState(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);
  return (
    <List.Item
      title={item.name}
      onPress={onItemPress}
      description={`amount: ${item.quantity}`}
      style={{ paddingEnd: 0 }}
      right={() => (
        <View style={{ flexDirection: "row" }}>
          {/* {onMinusPress && <IconButton icon="minus" onPress={onMinusPress} />}
          {onPlusPress && <IconButton icon="plus" onPress={onPlusPress} />}
          {onDeletePress && (
            <IconButton
              icon="delete"
              iconColor={error}
              onPress={onDeletePress}
            />
          )} */}
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
          {/* <IconButton icon="dots-vertical" onPress={openMenu} /> */}
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={<IconButton icon="dots-vertical" onPress={openMenu} />}
          >
            {/* {onMinusPress && <IconButton icon="minus" onPress={onMinusPress} />}
            {onPlusPress && <IconButton icon="plus" onPress={onPlusPress} />} */}
            {onMinusPress && (
              <Menu.Item
                onPress={onMinusPress}
                title={<IconButton icon="minus" />}
              />
            )}
            {onPlusPress && (
              <Menu.Item
                onPress={onPlusPress}
                title={<IconButton icon="plus" />}
              />
            )}
            {onEditPress && (
              <Menu.Item
                onPress={() => {}}
                title={<IconButton icon="pencil" />}
              />
            )}
            <Divider bold />
            {onDeletePress && (
              <Menu.Item
                onPress={onDeletePress}
                title={<IconButton icon="delete" iconColor={error} />}
              />
            )}
          </Menu>
        </View>
      )}
    />
  );
};

export default CustomListItem;
