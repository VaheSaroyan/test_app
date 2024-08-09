const randomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export const randomColorGenerator = () => {
  let color = randomColor();

  while (color === '#ffffff') {
    color = randomColor();
  }

  return color;
};
