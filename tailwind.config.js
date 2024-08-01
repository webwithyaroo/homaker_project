module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#2F2F2F",
        contrast: " #f9f9f9",
        regular: "#AAA",
        border: "#E7E7E9",
        primary: "#101010",
        bgColor: "rgba(47, 47, 47, 0.70)",
        bgContrast: "#FAFAFA",
        "#F8F8F8": "#F8F8F8",
      },

      fontSize: {
        xs: "0.875rem", //14 px
        sm: "1rem", //16px
        base: "1.25rem", //20 px
        xl: "1.75rem", //28 px
        lg: "1.5rem", //24 px
        "2xl": "2.125rem", //38 px
        "4xl": "2.5rem", //40 px
        "5xl": "2.875rem", //46 px
        "6xl": "2.875rem", //48 px
      },
      fontFamily: {
        fontInter: "Inter",
        fontPoppin: "Poppins",
      },
      fontWeight: {
        // 400 500 600 700
        bold: "400",
        bolder: "500",
        lg_bold: "600",
        xl_bold: "700",
      },
      backgroundImage: {
        "hero-pattern": "url('src/assets/hero1.png')",
        "hero-banner": "url('src/assets/hero2.png')",
      },
    },
  },
  plugins: [],
};
