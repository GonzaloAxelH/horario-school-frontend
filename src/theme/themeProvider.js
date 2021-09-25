import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "styled-theming";
export const set = (light, dark = 0) => {
    let variable = theme('theme', {
        light: light,
        dark: dark === 0 ? light : dark
    })
    return variable;
}
const ThemeContainer = ({ children }) => {
    const darkTheme = useSelector((state) => state.theme);
    return (
        <ThemeProvider theme={{ theme: darkTheme ? 'dark' : 'light' }}>
            {children}
        </ThemeProvider>
    )
}
export default ThemeContainer;