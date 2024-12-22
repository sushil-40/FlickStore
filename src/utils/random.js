export const randomChar = () => {
  const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJ";
  return str[Math.floor(Math.random() * str.length)];
};
