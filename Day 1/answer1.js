import * as fs from "fs";

const data = fs
    .readFileSync("data.txt", { encoding: "utf8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n");

console.log(data);

const numbersList = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);

function part1(data) {
    var answer = 0;
    for (var i = 0; i < data.length; i++) {
        let index = data[i];
        var sum = 0;
        for (var j = 0; j < index.length; j++) {
            if (numbersList.has(index[j])) {
                sum += parseInt(index[j]);
            } else {
                console.log("The character is not numeric");
            }

            console.log(sum);
        }
        answer += sum;
    }
    console.log("This is the answer", answer);
}
function part2() {}

part1(data);
