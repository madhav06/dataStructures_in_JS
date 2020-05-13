// (key, value) pairs.

// insert op - O(1)
// lookup op - O(1)
// delete op - O(1)
// search op O(1)

let user = {
	age: 54,
	name: 'Kylie',
	magic: true,
	scream: function() {
		console.log('ahhhhhhh!');

	}
}

user.age; // O(1)

user.scream(); // O(1)