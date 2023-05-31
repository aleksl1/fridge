import { FunctionComponent, ReactElement } from "react";
import { PaperProvider } from "react-native-paper";
import ItemListProvider from "../store/ItemListCtx";
import { theme } from "../utils/theme";

type AppWrapperProps = {
  children: ReactElement;
};

const AppWrapper: FunctionComponent<AppWrapperProps> = ({ children }) => {
  return (
    <ItemListProvider>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ItemListProvider>
  );
};

export default AppWrapper;
