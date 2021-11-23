import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { TextStyles } from "./textStyle"
import { Breakpoint } from "@chakra-ui/media-query"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})

const config : ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const myTheme = extendTheme({
  config,
  breakpoints,
  colors: {
    primary: "#4C6FFF",
    gradient: "linear-gradient(225deg, #D665FF 0%, #4C6FFF 100%)",
    plight: "#7895FF",
    pdark: "#3754DB",
    white: "#FFFFFF",
    secondary: "#A6B7D4",
    light: "#D5D5DC",
    dark: "#16192C",
  },
  components: {
    Text : TextStyles,
  },
})

export default myTheme