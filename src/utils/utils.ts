export const removeWordFromString = (initialString: string, stringToRemove: RegExp | string) => {
  return initialString.replace(stringToRemove, '').trim();
};
