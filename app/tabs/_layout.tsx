import { Tabs } from "expo-router";
import React, { FC, FunctionComponent } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { Text, useTheme } from "react-native-paper";
import { SafeAreaView, View } from "react-native";
import { ItemStatus } from "../../store/ItemList.types";
import { spacing } from "../../utils/spacing";
import ActionsPanel from "../../src/ActionsPanel";
import { theme } from "../../src/AppWrapper";
interface LayoutProps {}

const iconSize = 41;

type HeaderProps = {
  title: string;
  type: ItemStatus;
};

const Header: FC<HeaderProps> = ({ title, type }) => {
  const {
    colors: { secondaryContainer },
  } = useTheme();
  return (
    <SafeAreaView
      style={{
        padding: spacing.spacing16,
        backgroundColor: secondaryContainer,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          variant="titleLarge"
          style={{
            marginStart: spacing.spacing16,
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          {title}
        </Text>
        <ActionsPanel type={type} />
      </View>
    </SafeAreaView>
  );
};

const TabsLayout: FunctionComponent<LayoutProps> = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          backgroundColor: theme.colors.secondaryContainer,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.onSurface,
      }}
    >
      <Tabs.Screen
        name="shopping-list"
        options={{
          header: () => <Header title="Shopping List" type="shoppingList" />,
          tabBarIcon: ({ color }) => {
            return <Icon name="clipboard-list" size={iconSize} color={color} />;
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
      <Tabs.Screen
        name="expenses"
        options={{
          header: () => <Header title="Expenses" type="expenses" />,
          tabBarIcon: ({ color }) => {
            return <Icon name="cash-multiple" size={iconSize} color={color} />;
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
