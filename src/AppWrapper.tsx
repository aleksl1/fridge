import { FunctionComponent, ReactElement } from "react";
import { PaperProvider } from "react-native-paper";
import ItemListProvider from "../store/ItemListCtx";
import { theme } from "../utils/theme";
import { useWindowDimensions, View } from "react-native";
import { isWeb } from "../utils/constants";

type AppWrapperProps = {
  children: ReactElement;
};
const AppWrapper: FunctionComponent<AppWrapperProps> = ({ children }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={[
        {
          flex: 1,
        },
        isWeb &&
          width > 600 && {
            width: 600,
            marginLeft: "auto",
            marginRight: "auto",
            position: "relative",
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
