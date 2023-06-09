import { FunctionComponent, useContext, useState } from "react";
import { Divider, IconButton, Menu, Text, useTheme } from "react-native-paper";
import { spacing } from "../utils/spacing";
import { View } from "react-native";
import { CustomListItemProps } from "./CustomListItem";
import { ItemListCtx } from "../store/ItemListCtx";

export const ListItemActionsMenu: FunctionComponent<
  Partial<CustomListItemProps>
> = ({ onAddToNextListPress, item, onEditPress }) => {
  const { increment, decrement, removeItem } = useContext(ItemListCtx);
  const {
    colors: { error, primary },
  } = useTheme();
  const [menuVisible, setMenuVisible] = useState(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);
  const titleStyle = { paddingStart: spacing.spacing16 };

  if (!item) return null;

  return (
    <View style={{ flexDirection: "row" }}>
      {item?.status === "shoppingList" && (
        <IconButton
          icon="fridge"
          iconColor={primary}
          onPress={onAddToNextListPress}
        />
      )}
      {item?.status === "fridge" && (
        <IconButton
          icon="food"
          iconColor={primary}
          onPress={onAddToNextListPress}
        />
      )}
      <Menu
        visible={menuVisible}
        onDismiss={closeMenu}
        anchor={<IconButton icon="dots-vertical" onPress={openMenu} />}
      >
        <Menu.Item
          titleStyle={titleStyle}
          onPress={() => increment(item)}
          title={<Text variant="labelLarge">ADD</Text>}
          leadingIcon={() => <IconButton icon="plus" />}
        />
        <Menu.Item
          titleStyle={titleStyle}
          onPress={() => decrement(item)}
          title={<Text variant="labelLarge">REMOVE</Text>}
          leadingIcon={() => <IconButton icon="minus" />}
        />
        {!onEditPress && ( //todo change condition when edit function is added
          <Menu.Item
            titleStyle={titleStyle}
            onPress={() => {}}
            title={<Text variant="labelLarge">EDIT</Text>}
            leadingIcon={() => <IconButton icon="pencil" />}
          />
        )}
        <Divider bold />
        <Menu.Item
          titleStyle={titleStyle}
          onPress={() => removeItem(item)}
          title={<Text variant="labelLarge">DELETE</Text>}
          leadingIcon={() => <IconButton icon="delete" iconColor={error} />}
        />
      </Menu>
    </View>
  );
};
