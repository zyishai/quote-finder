import { useMediaQuery } from "react-responsive";
import defaultTheme from "tailwindcss/defaultTheme";

export const useBreakpoint = (breakpoint) => {
  const breakpoints = defaultTheme.screens;
  const matches = useMediaQuery({
    query: `(min-width: ${breakpoints[breakpoint]})`,
  });
  const capitalizedBreakpoint =
    breakpoint[0].toUpperCase() + breakpoint.slice(1);

  return { [`is${capitalizedBreakpoint}`]: matches };
};
