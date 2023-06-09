import { Stack } from "expo-router";
import React, { FunctionComponent } from "react";
import AppWrapper from "../src/AppWrapper";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
  return (
    <AppWrapper>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="tabs"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="library" />
      </Stack>
    </AppWrapper>
  );
};

export default Layout;
