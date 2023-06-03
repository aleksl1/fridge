import {Redirect} from "expo-router";
import {FunctionComponent} from "react";
import {View} from "react-native";
import AppWrapper from "../src/AppWrapper";

const Home: FunctionComponent = () => {

    return (
        <AppWrapper>
            <View>
                <Redirect href="/shopping-list"/>
            </View>
    </AppWrapper>
  );
};

export default Home;
