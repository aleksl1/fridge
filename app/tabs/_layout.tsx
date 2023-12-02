import { Tabs } from "expo-router";
import React, { FC } from "react";
import { TabTopBar } from "../../src/AppBars";
import { theme } from "../../utils/theme";
import BottomTabIcon from "../../src/icons/BottomTabIcon";

const TabsLayout: FC = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          height: 80,
        },
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.tertiary,
      }}
    >
      <Tabs.Screen
        name="shopping-list"
        options={{
          header: () => <TabTopBar title="Shopping List" />,
          tabBarIcon: ({ color }) => <BottomTabIcon iconType="list" />,
        }}
      />
      <Tabs.Screen
        name="fridge"
        options={{
          header: () => <TabTopBar title="Fridge" />,
          tabBarIcon: ({ color }) => <BottomTabIcon iconType="fridge" />,
        }}
      />
      <Tabs.Screen
        name="food-diary"
        options={{
          header: () => <TabTopBar title="Food Diary" />,
          tabBarIcon: ({ color }) => <BottomTabIcon iconType="diary" />,
        }}
      />
      <Tabs.Screen
        name="expenses"
        options={{
          header: () => <TabTopBar title="Expenses" />,
          tabBarIcon: ({ color }) => <BottomTabIcon iconType="expenses" />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
