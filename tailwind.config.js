import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', "Inter", ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono Variable"', "JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}
