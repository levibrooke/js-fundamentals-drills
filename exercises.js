/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
};

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
var sumArrays = function(arr1, arr2) {

  function getSum(a,b) {
    return a + b;
  }

  var sumOne = arr1.reduce(getSum);
  var sumTwo = arr2.reduce(getSum);

  return sumOne + sumTwo;

};

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function(string) {
  var length = string.length;
  return length;
};

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {String}
 * @return {Number}
 */
var arrayLength = function(arr) {
  return arr.length;
};

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function(arr) {

  function sumArray(a,b) {
    return a + b;
  }

  return arr.reduce(sumArray);

};

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = function(arr) {

  var stringLenths = [];

  for (var i = 0; i < arr.length; i++) {
    var length = arr[i].length;

    stringLenths.push(length);
  }

  return stringLenths;
};

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = function(arr) {

  var newArray = [];

  for (var i = 0; i < arr.length; i++) {
    var length = arr[i].length;

    newArray.push(length);
  }

  function sum(a,b) {
    return a + b;
  }

  return newArray.reduce(sum);

};

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = function(obj) {
  return Object.values(obj);
};

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function(obj) {
  var newArray = Object.keys(obj);

  return newArray.length;
};

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
var createZeroFilledArray = function(n) {

  var newArray = [];

  while (n > 0) {
    newArray.push(0);
    n--;
  }

  return newArray;
};

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function(arr) {
  arr.pop();
  return arr;
};

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function(str) {
  return str.split("");
};

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = function(arr) {
  var newArray = arr.pop();

  return newArray.length;
};

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */


var sumBelowTen = function(arr) {

  var total = 0;

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] < 10) {

      total += arr[i];

    }
  }
  return total;
};

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = function(str) {

  var number = 0;

  for (var i = 0; i < str.length; i++) {

    while (str[i].length > 10) {

      return number + 1;
    }
  }
  return number;
};

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function(arr) {

  var num = 1;

  for (var i = 0; i < arr.length; i++) {
    num *= arr[i];
  }
  return num;
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(obj) {

  return Object.keys(obj);

};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = function(arr) {

  var sum = 0;

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] >= 0) {
      sum += arr[i];
    }
  }
  return sum;
};

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function(arr) {

  var num = 0;

  for (var i = 0; i < arr.length; i++) {

    if (arr[i].length <= 3) {
      num = num + 1;
    }
  }
  return num;
};

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function(arr) {
  return arr.length;
};

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function(obj) {
  return Object.keys(obj);
};

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function(obj) {
  return Object.values(obj);
};

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function(key, value) {
  var newObject = {};

  newObject[key] = value;

  return newObject;
};

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
var makeObjectReverse = function(value, key) {
  var newObject = {};

  newObject[key] = value;

  return newObject;
};

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function(arr) {
  var newObject = {};

  newObject[arr[0]] = arr[1];

  return newObject;
};

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function(arr) {
  var newObject = {};

  newObject[arr[1]] = arr[0];

  return newObject;
};

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function(arr) {
  var newObject = {};

  for (var i = 0; i < arr.length; i++) {
    newObject[arr[i]] = 0;
  }
  return newObject;
};

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function(obj) {
  return Object.values(obj);
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(obj) {
  return Object.keys(obj);
};

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function(obj) {
  var parentArray = [];

  var keys = Object.keys(obj);
  var values = Object.values(obj);

  for (var i = 0; i < keys.length; i++) {
    var arr = [];

    arr.push(keys[i]);
    arr.push(values[i]);

    parentArray.push(arr);
  }

  return parentArray;

};

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function(arr) {

  var newObject = {};

  for (var i = 0; i < arr.length; i++) {
    newObject[arr[i]] = false;
  }

  return newObject;
};

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function(arr1, arr2) {
  var newObject = {};

  for (var i = 0; i < arr1.length; i++) {
    newObject[arr1[i]] = arr2[i];
  }
  return newObject;
};

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function(obj1, obj2) {
  var newArray = [];

  for (var key1 in obj1) {
    var arr1 = [];
    arr1.push(key1, obj1[key1]);
    newArray.push(arr1);
  }

  for (var key2 in obj2) {
    var arr2 = [];
    arr2.push(key2, obj2[key2]);
    newArray.push(arr2);
  }

  return newArray;
};

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function(arr) {
  var newObject = {};

  for (var i = 0; i < arr.length; i++) {
    newObject[arr[i]] = true;
  }

  return newObject;

};

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function(arr) {
  var newObject = {};

  for (var i = 0; i < arr.length; i++) {

    if (arr[i].length >= 5) {
      newObject[arr[i]] = true;
    }
    else {
      newObject[arr[i]] = false;
    }
  }
  return newObject;
};

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function(arr) {
  var newObject = {};

  for (var i = 0; i < arr.length; i++) {
    newObject[arr[i]] = true;
  }
  return newObject;
};

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 *
 * @param {String}
 * @return {Object}
 */
var stringToKeys = function(str) {

  var newObject = {};
  var newArray = str.split("");

  for (var i = 0; i < newArray.length; i++) {
    newObject[newArray[i]] = true;
  }
  return newObject;
};

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap = function(arr) {
  var newObject = {};

  for (var i = 0; i < arr.length; i++) {
    newObject[arr[i]] = arr[i].length;
  }
  return newObject;
};

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap = function(arr) {
  var newObject = {};

  for (var i = 0; i < arr.length; i++) {

    if (newObject[arr[i]]) {
       newObject[arr[i]]++;
    }
    else {
      newObject[arr[i]] = 1;
    }
  }

  return newObject;
};

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject = function(arr) {

  var newObject = {};

  for (var i = 0; i < arr.length; i++) {
    newObject[arr[i][0]] = arr[i][1];
  }

  return newObject;
};


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  getKeys: getKeys,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
};
