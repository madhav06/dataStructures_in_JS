// way to measure BIG O time complexity here

const nemo = ['nemo']; // creating very simple short array

// creating array of elements 10
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 
'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

// creating a very large array of hundred thousands, as number of i/p inc.
//our program slows down more and more taking more and more time.
const large = new Array(100000).fill('nemo');
function findNemo(array) {
	let t0 = performance.now();

	for(let i = 0; i < array.length; i++) {
		if(array[i] == 'nemo') {
			console.log('FOUND NEMO!')
		}
	}
	let t1 = performance.now();
	console.log('Call to find Nemo took ' + (t1-t0) + 'millisec');
}

findNemo(nemo);




// Big_O Exercise_1: Calculate Runtime:

// What is the Big O of the below function? (Hint, you may want to go line by line)

function funChallange(input) {   // O(n) or O(input)
	let a = 10;                  //-----> O(1)
	a = 50 + 3;                  // -----> O(1)

	for(let i = 0; i < input.length; i++) {    // O(n)
		anotherFunction();                     // O(n)
		let stranger = true;                   // O(n)
		a++;                                   // O(n)
	}
	return a;                                 // O(1)
}
funChallange();

// Runtime : 3 + 5n == O(3 + 5n) == O(n)  as 3 will be negligble compared to n.




// Big_O Exercise_2: Calculate Runtime:

// What is the Big O of the below function? (Hint, you may want to go line by line)


function anotherFunChallange(input) {    // O(n)

	let a = 5;                          // O(1)
	let b = 10;                         // O(1)
	let c = 50;                         // O(1)

	for(let i = 0; i < input; i++) {    // O(n)

		let x = i+1;                   // O(n)
		let y = i+2;                   // O(n)
		let z = i+3;                   // O(n)
	}
	for(let j = 0; j < input; j++) {   // O(n)

		let p = j*2;                   // O(n)
		let q = j*2;                   // O(n)
	}
	let whoAmI = "I don't know";       // O(1)
}
anotherFunChallange();


// Runtime: BIG_O(4 + 7n) == BIG O(n)  since, 4 <<<< 7n





// BIG_O RULE 1: we always care about what is the worst case scenerio.

//for example here: 


const nemo = ['nemo'];

const everyone = ['dory', 'bruce', 'marlin', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank', 'nemo'];

const large = new Array(100000).fill('nemo');

function findNemo(array) {
	for(let i = 0; i < array.length; i++) {
		console.log('running');

		if(array[i] === 'nemo') {
			console.log('FOUND NEMO!');
			break;
		}
	}
}
findNemo(everyone);

// Runtime: will be O(n) as in worst case 'nemo' will be at last position.







// BIG_O RULE 2: when 'n' is sufficiently large as often it is, we drop the constants. like if n/2 it will be n. if 2n it will be n.

// for example here:


function printFirstItemThenFirstHalf(items) {

	console.log(items[0]);            // O(1)

	var middleIndex = Math.floor(items.length/2);
	var index = 0;

	while(index < middleIndex) {     // O(n/2)
		console.log(items[index]);
		index++;
	}
    for(var i =0; i < 100; i++) {    // O(100)
    	console.log('hi');
    }

}
printFirstItemThenFirstHalf();


// Runtime: O(1 + n/2 + 100) === O(n), here n is sufficiently large, so drop constants. 





// BIG_O RULE 3: Just becoz we see 2 for loops doesn't mean that their constant should be dropped or they are looping over 
// same items. And if they are looping over different items, we can not drop their constant, we need to mention it.


// an example is here:





function compressBoxesTwice(boxes, boxes2) {

	boxes.forEach(function(boxes) { // O(n)
		console.log(boxes);
	});


	boxes2.forEach(function(boxes) { //O(m)
		console.log(boxes);
	});
}
compressBoxesTwice(boxes, boxes2);

// Runtime: O(n + m)




// O(n^2) or Program that log all pairs of array


const boxes = [1,2,3,4,5];

function logAllPairsOfArray(array) {

	for(let i = 0; i < array.length; i++) {
		for(let j = 0; j < array.length; j++) {
			console.log(array[i], array[j]);
		}
	}
}

logAllPairsOfArray(boxes);

// Runtime: O(n * n) === O(n^2) 




// BIG_O RULE 4: ignore non-dominant terms.



// example here:


function printAllNumbersThenAllPairSums(numbers) {
	console.log('these are numbers:');

	numbers.forEach(function(number) {
		console.log(number);
	});


	console.log('and these are their sums: ');

	numbers.forEach(function(firstNumber) {
		numbers.forEach(function(secondNumber) {
			console.log(firstNumber + secondNumber);
		});
	});
}

printAllNumbersThenAllPairSums([1,2,3,4,5]);


// Runtime: O(n * n) ==== O(n^2).




// Exercise_Space_Complexity


function boo(n) {
	for(let i = 0; i < n.length; i++) {
		console.log('boooo!');
	}
}

boo([1,2,3,4,5])                      
// Space Complexity:  O(1)



function arrayOfHi(n) {
	let hiArray = [];

	for(let i =0; i < n; i++) {
		hiArray[i] = 'hi';
	}
	return hiArray;
}

arrayOfHi(6)                          
// Space Complexity:  O(n) 





// Exercise_Twitter


// Find 1st, Find Nth


const array = [{
	tweet: 'hi',
	date: 2012
	}, {

	tweet: 'my',
	date: 2014
	}, {

	tweet: 'teddy',
	date: 2018
	}]



























































































































































































