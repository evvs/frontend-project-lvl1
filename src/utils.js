const getRandomNumber = (min = 1, max = 100) => (
  min === 0 ? Math.floor(Math.random() * (max + 1)) : Math.floor(Math.random() * max) + min);

export { getRandomNumber as default };
