// strStr is essentially the same as indexOf method of string

const strStr = (haystack, needle) => {
  if (needle === '') return 0;

  const i = haystack.indexOf(needle);
  return i;
};
