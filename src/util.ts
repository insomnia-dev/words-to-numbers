export const splice = (
  str: string,
  index: number,
  count: number,
  add: string
) => {
  let i = index;
  if (i < 0) {
    i = str.length + i;
    if (i < 0) {
      i = 0;
    }
  }

  return str.slice(0, i) + (add || "") + str.slice(i + count);
};
