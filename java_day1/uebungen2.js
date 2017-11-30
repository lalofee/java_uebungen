document.write("hello world");
	
	console.log("testing");

	var number1 = 5;
	var number2 ="5";

	document.write(number1 + number2);

	
	var team = ["thomas", "matthias", "oliver"]
	document.write(team[1]);
	console.log(team[2]);

	var age = 29;
	var course = "Angular";
	document.write("Hi my name is Igor and I am " + age + " and i love " + course);

	var b = `I am a Javascript developer.`;
	document.write(b.substring(10));

	temp = b.split(` `);
	console.log(temp);

document.write(`<br>`)
document.write(`<br>`)

var players = ["martin", "thomas", "peter"]

document.write("The most valuable player of the match is " + (players[2]));

document.write(`<br>`)
document.write(`<br>`)
/*Write a JavaScript program that will sort alphabetically the following words: 
Tesla, BWM, Renault, Volvo, Mazda, Fiat and Ferari*/
var cars =["Tesla", "BMW", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"]

cars.sort();

document.write(cars)

document.write(`<br>`)
document.write(`<br>`)
/*Create a program that using push and pop methods will provide the following output:
Start = apple, banana, kiwi,
After Push = apple, banana, kiwi, orange
After Pop = apple, banana, kiwi
Each statement should be outputted on separate line.*/



var fruits = ["apple", "banana", "kiwi"]

fruits.push("orange");
fruits.pop();

document.write(fruits);

document.write(`<br>`)
document.write(`<br>`)
/*Create a program that will output each fruit on a separate line in 
the web browser from the following string "mango/cherries/kiwi/grapes/
pear/peach/orange/lemon".*/

/*var fruechte = ["mango", "cherries", "kiwi", "grapes", "pear"]

document.write(fruechte/n)*/



document.write("I\'m a JavaScript \n developer");   //funktioniert nicht?

document.write(`<br>`)
document.write(`<br>`)

document.write("hello worl".length);