import { MantineThemeOverride } from "@mantine/core";

import { red, marine, violet, pink } from "./colors";

export const mantine: MantineThemeOverride = {
  primaryShade: 4,
  colors: {
    sexyred: red,
    sexyblue: marine,
    sexyviolet: violet,
    sexypink: pink,
  },
  primaryColor: "sexyred",
  fontFamily: "'Poppins', sans-serif",
  headings: {
    fontFamily: "'Poppins', sans-serif",
  },
};