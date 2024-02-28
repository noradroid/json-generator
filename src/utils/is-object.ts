export const isObject = (x: any): boolean => {
  return typeof x === "object" && !Array.isArray(x) && x !== null;
};
