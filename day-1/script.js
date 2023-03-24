let numberOne = 1;
let stringOne = '1';
let numberThirty = 30;
let stringThirty = '30';
let numberTen = 10;
let stringTen = '10';

if (numberOne == stringOne) {
  console.log('Variables numberOne and stringOne have the same value but different types');
} 
else {
  console.log('Variables numberOne and stringOne do not have the same value');
};

if (numberThirty === stringThirty) {
  console.log('The variables numberThirty and stringThirty have the same value and same type');
} 
else {
  console.log('The variables numberThirty and stringThirty do not have the same type');
};

if (numberTen == stringTen) {
  console.log('Variables numberTen and stringTen have the same value, but different types');
} 
else {
  console.log('The variables numTen and stringTen do not have the same value');
};
