

//?? Interview Question

//?? Given:

// const array1 = ['a', 'b', 'c', 'd'];
// const array2 = ['z', 'y', 'i'];
// Should return TRUE

const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['z', 'y', 'd'];
// Sholud return FALSE


function containsCommonItem(arr1, arr2) {
	for(let i = 0; i < arr1.length; i++) {
		for(let j = 0; j < arr2.length; j++) {

			if(array1[i] === arr2[j]) {
				return true;
			}
		}
	}
	return false;
}

containsCommonItem(array1, array2);

// this will run in O(n^2) times. which is horrible. we need to optimize this.

// here it goes:
 

 



