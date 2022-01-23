function findShortestString(arr) {
  // type your code here
  let shortest = arr[0]

  arr.forEach((string) => {
    if (string.length < shortest.length) {
      shortest = string
    }
  })
  return shortest
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    findShortestString(['flower', 'juniper', 'lily', 'dadelion']);
  }

  const avgTime = (Date.now() - startTime) / 1000;
  console.log(avgTime);

  
}




module.exports = findShortestString;

// Please add your pseudocode to this file
// *********************************************************
// define a variable called shortest that saves the value of the first string from the array
//   iterate over the strings in the array and compare the length of current string to the length of shortest
//     if the length of current string is shorter than length of shortest
//     save the current string to the shortest
// return the shortest
// ***********************************************************

// And a written explanation of your solution
