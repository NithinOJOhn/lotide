// Function to roll a single die
const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to roll a specified number of dice
const rollDice = (num) => {
  const results = [];
  for (let i = 0; i < num; i++) {
      results.push(rollDie());
  }
  return results;
}

// Get command line arguments
const args = process.argv.slice(2);

// Validate the input
if (args.length !== 1 || isNaN(args[0])) {
  console.log("Please provide a single number as an argument.");
  process.exit(1);
}

const numberOfDice = parseInt(args[0]);
const diceResults = rollDice(numberOfDice);

// Output the results using Array.prototype.join
console.log(`Rolled ${numberOfDice} dice: ${diceResults.join(", ")}`);
