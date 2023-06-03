import {FunctionComponent, ReactElement} from "react";
import {PaperProvider} from "react-native-paper";
import ItemListProvider from "../store/ItemListCtx";
import {theme} from "../utils/theme";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

type AppWrapperProps = {
  children: ReactElement;
};

const AppWrapper: FunctionComponent<AppWrapperProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ItemListProvider>
        <PaperProvider theme={theme}>{children}</PaperProvider>
      </ItemListProvider>
    </QueryClientProvider>
  );
};

export default AppWrapper;
