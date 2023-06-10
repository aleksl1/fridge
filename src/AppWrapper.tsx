import { FunctionComponent, ReactElement } from "react";
import { PaperProvider } from "react-native-paper";
import ItemListProvider from "../store/ItemListCtx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse/react-native";
import { theme } from "../utils/theme";

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
  return (
    <ItemListProvider>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ItemListProvider>
  );
};

export default AppWrapper;
