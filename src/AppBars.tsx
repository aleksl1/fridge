import { Appbar, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";
import { FC } from "react";
import Logo from "./components/Logo";

type TabTopBarProps = {
  title: string;
};
const TabTopBar: FC<TabTopBarProps> = ({ title }) => {
  const { colors } = useTheme();
  return (
    <Appbar.Header
      mode="center-aligned"
      style={{ backgroundColor: colors.background }}
    >
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
      <Appbar.Content title={title} />
      <Appbar.Action icon="close" onPress={() => router.back()} />
    </Appbar.Header>
  );
};

export { TabTopBar, ScreenTopBar };
