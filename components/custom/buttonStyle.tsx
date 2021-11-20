export const ButtonStyles = {
    baseStyle: {
        fontFamily: "Inter, sans-serif",
        fontWeight: "600",
    },
    variants: {
        solid: {
            bg: "primary",
            color: "white",
            fontSize: "12px",
            _hover: {
                bg : "pdark"
            }
        },
        outlined: {
            bg: "white",
            color: "primary",
            fontSize: "12px",
            borderColour: "primary",
            border: "2px",
            _hover: {
                bg: "primary",
                color: "white",
                
            }
        }
    },
    defaultProps: {
      size: "md",
      variant: "solid",
    },
}