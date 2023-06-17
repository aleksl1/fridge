import React, { FC } from "react";
import { FAB } from "react-native-paper";
import { spacing } from "../../utils/spacing";
import { useRouter } from "expo-router";
import { ItemStatus } from "../../store/ItemList.types";

type AddButtonProps = {
  type: ItemStatus;
};

const AddButton: FC<AddButtonProps> = ({ type }) => {
  const router = useRouter();
  return (
    <FAB
      icon="plus"
      style={{
        position: "absolute",
        margin: spacing.spacing16,
        right: 0,
        bottom: 0,
      }}
      onPress={() => router.push({ pathname: "/library", params: { type } })}
    />
  );
};

export default AddButton;
