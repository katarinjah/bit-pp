/* 1. Write a program to insert a string within a string at a particular position (default is 1,
beginning of a string).
"My random string", "JS" -> "JS My random string"
"My random string", "JS", 10 -> "My random JS string" */

function insertString(str1, str2, p) {
  if (!p) {
    p = 1;
  }
  var output = "";
  for (var i = 0; i < str1.length; i++) {
    if (i === p - 1) {
      output += str2
    }
    output += str1[i]
  }
  return output
}

var b = insertString("My random string", "JS", 10);
console.log(b)


/* 2. Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, "", undefined, 47, null] */

function joinToString(arr) {
        var i = -1,
            length = arr ? arr.length : 0,
            index = -1,
            result = [];
    
        while (index++ < length) {
            var value = arr[index];
    
            if (value) {
                result[++index] = value;
            }
        }
    return result;
}

var o = joinToString([NaN, 0, 15, false, -22, "", undefined, 47, null]);
console.log(o);


/* 3. Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, "", undefined, 47, null] ->[15, -22, 47]  */

function removeFalsy(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            delete arr[i]
        }
    }
    return arr
}

var t = removeFalsy([NaN, 0, 15, false, -22, "", undefined, 47, null]);
console.log(t)


/* 4. Write a function that reverses a number. The result must be a number.
12345 -> 54321 // Output must be a number */

function numReverse(n) {
  var b = "" + n, f = "";
  if (typeof n !== "number") {
    return "Invalid input."
  } 
  for (var i = 0, j = b.length; i < b.length; i++, j--) {
      f += j;
  }
  var m = parseInt(f);
  return m
}

var t = numReverse(12345);
console.log(t)


/* 5. Write a function to get the last element of an array. Passing a parameter "n"; will return the
last "n"; elements of the array. 

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]   */

function lastElement(arr, n) {
  var arr2 = [], output = [];
  if (typeof(n) === "undefined") {
    return arr[arr.length-1]
  } 
  for (var i = n; i > 0; i--) {
    output[output.length] = arr[i]
  }
  return output
}

var z = lastElement([7, 9, 0, -2], 2);
console.log(z)



/* 6. Write a function to create a specified number of elements with pre-filled numeric value
array.
6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null]  */


// 7. Write a function that says whether a number is perfect. 

function perfectNum(n) {
    var result = 0;
    for (var i = 1; i <= n - 1; i++) {
      if (n % i === 0) {
        result += i;
      }
    }
    return result === n ? "Number is perfect" : "Number is not perfect";
  }
  var k = perfectNum(497);
  console.log(k);
  

/* 8. Write a function to find a word within a string.
'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd', 'aa' -> "'aa' was found 2 times" 

function findWord(string, word) {
    var output = "", num = 1;

    for (var i = 0; i < string.length; i++) {
        if (word[i] !== 0) {
            num++;
            output = word + " was found " + num + " times"
    }
    }
    return output
}

var c = findWord("What a lovely day a day a day", "day");
console.log(c)

*/

/* 9. Write a function to hide email address.
"myemailaddress@bgit.rs" -> "mye...@bgit.rs" */

function hideEmail(email) {
    var m = email, output = "";

    for (i = 0; i < email.length; i++) {
      if (i > 2 && i< email.indexOf("@") ) {
        output += "*";
      } else {
        output += email[i];
      }
    }
    return output
}

var w = hideEmail("dasdf@gmail.com");
console.log(w)


// 10. Write a program to find the most frequent item of an array.

function mostFreq(arr) {
  var number = 1, frequency = 0, e;

  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        frequency++;
      }
      if (number < frequency) {
        number = frequency;
        e = arr[i];
      }
    }
    frequency = 0;
  }
  return e
}

var h = mostFreq([1, "t", 6, "t", "a", "t"]);
console.log(h);
