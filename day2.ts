function getFirstItem<T>(arr: T[]): T {
    return arr[0];
}

const firstNumber = getFirstItem([1, 2, 3]);
const firstName = getFirstItem(["Mickel", "Jordan", "Jeremy"]);

console.log(firstNumber);
console.log(firstName);