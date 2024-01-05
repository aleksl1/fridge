import { FunctionComponent, useContext, useState } from "react";
import { Divider, Menu, Text, useTheme } from "react-native-paper";
import { spacing } from "../../../utils/spacing";
import { StyleSheet, View } from "react-native";
import { CustomListItemProps } from "./CustomListItem";
import { ItemListCtx } from "../../../store/ItemListCtx";
import DotsVertical from "../../icons/DotsVertical";
import { setNextListType, setTitleText } from "../../../utils/helpers";

export const ListItemActionsMenu: FunctionComponent<
  Partial<CustomListItemProps>
> = (props) => {
  const { onAddToNextListPress, item, onEditPress, onDetailsPress } = props;
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
    <View style={styles.container}>
      <Menu
        visible={menuVisible}
        onDismiss={closeMenu}
        anchor={<DotsVertical onPress={openMenu} />}
        contentStyle={styles.menuContent}
        style={styles.menu}
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
        {onAddToNextListPress && (
          <Menu.Item
            titleStyle={titleStyle}
            onPress={() => {
              closeMenu();
              onAddToNextListPress();
            }}
            title={
              <Text variant="labelLarge">
                {`Add to ${setTitleText(
                  setNextListType(item.status)
                )}`.toUpperCase()}
              </Text>
            }
          />
        )}
        {onDetailsPress && (
          <Menu.Item
            titleStyle={titleStyle}
            onPress={() => {
              closeMenu();
              onDetailsPress();
            }}
            title={<Text variant="labelLarge">DETAILS</Text>}
          />
        )}
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
  container: {
    flexDirection: "row",
    position: "relative",
  },
  titleStyle: {
    paddingStart: spacing.spacing16,
  },
  menu: { left: 0, marginLeft: 64, marginTop: 32 },
  menuContent: { backgroundColor: "white" },
});
