import { Tabs } from "expo-router";
import React, { FC } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TabTopBar } from "../../src/AppBars";
import { TAB_ICON_SIZE } from "../../utils/variables";
import { theme } from "../../utils/theme";

const TabsLayout: FC = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          backgroundColor: theme.colors.background,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.onSurface,
      }}
    >
      <Tabs.Screen
        name="shopping-list"
        options={{
          header: () => <TabTopBar title="Shopping List" type="shoppingList" />,
          tabBarIcon: ({ color }) => (
            <Icon name="clipboard-list" size={TAB_ICON_SIZE} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="fridge"
        options={{
          header: () => <TabTopBar title="Fridge" type="fridge" />,
          tabBarIcon: ({ color }) => (
            <Icon name="fridge" size={TAB_ICON_SIZE} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="food-diary"
        options={{
          header: () => <TabTopBar title="Food Diary" type="foodDiary" />,
          tabBarIcon: ({ color }) => (
            <Icon name="food" size={TAB_ICON_SIZE} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="expenses"
        options={{
          header: () => <TabTopBar title="Expenses" type="expenses" />,
          tabBarIcon: ({ color }) => (
            <Icon name="cash-multiple" size={TAB_ICON_SIZE} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
