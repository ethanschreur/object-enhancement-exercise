function createInstructor(firstName, lastName) {
	return {
		firstName: firstName,
		lastName: lastName
	};
}
function createInstructor(firstName, lastName) {
	return { firstName, lastName };
}
console.log(createInstructor('Ethan', 'Schreur'));

var favoriteNumber = 42;

var instructor = {
	firstName: 'Colt'
};

instructor[favoriteNumber] = 'That is my favorite!';

var favoriteNumber = 42;
var instructor = {
	firstname: 'Colt',
	[favoriteNumber]: 'That is my favorite!'
};
console.log(instructor);

var instructor = {
	firstName: 'Colt',
	sayHi: function() {
		return 'Hi!';
	},
	sayBye: function() {
		return this.firstName + ' says bye!';
	}
};
var instructor = {
	firstName: 'Colt',
	sayHi() {
		return 'Hi!';
	},
	sayBye() {
		return this.firstName + ' says bye!';
	}
};
console.log(instructor.firstName);
console.log(instructor.sayHi());
console.log(instructor.sayBye());

const createAnimal = (species, verb, noise) => {
	return {
		species,
		[verb]() {
			return noise;
		}
	};
};

const d = createAnimal('dog', 'bark', 'Woooof!');
// {species: "dog", bark: ƒ}
console.log(d.bark()); //"Woooof!"

const s = createAnimal('sheep', 'bleet', 'BAAAAaaaa');
// {species: "sheep", bleet: ƒ}
console.log(s.bleet()); //"BAAAAaaaa"
