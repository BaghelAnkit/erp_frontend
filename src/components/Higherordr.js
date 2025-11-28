const radius = [3, 2, 4, 6];

const area = function () {
  return Math.PI * radius * radius;
};
const circumfenrence = function () {
  return 2 * Math.PI * radius;
};
const diameter = function () {
  return 2 * radius;
};

const calculate = function (arr, logic) {
  const output = [];
  for (i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};


//calcute is higher order function and area is callback funtion 
// higher order function are those function which iscalled another function as an argument and that another fuction is callback fuction 
// map filter reduce are hgher order function 

console.log(calculate(radius, area));
console.log(radius.map(area))
 
// const calculatearea = function (radius){
//     const output=[];
//   for(i= 0 ; i<radius.length;i++){
//     output.push(Math.PI*radius[i]*radius[i])
//     return output

//   }
// }
// console.log(calculatearea(radius))
