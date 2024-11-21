document.getElementById("button1").addEventListener("click", () => {
    var randomString = Array.from({length: 10}, () => String.fromCharCode(97 + Math.floor(Math.random() * 26)));
    var codes = randomString.map(char => char.toUpperCase().charCodeAt(0));
    codes = codes.filter(code => code % 5 !== 0);
    var sum = codes.reduce((sum, code) => sum + (code % 5), 0);
    console.log("Строка:", randomString.join(""));
    console.log("Коды:", codes);
    console.log("Сумма:", sum, "\n");
});

document.getElementById("button2").addEventListener("click", () => {
    var num = Array.from({length: 1000}, () => Math.floor(Math.random() * 41 + 80));
    num = num.sort((a, b) => (b % 10) - (a % 10));
    console.log("Массив:", num, "\n");
});

document.getElementById("button3").addEventListener("click", () => {
    var average = (...args) => {
        var arithm = args.reduce((sum, num) => sum + num, 0) / args.length;
        var harmonic = args.length / args.reduce((sum, num) => sum + 1 / num, 0);
        return {arithm, harmonic};
    };
    var numbers = Array.from({length: 5}, () => Math.floor(Math.random() * 51 + 10));
    var result = average(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]);
    console.log("Значения: ", numbers);
    console.log("Среднее арифметическое: ", result.arithm);
    console.log("среднее гармоническое: ", result.harmonic, "\n");
});

document.getElementById("button4").addEventListener("click", () => {
    var names = ["Катя", "Андрей", "Вадим", "Игорь", "Алексей", "Иван", "Артем", "Сергей", "Юлия", "Ирина"];
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        print() {
            console.log(`Здравствуйте, меня зовут ${this.name}, мне ${this.age} лет.`);
        }
    }
    var persons = Array.from({ length: 20 }, () => {
        var randomName = names[Math.floor(Math.random() * names.length)];
        var randomAge = Math.floor(Math.random() * 61) + 20;
        return new Person(randomName, randomAge);
    });
    persons.forEach(person => person.print());
});