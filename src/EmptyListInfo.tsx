import React, { FC } from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { ItemStatus } from "../store/ItemList.types";
import { setTitleText } from "../utils/helpers";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Link, useRouter } from "expo-router";

type EmptyListInfoProps = {
  type: ItemStatus;
};

const EmptyListInfo: FC<EmptyListInfoProps> = ({ type }) => {
  const router = useRouter();
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <Text
        variant="titleMedium"
        style={{
          textAlign: "center",
          paddingHorizontal: 50,
        }}
      >
        There are no items in Your {setTitleText(type)}, go
        <Link
          selectionColor={"blue"}
          href={{ pathname: "/library", params: { type } }}
        >
          <Text
            style={{ color: colors.primary, fontWeight: "bold" }}
          >{` here `}</Text>
        </Link>
        to add something or press on
        <Icon
          name="magnify-plus-outline"
          size={26}
          style={{ marginHorizontal: 8 }}
          onPress={() =>
            router.push({ pathname: "/library", params: { type } })
          }
        />
      </Text>
    </View>
  );
};

export default EmptyListInfo;
