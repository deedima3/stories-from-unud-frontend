export const TextStyles =  {
    baseStyle: {
      fontFamily: "Inter, sans-serif",
      fontWeight: "bold",
    },
    variants: {
      d6: {
        fontSize: "40px",
        lineHeight: "48px",
      },
      h1 : {
        fontSize: "36px",
        lineHeight: "136.02%",
      },
      h2 : {
        fontSize: "28px",
        lineHeight: "136.02%",
      },
      h3 : {
        fontSize: "20px",
        lineHeight: "136.52%",
      },
      h4 : {
        fontSize: "18px",
        lineHeight: "28px",
      },
      h5: {
        fontSize: "16px",
        lineHeight: "25px",
      },
      h6: {
        fontSize: "14px",
        lineHeight: "24px",
      },
      hlink: {
        fontSize: "14px",
        lineHeight: "24px",
        _hover: {
          color: "white",
          
      }
        }
    },
    defaultProps: {
      types : "h4",
    }
  }