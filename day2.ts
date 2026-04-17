interface User {
    name: String;
    age: number;
    isIntern: boolean;
    company: String;
}

const mickel: User = {
    name: "Mickel",
    age: 21,
    isIntern: true,
    company: "Intuit",
}

function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log(addNumbers(5, 10));
