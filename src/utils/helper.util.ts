export const shortText = (str: string) => {
  if (str.length > 30)
    return str.substr(0, 5) + "..." + str.substr(str.length - 5, str.length);
  return str;
};
