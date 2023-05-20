import { FunctionComponent, ReactElement } from "react";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import ShoppingListProvider from "../store/shoppingListCtx";
type AppWrapperProps = {
  children: ReactElement;
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "red",
  },
};

const AppWrapper: FunctionComponent<AppWrapperProps> = ({ children }) => {
  return (
    <ShoppingListProvider>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ShoppingListProvider>
  );
};

export default AppWrapper;
