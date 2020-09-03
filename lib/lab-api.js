const getName = ({ name }) => name;


const copyAndPush = (arr, num) => {
  const arrCopy = [...arr, num];
  return arrCopy;
};

module.exports = {
  getName, copyAndPush };
