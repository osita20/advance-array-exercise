// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const array2 =[];
array.forEach(people => array2.push(people.surname + '!'));
console.log('forEach',array2)
//Create an array using map that has all the usernames with a "? to each of the usernames

const newMap = array.map(people=> people.surname + '?');
console.log('map',newMap);
//Filter the array to only include users who are on team: red
 const newFilter = array.filter(num =>num.team ==='red');
 console.log('newFilter',newFilter);

//Find out the total score of all users using reduce
let newReduce = array.reduce((accumulator,num) =>{return accumulator + num.score}, 0);
 console.log('newReduce', newReduce);

// (1), what is the value of i? //index 0,1,2,3,4,5
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
});
console.log(num, i);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const list = [];
array.forEach(newList =>{
  list.push({
    ...newList,items:newList.items.map(newitems=>newitems + '!')
  })
})
console.log('newlist', list);