const getName = ({ name }) => name;


const copyAndPush = (arr, num) => {
  const arrCopy = [...arr, num];
  return arrCopy;
};

const capitalizeAndFilter = (arr) => {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].charAt(0) !== 'f') {
      newArray.push(arr[i].toUpperCase());
    }
  }
  return newArray;
};

module.exports = {
  getName, copyAndPush, capitalizeAndFilter
};
