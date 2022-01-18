//comand line args

const timerInput = process.argv.slice(2);

const timer = (input) => {

  if (!allPositive(input)) {
    return;
  }
  if (input.length > 0) {
    for (const item of input) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, (item * 1000));
    }
  }
};

const allPositive = (arr) => {
  for (const item of arr) {
    let num = Number(item);
    if (num === 'NaN') {
      return false;
    }
    if (num < 0) {
      return false;
    }
  }
  return true;
};

timer(timerInput);

























// const timer = function(any) {
//   console.log(any.split(" "));
// };
// timer();


// const spinnerArray = [];
// let counter = 100;
// let counter2 = 2;
// const runSpinner = function(arr) {
//   while (counter2 > 0) {
//     for (const act of arr) {
//       setTimeout(() => {
//         process.stdout.write(act);
//       }, counter);
//       counter += 200;
//     }
//     counter2 --;
//   }
//   setTimeout(() => {
//     process.stdout.write("\n");
//   }, counter);
// };
// runSpinner(spinnerArray);