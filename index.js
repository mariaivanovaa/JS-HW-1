const age = 15
console.log(age);

const name = "Mariia"
console.log(name);

const isStudent = true
console.log(isStudent);

const myString = "You won’t understand what I mean now, but someday you will: the only trick of friendship, I think, is to find people who are better than you are—not smarter, not cooler, but kinder, and more generous, and more forgiving—and then to appreciate them for what they can teach you, and to try to listen to them when they tell you something about yourself, no matter how bad—or good—it might be, and to trust them, which is the hardest thing of all. But the best, as well."
console.log(myString);

let myNumber = 25
myNumber = myNumber + 10;
console.log(myNumber);

let myNull = null;
console.log(myNull);

let userName = prompt("Будь ласка, введіть своє ім'я:");
if (userName) {
    alert("Вітаємо, " + userName + "!");
} else {
    alert("Ви не ввели ім'я.");
}

let actionConfirmation = confirm("Ви підтверджуєте дію?");
if (actionConfirmation) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}

alert("Увага! Ця дія може бути небезпечною.");
let dangerConfirmation = confirm("Ви підтверджуєте дію, незважаючи на небезпеку?");
if (dangerConfirmation) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}
