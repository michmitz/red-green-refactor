const getName = ({ name }) => name;


const copyAndPush = (arr, num) => {
  const arrCopy = [...arr];
  arrCopy.push(num);
  return arrCopy;
};

module.exports = {
  getName, copyAndPush };
