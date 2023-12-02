import { FunctionComponent, useContext, useState } from "react";
import { Divider, IconButton, Menu, Text, useTheme } from "react-native-paper";
import { spacing } from "../utils/spacing";
import { StyleSheet, View } from "react-native";
import { CustomListItemProps } from "./CustomListItem";
import { ItemListCtx } from "../store/ItemListCtx";

export const ListItemActionsMenu: FunctionComponent<
  Partial<CustomListItemProps>
> = (props) => {
  const { onAddToNextListPress, item, onEditPress } = props;
  const { increment, decrement, removeItem } = useContext(ItemListCtx);
  const {
    colors: { error, tertiary },
  } = useTheme();
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);
  const { titleStyle } = styles;

  if (!item) return null;
  return (
    <View style={{ flexDirection: "row" }}>
      {item?.status === "shoppingList" && (
        <IconButton
          icon="fridge"
          iconColor={tertiary}
          onPress={onAddToNextListPress}
        />
      )}
      {item?.status === "fridge" && (
        <IconButton
          icon="food"
          iconColor={tertiary}
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

const styles = StyleSheet.create({
  titleStyle: {
    paddingStart: spacing.spacing16,
  },
});
