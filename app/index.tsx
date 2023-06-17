import { Redirect } from "expo-router";
import React, { FunctionComponent, useEffect, useState } from "react";
import { View } from "react-native";
import AppWrapper from "../src/AppWrapper";
import AnimationComponent from "../src/animations/AnimationComponent";

const Home: FunctionComponent = () => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setRedirect(true), 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <AppWrapper>
      <View style={{ flex: 1 }}>
        <AnimationComponent />
        {redirect && <Redirect href="tabs/shopping-list" />}
      </View>
    </AppWrapper>
  );
};

export default Home;
