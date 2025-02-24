/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      seaShell: "#fff7f3",
      nightRider: "#332e2e",
      teaGreen: "#d9ffb6",
      pigPink: "#ffd3f3",
      clearDay: "#e3fff8",
      white: "#ffffff",
      black: "#000000",
      raisinBlack: "#232323",
      darkGreen: "#576136",
      darkForest: "#263C32",
      gray: "#535661",
      slate: "#a9adc1",
      "gray-100": "#f7f7f7",
      "gray-200": "#e6e9ee",
      "gray-800": "#2e3039",
      "gray-900": "#1f2028",
      "yellow-500": "#846901",
      "green-500": "#30c85e",
      "blue-500": "#4b96ff",
    },
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"], // font-sans base class font
      },
      backgroundImage: {
        "gradient-dark":
          "radial-gradient(circle, rgb(38, 60, 50) 0%, rgb(87, 97, 54) 100%)",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        sm: "2rem",
        xxl: "50px",
        xl: "6rem",
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
