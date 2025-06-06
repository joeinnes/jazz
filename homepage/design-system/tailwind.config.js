import harmonyPalette from "@evilmartians/harmony/tailwind";
import typography from "@tailwindcss/typography";
import tailwindCSSAnimate from "tailwindcss-animate";
import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";
import { COLORS } from "./colors/colors";

const stonePalette = {
  50: "oklch(0.988281 0.002 75)",
  100: "oklch(0.980563 0.002 75)",
  200: "oklch(0.917969 0.002 75)",
  300: "oklch(0.853516 0.002 75)",
  400: "oklch(0.789063 0.002 75)",
  500: "oklch(0.726563 0.002 75)",
  600: "oklch(0.613281 0.002 75)",
  700: "oklch(0.523438 0.002 75)",
  800: "oklch(0.412109 0.002 75)",
  900: "oklch(0.302734 0.002 75)",
  925: "oklch(0.220000 0.002 75)",
  950: "oklch(0.193359 0.002 75)",
};

const jazzBlue = {
  ...colors.indigo,
  500: "#5870F1",
  600: "#3651E7",
  700: "#3313F7",
  800: "#2A12BE",
  900: "#12046A",
  DEFAULT: COLORS.BLUE,
};

const stonePaletteWithAlpha = { ...stonePalette };

Object.keys(stonePalette).forEach((key) => {
  stonePaletteWithAlpha[key] = stonePaletteWithAlpha[key].replace(
    ")",
    "/ <alpha-value>)",
  );
});

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...harmonyPalette,
        stone: stonePaletteWithAlpha,
        blue: jazzBlue,
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        highlight: "var(--color-transparent-primary)",
        success: "var(--color-success)",
        info: "var(--color-info)",
        warning: "var(--color-warning)",
        tip: "var(--color-tip)",
        green: {
          DEFAULT: "var(--color-green)",
        },
      },
      textColor: {
        default: "var(--color-default)",
        highlight: "var(--color-highlight)",
        muted: "var(--color-muted)",
      },
      borderColor: {
        DEFAULT: "var(--color-border-default)",
      },
      backgroundColor: {
        highlight: "var(--color-transparent-primary)",
        muted: "var(--color-bg-muted)",
      },
      fontFamily: {
        display: ["var(--font-manrope)"],
        mono: ["var(--font-commit-mono)"],
        sans: ["var(--font-inter)"],
      },
      fontSize: {
        "2xs": ["0.75rem", { lineHeight: "1.25rem" }],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.75rem",
          sm: "1rem",
        },
        screens: {
          md: "960px",
          lg: "1276px",
        },
      },
      screens: {
        md: "960px",
        lg: "1276px",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": stonePalette[700],
            "--tw-prose-headings": stonePalette[900],
            "--tw-prose-bold": stonePalette[900],
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-body": stonePalette[400],
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-code": stonePalette[900],
            "--tw-prose-invert-code": stonePalette[50],
            "--tw-prose-links": theme("colors.primary"),
            "--tw-prose-invert-links": theme("colors.primary"),
            maxWidth: null,
            strong: {
              color: "var(--tw-prose-bold)",
              fontWeight: theme("fontWeight.medium"),
            },
            b: {
              color: "var(--tw-prose-bold)",
              fontWeight: theme("fontWeight.medium"),
            },
            a: {
              fontWeight: theme("fontWeight.normal"),
              textUnderlineOffset: "4px",
              "&:hover": {
                color: "var(--color-primary-dark)",
              },
            },
            h1: {
              fontFamily: theme("fontFamily.display"),
              letterSpacing: theme("letterSpacing.tight"),
              fontWeight: theme("fontWeight.semibold"),
              fontSize: theme("fontSize.3xl"),
            },
            h2: {
              fontFamily: theme("fontFamily.display"),
              letterSpacing: theme("letterSpacing.tight"),
              fontWeight: theme("fontWeight.semibold"),
              fontSize: theme("fontSize.2xl"),
            },
            h3: {
              fontFamily: theme("fontFamily.display"),
              letterSpacing: theme("letterSpacing.tight"),
              fontWeight: theme("fontWeight.semibold"),
              fontSize: theme("fontSize.xl"),
            },
            h4: {
              fontFamily: theme("fontFamily.display"),
              letterSpacing: theme("letterSpacing.tight"),
              fontWeight: theme("fontWeight.semibold"),
              fontSize: theme("fontSize.lg"),
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            code: {
              backgroundColor: stonePalette[100],
              padding: "0.15rem 0.25rem",
              borderRadius: "2px",
              whiteSpace: "nowrap",
              fontWeight: 400,
            },
            p: {
              marginBottom: theme("spacing.3"),
              marginTop: theme("spacing.3"),
            },
          },
        },
        xl: {
          css: {
            p: {
              marginBottom: theme("spacing.3"),
              marginTop: theme("spacing.3"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    tailwindCSSAnimate,
    typography(),
    plugin(({ addVariant }) => addVariant("label", "& :is(label)")),
    plugin(({ addUtilities }) =>
      addUtilities({
        ".text-reset, .text-reset:hover, .text-reset:focus": {
          color: "inherit",
          textDecoration: "none",
        },
      }),
    ),
  ],
};
export default config;
