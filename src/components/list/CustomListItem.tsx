import { FunctionComponent } from "react";
import { HelperText, List, Text } from "react-native-paper";
import { ListItemType } from "../../../store/ItemList.types";
import { ListItemActionsMenu } from "./ListItemActionsMenu";
import { getBorderColor } from "../../../utils/helpers";

export type CustomListItemProps = {
  item: ListItemType;
  onDetailsPress?: () => void;
  onAddToNextListPress: () => void;
  onEditPress?: () => void;
};

const CustomListItem: FunctionComponent<CustomListItemProps> = (props) => {
  const { item, onDetailsPress } = props;

  return (
    <List.Item
      title={
        <Text variant="labelLarge" style={{ fontWeight: "bold" }}>
          {item.name}
        </Text>
      }
      description={
        <HelperText type="info">{`amount: ${item.quantity}`}</HelperText>
      }
      style={{
        paddingEnd: 0,
        padding: 0,
        margin: 0,
        borderColor: getBorderColor(item.category),
        borderWidth: 1,
        borderLeftWidth: 15,
        borderRadius: 15,
      }}
      left={() => <ListItemActionsMenu {...props} />}
    />
  );
};

export default CustomListItem;
