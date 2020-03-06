// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.




secretCode = (str) => {

        return str.replace(/a/gi, 4).replace(/e/gi, 3).replace(/i/gi, 1).replace(/o/gi, 0)


}


var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"
console.log(secretCode(secretCodeWord1));
console.log(secretCode(secretCodeWord2));

// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.





var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const findA = (arr) => {
    return arr.filter(word => word.includes("a") || word.includes("A"))
}

console.log(findA(arrayOfWords));

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.





var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false



const fullHouse = (arr) => {
    let count1 = 0
    let count2 = 0
    let first = arr[0]
    let second = 0



    for (let i = 0; i<arr.length; i++) {
        if (first !== arr[i]) {
            second = arr[i]

        }
    }
    for (let i = 0; i<arr.length; i++) {

        if (first === arr[i]) {
            count1 += 1
        } else if (second === arr[i]) {
            count2 += 1
        }
    } if ((count1 === 2 && count2 === 3) || (count1 === 3 && count2 === 2)) {
        return true
    } else {
        return false
    }
}


console.log(fullHouse(hand1));
console.log(fullHouse(hand2));
