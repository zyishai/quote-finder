export const getJulianDate = (date) => {
  return date / 86400000 - date.getTimezoneOffset() / 1440 + 2440587.5;
};
