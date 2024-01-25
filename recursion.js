// RECURSION - a function that calls it's self!

const factor = (num, acc = 1) => {
  if(num-1 === 0) return acc;
  console.log(num, acc)
  return factor(num-1, num * acc)
}

// console.log(factor(5));

// PRINT ALL VALUE IN AN ARRAY 

function allValues(arr){
  if(arr.length === 0) return;
  console.log(arr[0]);
  allValues(arr.slice(1));
}

allValues([5,6,7,8]);

// BREAD CRUMBS

function sumNums2(nums) {
  if (nums.length === 0) {
    return 0;
  }

//   // -----vvvvv--Breadcrumb--------
  return nums[0] + sumNums2(nums.slice(1));
}

// NESTED ARRAY
function doublerRecursive(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      doublerRecursive(item);
    } else {
      console.log(item * 2);
    }
  }
}