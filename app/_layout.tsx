import { Tabs } from "expo-router";
import { FC, FunctionComponent } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AppWrapper, { theme } from "../src/AppWrapper";
import ActionsPanel from "../src/ActionsPanel";
import { Divider, Text } from "react-native-paper";
import { View } from "react-native";
import { ItemStatus } from "../store/ItemList.types";
interface LayoutProps {}

const iconSize = 41;

type HeaderProps = {
  title: string;
  type: ItemStatus;
};

const Header: FC<HeaderProps> = ({ title, type }) => (
  <View style={{ margin: 16 }}>
    <Text
      variant="titleLarge"
      style={{ textAlign: "center", fontWeight: "bold" }}
    >
      {title}
    </Text>
    <ActionsPanel type={type} />
    <Divider bold />
  </View>
);

const Layout: FunctionComponent<LayoutProps> = () => {
  return (
    <AppWrapper>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 80,
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.onSurface,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          name="shopping-list"
          options={{
            header: () => <Header title="Shopping List" type="shoppingList" />,
            tabBarIcon: ({ color }) => {
              return (
                <Icon name="clipboard-list" size={iconSize} color={color} />
              );
            },
          }}
        />
        <Tabs.Screen
          name="fridge"
          options={{
            header: () => <Header title="Fridge" type="fridge" />,
            tabBarIcon: ({ color }) => {
              return <Icon name="fridge" size={iconSize} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="food-diary"
          options={{
            header: () => <Header title="Food Diary" type="foodDiary" />,
            tabBarIcon: ({ color }) => {
              return <Icon name="food" size={iconSize} color={color} />;
            },
          }}
        />
      </Tabs>
    </AppWrapper>
  );
};

export default Layout;
