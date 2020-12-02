const isRepdigit = (num) => {
  if(num === 0)
    return true;
  
  let newArr = num.toString().split('');
  if((Math.sign(num) === 1) && (newArr[0] === newArr[1] || newArr.length === 1))
    return true;

  return false;
}

isRepdigit(55);




/********
isRepdigit(66) ➞ true
isRepdigit(0) ➞ true
isRepdigit(-11) ➞ false
 */