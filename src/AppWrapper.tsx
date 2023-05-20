import { FunctionComponent, ReactElement } from "react";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
interface AppWrapperProps {
  children: ReactElement;
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const AppWrapper: FunctionComponent<AppWrapperProps> = ({ children }) => {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

export default AppWrapper;
