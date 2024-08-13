
import { Theme } from "../Theme/Theme"

interface ThemeProps {
    theme: "default" | "light" | "dark"
}

export const useTheme = ( theme: ThemeProps ) => {
    switch (theme.theme) {
        case "default":
            return Theme.default;
            break;
        case "light":
            return Theme.light;
            break;

        case "dark":
            return Theme.dark;
            break;
        default:
            break;
    }
}
