import { Stack } from "expo-router";
import React, { FunctionComponent } from "react";
import AppWrapper from "../src/AppWrapper";
import { ScreenTopBar } from "../src/AppBars";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
  return (
    <AppWrapper>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="tabs"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="library"
          options={{
            header: () => <ScreenTopBar title="Library" />,
            presentation: "fullScreenModal",
          }}
        />
      </Stack>
    </AppWrapper>
  );
};

export default Layout;
