import { FunctionComponent, useCallback, useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Chip, List, Modal, Portal, Text } from "react-native-paper";
import { ItemListCtx } from "../store/ItemListCtx";
import { theme } from "./AppWrapper";
import { ItemStatus, ListItemType } from "../store/ItemList.types";
import { spacing } from "../utils/spacing";
import globalStyles from "../utils/globalStyles";

type ItemsLibraryModalProps = {
  visible: boolean;
  hideModal: () => void;
  type: ItemStatus;
};

const ItemsLibraryModal: FunctionComponent<ItemsLibraryModalProps> = ({
  visible,
  hideModal,
  type,
}) => {
  const { addItem, items } = useContext(ItemListCtx);
  const onItemPress = useCallback(
    (item: ListItemType) =>
      addItem({
        ...item,
        status: type,
        quantity: 1,
        diaryDate: type === "foodDiary" ? new Date() : undefined,
      }),
    [addItem]
  );

  const categories = [...new Set(items.map((item) => item.category))];
  const categoryChips = categories?.map((c) => <Chip>{c}</Chip>);
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={globalStyles.modal}
      >
        <ScrollView>
          <View style={globalStyles.modalViewContainer}>
            <>
              <View style={{ flexDirection: "row", gap: 4 }}>
                {categoryChips}
              </View>
              <Text variant="titleLarge" style={styles.title}>
                Items library:
              </Text>
              {items
                .filter((item) => item.status === "itemLibrary")
                .map((item, index) => {
                  return (
                    <List.Item
                      onPress={() => onItemPress(item)}
                      key={`${item.name}-${index}`}
                      title={<Text variant="bodyLarge">{item.name}</Text>}
                      right={() => <List.Icon icon="plus" />}
                      style={styles.listItem}
                    />
                  );
                })}
            </>
          </View>
        </ScrollView>
      </Modal>
    </Portal>
  );
};

export default ItemsLibraryModal;

const styles = StyleSheet.create({
  listItem: {
    paddingStart: 8,
    paddingVertical: 0,
    borderBottomWidth: 1,
    borderColor: theme.colors.primary,
  },
  title: {
    margin: spacing.spacing16,
    marginBottom: 0,
  },
});
