import { FunctionComponent, useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { List, Modal, Portal, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ItemListCtx } from "../store/ItemListCtx";
import { ItemStatus } from "../store/ItemList.types";
import { spacing } from "../utils/spacing";
import globalStyles from "../utils/globalStyles";
import { theme } from "../utils/theme";

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
              <Text variant="titleLarge" style={styles.title}>
                Items library:
              </Text>
              {items
                .filter((item) => item.status === "itemLibrary")
                .map((item, index) => {
                  return (
                    <List.Item
                      key={`${item.name}-${index}`}
                      title={<Text variant="bodyLarge">{item.name}</Text>}
                      onPress={() =>
                        addItem({
                          ...item,
                          status: type,
                          quantity: 1,
                          diaryDate:
                            type === "foodDiary" ? new Date() : undefined,
                        })
                      }
                      left={() => (
                        <Text variant="bodyLarge">{`${index + 1}. `}</Text>
                      )}
                      right={() => (
                        <Icon
                          name={"plus"}
                          size={21}
                          color={theme.colors.primary}
                        />
                      )}
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
    borderWidth: 1,
    borderRadius: 15,
    borderColor: theme.colors.primary,
  },
  title: {
    margin: spacing.spacing16,
    marginBottom: 0,
  },
});
