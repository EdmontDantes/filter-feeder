/******************
 * YOUR CODE HERE *
 ******************/
const isOdd = function(num) {
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

const onlyOdds = function(nums) {
  return nums.filter(isOdd);
}

const isEven = function(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const onlyEvens = function(nums) {
  return nums.filter(isEven);
}

const isShort = function(sentence) {
  if (sentence.length < 7) {
    return true;
  } else {
    return false;
  }
}

const shortNamesOnly = function(sentences) {
  return sentences.filter(isShort);
}


const isDName = function(sentence) {
  if (sentence[0] === 'D' || sentence[0] === 'd') {
    return true;
  } else  {
    return false;
  }
}

const dNames = function(sentences) {
  return sentences.filter(isDName);
}

const containsLowercase = function(sentence) {
  if (sentence.toUpperCase() != sentence) {
    return true;
  } else {
    return false;
  }
}

const removeTrolls = function(posts) {
  return posts.filter(containsLowercase);
} 

const isTriStateArea = function(location) {
  if (location.endsWith('NY') || location.endsWith('NJ') || location.endsWith('CT')) {
    return true;
  } else {
    return false;
  }
}

const triStateAreaOnly = function(locations) {
  return locations.filter(isTriStateArea);
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof isOdd === 'undefined') {
  isOdd = undefined;
}

if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof isEven === 'undefined') {
  isEven = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof isShort === 'undefined') {
  isShort = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof isDName === 'undefined') {
  isDName = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}

if (typeof containsLowercase === 'undefined') {
  containsLowercase = undefined;
}

if (typeof removeTrolls === 'undefined') {
  removeTrolls = undefined;
}

if (typeof isTriStateArea === 'undefined') {
  isTriStateArea = undefined;
}

if (typeof triStateAreaOnly === 'undefined') {
  triStateAreaOnly = undefined;
}


module.exports = {
  isOdd,
  onlyOdds,
  isEven,
  onlyEvens,
  isShort,
  shortNamesOnly,
  isDName,
  dNames,
  containsLowercase,
  removeTrolls,
  isTriStateArea,
  triStateAreaOnly,
}
