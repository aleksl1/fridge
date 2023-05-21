import { FunctionComponent } from "react";
import { Stack, Tabs } from "expo-router";
import { View, Platform, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import AppWrapper from "../src/AppWrapper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
interface LayoutProps {}

const iconSize = 36;

const Layout: FunctionComponent<LayoutProps> = () => {
  if (Platform.OS === "web")
    return (
      <AppWrapper>
        <View style={styles.webContainer}>
          {/* <Stack /> */}
          <Tabs
            screenOptions={{
              tabBarStyle: {
                height: 100,
                paddingBottom: 16,
              },
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
                tabBarLabel: "Shopping list",
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
                tabBarLabel: "Fridge",
                tabBarIcon: ({ color }) => {
                  return <Icon name="fridge" size={iconSize} color={color} />;
                },
              }}
            />
            <Tabs.Screen
              name="food-diary"
              options={{
                tabBarLabel: "Food Diary",
                tabBarIcon: ({ color }) => {
                  return <Icon name="food" size={iconSize} color={color} />;
                },
              }}
            />
          </Tabs>
        </View>
      </AppWrapper>
    );
  return (
    <AppWrapper>
      <>
        {/* <Stack /> */}
        <Tabs
          screenOptions={{
            tabBarStyle: {
              height: 100,
              paddingBottom: 16,
            },
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
              tabBarLabel: () => (
                <Text variant="labelLarge">Shopping List</Text>
              ),
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
              tabBarLabel: () => <Text variant="labelLarge">Fridge</Text>,
              tabBarIcon: ({ color }) => {
                return <Icon name="fridge" size={iconSize} color={color} />;
              },
            }}
          />
          <Tabs.Screen
            name="food-diary"
            options={{
              tabBarLabel: () => <Text variant="labelLarge">Food Diary</Text>,
              tabBarIcon: ({ color }) => {
                return <Icon name="food" size={iconSize} color={color} />;
              },
            }}
          />
        </Tabs>
      </>
    </AppWrapper>
  );
};

export default Layout;
const styles = StyleSheet.create({
  webContainer: {
    width: 400,
    margin: "auto",
    height: 750,
  },
});
