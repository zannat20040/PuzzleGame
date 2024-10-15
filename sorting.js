// Function to generate random array of digits
const randomDigitGenerate = () => {
  const randomArray = [];
  while (randomArray.length < 9) {
    const randomNum = Math.floor(Math.random() * 9) + 1;
    if (!randomArray.includes(randomNum)) {
      randomArray.push(randomNum);
    }
  }
  return randomArray;
};

// Function to update the UI with random numbers
const updateRandomNumbersUI = (randomDigitArray) => {
  const randomElement = document.getElementById("random");
  randomElement.innerHTML = ""; // Clear existing numbers before updating

  // Map through the new random array and append the numbers to the DOM
  randomDigitArray.map((number) => {
    randomElement.innerHTML += `
        <p class="randomNumber border border-white text-white h-[70px] flex justify-center items-center bg-teal-500">
          ${number}
        </p>
      `;
  });
};

// Initial random numbers generation
const randomDigitArray = randomDigitGenerate();
updateRandomNumbersUI(randomDigitArray);

// Function to handle the "Change" button click
const HandleChange = () => {
  const newRandomDigitArray = randomDigitGenerate(); // Generate new random digits
  updateRandomNumbersUI(newRandomDigitArray); // Update the UI with new random digits
  const solveElement = document.getElementById("solve");
  solveElement.innerHTML = "";
  document.getElementsByClassName("heading")[0].innerText = "";
};

const HandleSolve = () => {
  const sortMatrix = randomDigitArray.sort((a, b) => a - b); // Sort the random array in ascending order
  updateSolveNumbersUI(sortMatrix); // Update the "solve" UI with the sorted numbers
};

// Function to update the UI with sorted numbers
const updateSolveNumbersUI = (solveDigitArray) => {
  document.getElementsByClassName("heading")[0].innerText = "Puzzle Solved";
  const solveElement = document.getElementById("solve");
  solveElement.innerHTML = ""; // Clear existing numbers before updating

  // Map through the sorted array and append the numbers to the DOM
  solveDigitArray.map((number) => {
    solveElement.innerHTML += `
        <p class="randomNumber border border-white text-white h-[70px] flex justify-center items-center bg-purple-500">
          ${number}
        </p>
      `;
  });
};
