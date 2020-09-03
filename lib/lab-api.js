const getName = ({ name }) => name;


const copyAndPush = (arr, num) => {
  const arrCopy = [...arr, num];
  return arrCopy;
};

const capitalizeAndFilter = (arr) => {
  const newArray = 
    arr.filter(string =>
      string.charAt(0) !== 'f');
  const newerArray =
    newArray.map(string => 
      string.toUpperCase());
  return newerArray;
};

module.exports = {
  getName, copyAndPush, capitalizeAndFilter
};
