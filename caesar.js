#!/usr/bin/env node 
/*
JavaScript Caesar shift
by Evan Hahn (evanhahn.com)
* * * * * * * * * * * *
For small occasions (like month-anniversaries), I like to make little websites
for people that only "unlock" on the right day.
Foolproof security would unlock the page with the server, but I don't want to
go through all the effort. I just want to prevent people from opening up "View
Source" and seeing what I've written, so I wrote a Caesar cipher in JavaScript
to obfuscate the text a bit, which will then reverse when I want the page to
unlock.
Call it like this:
    caesarShift('Attack at dawn!', 12);    // Returns "Mffmow mf pmiz!"
And reverse it like this:
    caesarShift('Mffmow mf pmiz!', -12);    // Returns "Attack at dawn!"
Easy peasy! Enjoy.
* * * * * * * * * * * *
This is free and unencumbered software released into the public domain.
Anyone is free to copy, modify, publish, use, compile, sell, or distribute
this software, either in source code form or as a compiled binary, for any
purpose, commercial or non-commercial, and by any means.
In jurisdictions that recognize copyright laws, the author or authors of this
software dedicate any and all copyright interest in the software to the public
domain. We make this dedication for the benefit of the public at large and to
the detriment of our heirs and successors. We intend this dedication to be an
overt act of relinquishment in perpetuity of all present and future rights to
this software under copyright law.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
For more information, please refer to <http://unlicense.org/>
*/

// print process.argv
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  return console.log( "\n" +
`usage: ROTshift[-i string][-r num]

EXAMPLES: 
$ ROTshift -i 'foo' -r 3
$ ROTshift -r 3 -i 'foo'
$ ROTshift 'foo' 3` + "\n");
}
if (process.argv.includes('-i')) {

  var inputString = process.argv[process.argv.indexOf('-i') + 1].toString() 
  var rotations = process.argv[process.argv.indexOf('-r') + 1] 
} else {
  var inputString = process.argv[2].toString()
  var rotations = process.argv[3]
}


const alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const alphaLower = 'abcdefghijklmnopqrstuvwxyz'

var caesarShift = function(str, amount) {

	// Wrap the amount
	if (amount < 0)
		return caesarShift(str, amount + 26);

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
		var c = str[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var letter = str.charAt(i);

      // Uppercase letters
     
			if (alphaUpper.includes(letter)) {
				c = (alphaUpper.indexOf(letter) + amount) % 23;
        d = alphaUpper.charAt(c)
      }
			else if (alphaLower.includes(letter))
				c = (alphaLower.indexOf(letter) + amount) % 23;
        d = alphaLower.charAt(c)
		  }

		// Append
		output += d;

	}

	// All done!
	return output;

};

console.log(caesarShift(inputString, rotations));