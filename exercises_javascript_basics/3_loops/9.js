let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

let i = 0;

while (fish[i] !== 'Nemo') {
  console.log(fish[i]);
  i += 1;
}

// I chose the top way, if I am to terminate as soon as I encounter 'Nemo' before logging. Below is the given solution, but loging the string before terminating.



// for (let i = 0; i < fish.length; i += 1) {
//   console.log(fish[i]);

//   if (fish[i] === 'Nemo') {
//     break;
//   }
// }