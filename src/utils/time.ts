export const convertTZ = (date: Date, tzString: string) => {
  return new Date(date.toLocaleString('en-US', { timeZone: tzString }));
};
