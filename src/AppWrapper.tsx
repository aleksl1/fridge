import { FunctionComponent, ReactElement } from "react";

interface AppWrapperProps {
  children: ReactElement;
}

const AppWrapper: FunctionComponent<AppWrapperProps> = ({ children }) => {
  return <>{children}</>;
};

export default AppWrapper;
