import { Appbar } from "react-native-paper";
import { useRouter } from "expo-router";
import { ItemStatus } from "../store/ItemList.types";
import { FC } from "react";
import { HEADER_ICON_SIZE } from "../utils/variables";
import Logo from "./components/Logo";

type TabTopBarProps = {
  title: string;
};
const TabTopBar: FC<TabTopBarProps> = ({ title }) => {
  const router = useRouter();

  return (
    <Appbar.Header mode="center-aligned">
      <Logo />
      <Appbar.Content title={title} />
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
      <Logo />
    </Appbar.Header>
  );
};

export { TabTopBar, ScreenTopBar };
