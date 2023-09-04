import {Appbar} from "react-native-paper";
import {useRouter} from "expo-router";
import {FC} from "react";
import Logo from "./components/Logo";
import {StyleSheet} from "react-native";
import {theme} from "../utils/theme";

type TabTopBarProps = {
    title: string;
};
const TabTopBar: FC<TabTopBarProps> = ({title}) => {
    return (
        <Appbar.Header mode="center-aligned" style={styles.header}>
            <Logo/>
            <Appbar.Content title={title}/>
        </Appbar.Header>
  );
};
type ScreenTopBarProps = {
  title: string;
};
const ScreenTopBar: FC<ScreenTopBarProps> = ({ title }) => {
  const router = useRouter();
    return (
        <Appbar.Header mode="center-aligned" style={styles.header}>
            <Appbar.Content title={title}/>
            {
                <Appbar.Action icon="close" onPress={() => router.back()}/>
                </Appbar.Header>
                );
            };

export {TabTopBar, ScreenTopBar};

const styles = StyleSheet.create({
    header: {
        backgroundColor: theme.colors.background,
    },
});
