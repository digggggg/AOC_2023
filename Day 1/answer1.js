import * as fs from "fs";

const data = fs
    .readFileSync("data.txt", { encoding: "utf8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n");

console.log(data);

const numbersList = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
const wordNumsList = new Map([
    ["one", "1"],
    ["two", "2"],
    ["three", "3"],
    ["four", "4"],
    ["five", "5"],
    ["six", "6"],
    ["seven", "7"],
    ["eight", "8"],
    ["nine", "9"],
]);

function part1(data) {
    var answer = 0;
    for (var i = 0; i < data.length; i++) {
        let index = data[i];
        var numsArr = [];

        for (var j = 0; j < index.length; j++) {
            if (numbersList.has(index[j])) {
                numsArr.push(index[j]);
            }
        }
        let start = numsArr[0];
        let end = numsArr[numsArr.length - 1];

        var sum = start + end;
        console.log(sum);
        answer += parseInt(sum);
    }
    console.log("This is the answer", answer);
}
function part2(data) {
    var answer = 0;
    for (let i = 0; i < data.length; i++) {
        let index = data[i];
        var left = 0;
        var right = index.length - 1;
        var leftString = "";
        var rightString = "";

        for (left; left < index.length; left++) {
            let finish = false;
            leftString += index[left];
            if (left >= 2) {
                for (let key of wordNumsList) {
                    if (leftString.includes(key[0])) {
                        leftString = wordNumsList.get(key[0]);
                        finish = true;
                        break;
                    }
                }
                if (finish === true) {
                    break;
                }
            }

            if (numbersList.has(index[left])) {
                leftString = index[left];
                break;
            }
        }

        for (right; right > 0; right--) {
            let finish = false;
            rightString += index[right];
            if (right <= index.length - 3) {
                for (let key of wordNumsList) {
                    // console.log(key[0]);
                    // console.log(rightString.split("").reverse().join(""));
                    if (
                        rightString
                            .split("")
                            .reverse()
                            .join("")
                            .includes(key[0])
                    ) {
                        rightString = wordNumsList.get(key[0]);
                        finish = true;
                        break;
                    }
                }
                if (finish === true) {
                    break;
                }
            }

            if (numbersList.has(index[right])) {
                rightString = index[right];
                break;
            }
        }
        // console.log(rightString);
        let sum = leftString + rightString;
        // console.log(sum);
        answer += parseInt(sum);
    }
    console.log(answer);
}

// part1(data);
part2(data);
