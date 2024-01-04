import { FunctionComponent, useContext, useState } from "react";
import { Divider, IconButton, Menu, Text, useTheme } from "react-native-paper";
import { spacing } from "../../../utils/spacing";
import { StyleSheet, View } from "react-native";
import { CustomListItemProps } from "./CustomListItem";
import { ItemListCtx } from "../../../store/ItemListCtx";
import DotsVertical from "../../icons/DotsVertical";

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
    <View style={{ flexDirection: "row", position: "relative" }}>
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
        anchor={<DotsVertical onPress={openMenu} />}
        contentStyle={{ backgroundColor: "white" }}
      >
        <Menu.Item
          titleStyle={titleStyle}
          onPress={() => increment(item)}
          title={<Text variant="labelLarge">ADD</Text>}
        />
        <Menu.Item
          titleStyle={titleStyle}
          onPress={() => decrement(item)}
          title={<Text variant="labelLarge">REMOVE</Text>}
        />
        {onEditPress && (
          <Menu.Item
            titleStyle={titleStyle}
            onPress={() => {}}
            title={<Text variant="labelLarge">EDIT</Text>}
          />
        )}
        <Divider bold />
        <Menu.Item
          titleStyle={titleStyle}
          onPress={() => removeItem(item)}
          title={
            <Text variant="labelLarge" style={{ color: error }}>
              DELETE
            </Text>
          }
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
