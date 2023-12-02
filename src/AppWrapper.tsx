import { FunctionComponent, ReactElement } from "react";
import { PaperProvider } from "react-native-paper";
import ItemListProvider from "../store/ItemListCtx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse/react-native";
import { theme } from "../utils/theme";
import { Platform, useWindowDimensions, View } from "react-native";

type AppWrapperProps = {
  children: ReactElement;
};

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize(
  "7zhlGZkfNwHWb0suxlPFYqi6upR4VFdVoChtemzJ",
  "YN5dHIirMJOhLtUBuyFnPCGPGEN4UBnyoFac3mRh"
); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

const AppWrapper: FunctionComponent<AppWrapperProps> = ({ children }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={[
        {
          flex: 1,
        },
        Platform.OS === "web" &&
          width > 600 && {
            width: 600,
            marginLeft: "auto",
            marginRight: "auto",
          },
      ]}
    >
      <ItemListProvider>
        <PaperProvider theme={theme}>{children}</PaperProvider>
      </ItemListProvider>
    </View>
  );
};

export default AppWrapper;
