import { FunctionComponent, useContext, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { IconButton, List, Modal, Portal, Text } from "react-native-paper";
import { theme } from "./AppWrapper";
import { libraryItems } from "../utils/dummyData";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ItemListCtx } from "../store/ItemListCtx";

type ItemsLibraryProps = {
  visible: boolean;
  hideModal: () => void;
};

const ItemsLibrary: FunctionComponent<ItemsLibraryProps> = ({
  visible,
  hideModal,
}) => {
  const { addItem } = useContext(ItemListCtx);
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modal}
      >
        <ScrollView contentContainerStyle={styles.listContainer}>
          {libraryItems.map((item, index) => {
            return (
              <List.Item
                key={`${item.name}-${index}`}
                title={<Text variant="bodyLarge">{item.name}</Text>}
                onPress={() =>
                  addItem({
                    ...item,
                    status: "shoppingList",
                    quantity: 1,
                  })
                }
                left={() => <Text variant="bodyLarge">{`${index + 1}. `}</Text>}
                right={() => (
                  <Icon name={"plus"} size={21} color={theme.colors.primary} />
                )}
                style={{
                  paddingStart: 8,
                  borderWidth: 1,
                  borderRadius: 15,
                  borderColor: theme.colors.primary,
                }}
              />
            );
          })}
        </ScrollView>
      </Modal>
    </Portal>
  );
};

export default ItemsLibrary;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "flex-start",
    marginHorizontal: 32,
    marginVertical: 128,
    padding: 16,
    paddingTop: 32,
    borderRadius: 32,
    backgroundColor: theme.colors.onPrimary,
  },
  listContainer: {
    gap: 4,
  },
});
