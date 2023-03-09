export const shuffle = (array: string[]) => {
  const shuffled = [...array];

  let m = shuffled.length;
  let t = "";
  let i = 0;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = shuffled[m];

    shuffled[m] = shuffled[i];
    shuffled[i] = t;
  }

  return shuffled;
};
