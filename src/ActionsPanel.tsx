import { FunctionComponent, useState } from "react";
import { View } from "react-native";
import { IconButton, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ItemStatus } from "../store/ItemList.types";
import AddItemFormModal from "./AddItemFormModal";
import { spacing } from "../utils/spacing";
import { useRouter } from "expo-router";

type ActionsPanelProps = {
  type: ItemStatus;
};

const buttonIconSize = 45;

const ActionsPanel: FunctionComponent<ActionsPanelProps> = ({ type }) => {
  const [addItemVisible, setAddItemVisible] = useState(false);
  const {
    colors: { primary },
  } = useTheme();
  const router = useRouter();
  const showAddItemModal = () => setAddItemVisible(true);
  const hideAddItemModal = () => setAddItemVisible(false);
  return (
    <View style={{ margin: spacing.spacing16, flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <IconButton
          onPress={() => router.push({ pathname: "library", params: { type } })}
          icon={() => (
            <Icon
              name="magnify-plus-outline"
              size={buttonIconSize}
              color={primary}
            />
          )}
        />
        <IconButton // onPress={showAddItemModal} todo: uncomment when its ready
          icon={() => (
            <Icon
              name="plus"
              size={buttonIconSize}
              color={primary}
              style={{ marginTop: -4 }}
            />
          )}
        />
      </View>
      <AddItemFormModal
        visible={addItemVisible}
        hideModal={hideAddItemModal}
        initialType={type}
      />
    </View>
  );
};

export default ActionsPanel;
