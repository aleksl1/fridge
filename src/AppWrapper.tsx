//@ts-ignore
import {FunctionComponent, ReactElement, useEffect, useRef, useState} from "react";
import {MD3LightTheme as DefaultTheme, PaperProvider} from "react-native-paper";
import ItemListProvider from "../store/ItemListCtx";

type AppWrapperProps = {
    children: ReactElement;
};

export const theme = {
    ...DefaultTheme,
    colors: {
        primary: "rgb(67, 105, 0)",
        onPrimary: "rgb(255, 255, 255)",
        primaryContainer: "rgb(183, 245, 94)",
        onPrimaryContainer: "rgb(17, 31, 0)",
        secondary: "rgb(121, 89, 0)",
        onSecondary: "rgb(255, 255, 255)",
        secondaryContainer: "rgb(255, 223, 160)",
        onSecondaryContainer: "rgb(38, 26, 0)",
        tertiary: "rgb(0, 103, 131)",
        onTertiary: "rgb(255, 255, 255)",
        tertiaryContainer: "rgb(188, 233, 255)",
        onTertiaryContainer: "rgb(0, 31, 42)",
        error: "rgb(186, 26, 26)",
        onError: "rgb(255, 255, 255)",
        errorContainer: "rgb(255, 218, 214)",
        onErrorContainer: "rgb(65, 0, 2)",
        background: "rgb(254, 252, 245)",
        onBackground: "rgb(27, 28, 24)",
        surface: "rgb(254, 252, 245)",
        onSurface: "rgb(75,87,46)", //fontcolor
        surfaceVariant: "rgb(225, 228, 213)",
        onSurfaceVariant: "rgb(68, 72, 61)",
        outline: "rgb(117, 121, 108)",
        outlineVariant: "rgb(197, 200, 185)",
        shadow: "rgb(0, 0, 0)",
        scrim: "rgb(0, 0, 0)",
        inverseSurface: "rgb(48, 49, 44)",
        inverseOnSurface: "rgb(242, 241, 233)",
        inversePrimary: "rgb(156, 216, 69)",
        elevation: {
            level0: "transparent",
            level1: "rgb(245, 245, 233)",
            level2: "rgb(239, 240, 225)",
            level3: "rgb(233, 236, 218)",
            level4: "rgb(232, 234, 216)",
            level5: "rgb(228, 231, 211)",
        },
        surfaceDisabled: "rgba(27, 28, 24, 0.12)",
        onSurfaceDisabled: "rgba(27, 28, 24, 0.38)",
        backdrop: "rgba(46, 50, 39, 0.4)",
    },
};

const AppWrapper: FunctionComponent<AppWrapperProps> = ({children}) => {

    return (
        <ItemListProvider>
            <PaperProvider theme={theme}>


                {children}
            </PaperProvider>
        </ItemListProvider>
    );
};

export default AppWrapper;
