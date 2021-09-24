import "styled-components";

interface ThemeInterface {
    colors: {
        ui: {
            primary: string;
            green: string;
            bg: string;
            whitstring;
            black: string;
            blue: string;
            lighterBlack: string;
            paragraph: string;
            lightWhite: string;
        };
    };
    fonts: {
        body: string;
        bold: string;
        extrabold: string;
        title: string;
    };
    fontWeights: {
        regular: number;
        bold: number;
        extraBold: number;
    };
    fontSizes: {
        regularTitle: string;
        cardTitle: string;
        xs: string;
        sm: string;
    };
}

declare module "styled-components" {
    export interface DefaultTheme extends ThemeInterface {}
}
