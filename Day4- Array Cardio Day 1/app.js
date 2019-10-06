console.log('hey friends!');

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Issac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernius', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 
'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 
'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 
'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 
'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 
'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 
'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 
'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 
'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 
'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 
'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 
'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 
'Blake, William'];

//1. Array.prototype.filter() for filtering the list for those born in the 1500s
const fifteen = inventors.filter(function(inventor){
  if(inventor.year >= 1500 && inventor.year <= 1599)
  return true; //means we keep it in the array
});

//arrow function 
const fifteenHundreds = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1599));
// console.table(fifteenHundreds);

//2. Array.prototype.map() gives a new array of the inventors by first/last names.
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
// console.log(fullNames)

//3. Array.prototype.sort() for sorting the inventors by birthdate, oldest to youngest with compare function.
const ordered = inventors.sort(function(firstPerson, secondPerson){
  if (firstPerson.year > secondPerson.year){
    return 1;
  }else{
    return -1;
  }
});

//shorter version of above

const orderedAgain = inventors.sort((a,b) => a.year > b.year ? 1 : -1); //ternary operator
// console.table(orderedAgain);

//4. Array.prototype.reduce() based on how many years did all the inventors live.
const totalYears = inventors.reduce((total, inventor)=> {
  return total + (inventor.passed - inventor.year);
}, 0);

// console.log(totalYears);

//5. sorting inventors by years lived 
const oldest = inventors.sort(function (a,b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
});

// console.table(oldest);

//6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a')); // creating an array from node list

// const de = links
//                 .map(link => link.textContent);
//                 .filter(streetName => streetName.includes('de'));

//.7 sort Exercise: sory the people alphabetically by last name

const alpha = people.sort((lastOne, nextOne) =>{
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});

// console.log(alpha);

//.8 Reduce exercise: sum up the instances of each of these.

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const transportation = data.reduce(function(obj, item){
  if(!obj[item]){
    obj[item] = 0;
  }//see if there is no objects
  obj[item]++;
  return obj;
}, {}); //blank object

console.log(transportation);