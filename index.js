

function revereString(str) {

    let revString = "";

    for(let i = str.length - 1; i >= 0; i--) {
        revString += str[i];
    }
    console.log(`Reverse String : ${revString}`);
}

revereString("Clint");

function palindrome(str) {
    str = str.split("");
    var i = str.length;
    var check = "Yes"

    if (i > 1) {
        for (var j = 0; j < i / 2; j++) {
            // console.log("first " + str[j] + " " + j);
            // console.log("second " + str[i - 1 - j] + " " + (i - 1 - j));
            if (str[j] != str[i - 1 - j]) {
                check = "No";
                // break;
            }
        }
    }
    console.log(`Palindrome Checker : ${check}`);
}
                    
palindrome("qwe");


function evenOdd(num) {
    let oddArr = [];
    let evenArr = [];
    for(let i = 1; i <= num; i++) {
        if(i % 2 == 0) {
            evenArr.push(i);
        }
        else {
            oddArr.push(i);
        }
    }

    console.log(`Even Numbers : ${evenArr}`);
    console.log(`Odd Number ${oddArr}`);
}

evenOdd(3);

function primeNumbers(n)
{
    if(n ===  1) {
        return false;
    } else if( n === 2) {
        return true;
    }
    else {
        for(var x = 2; x < n; x++) {
            if(n % x === 0) {
                return false;
            }
        }
        return true;  
    }
}

console.log(primeNumbers(6));


function sortNumbersAsc() {
    let inputNumbers = [2, 5, 3, 4, 1];
    let sortedNumbers = [];

    let isInserted;
    
    for (let i = 0; i < inputNumbers.length ; i++) {

        isInserted = false;
        for (let j = 0; j < sortedNumbers.length; j++) {

            if (inputNumbers[i] < sortedNumbers[j]) {
                isInserted = true;
                sortedNumbers.splice(j, 0, inputNumbers[i]);
                break;
            }
        }
      
        if (!isInserted) {
            sortedNumbers.push(inputNumbers[i]);
        } 
    }
    console.log(sortedNumbers);
}
sortNumbersAsc();