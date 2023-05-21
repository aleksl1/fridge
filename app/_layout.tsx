import { Tabs } from "expo-router";
import { FunctionComponent } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AppWrapper, { theme } from "../src/AppWrapper";
interface LayoutProps {}

const iconSize = 41;

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
            tabBarIcon: ({ color }) => {
              return <Icon name="fridge" size={iconSize} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="food-diary"
          options={{
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
