const fetch = require('node-fetch');

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

const fetchQuote = async() => {
  const response = await fetch('http://futuramaapi.herokuapp.com/api/characters/zapp-brannigan/1');

  const [{ character: name, quote: text, image }] = await response.json();

  return {
    name,
    text,
    image
  };
};

module.exports = {
  getName, copyAndPush, capitalizeAndFilter, fetchQuote
};

