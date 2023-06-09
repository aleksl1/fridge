import { Appbar } from "react-native-paper";
import { useRouter } from "expo-router";
import { ItemStatus } from "../store/ItemList.types";
import { FC } from "react";
import { HEADER_ICON_SIZE } from "../utils/variables";

type TabTopBarProps = {
  title: string;
  type: ItemStatus;
};
const TabTopBar: FC<TabTopBarProps> = ({ title, type }) => {
  const router = useRouter();

  return (
    <Appbar.Header mode="center-aligned">
      <Appbar.Content title={title} />
      <Appbar.Action
        icon="magnify-plus-outline"
        size={HEADER_ICON_SIZE}
        onPress={() => router.push({ pathname: "library", params: { type } })}
      />
    </Appbar.Header>
  );
};
type ScreenTopBarProps = {
  title: string;
};
const ScreenTopBar: FC<ScreenTopBarProps> = ({ title }) => {
  const router = useRouter();

  return (
    <Appbar.Header mode="center-aligned">
      <Appbar.BackAction onPress={() => router.back()} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export { TabTopBar, ScreenTopBar };
