/*
 ## this project was written by Y.Marrakchi

## it's inspired by traversy media dom manipulation tutorial

## props to traversy media

## this is part 1 of 3

## pleasse check the original  ---->  https://www.youtube.com/user/TechGuyWeb

## my github ----->       https://github.com/youness-marrakchi

*/


// this is a dom manipulation project based on traversy media's tutorial



// making variables for both the form and ul

var items = document.getElementById("items");
var theform = document.getElementById("form");

// form submition event
theform.addEventListener("submit", addToCart);

//creating a function to add an item to the cart
function addToCart(e) {
	e.preventDefault(); // preventing the default submition from occuring

	var item = document.getElementById("itemname").value;

	// this line will create a new li
	var newli = document.createElement("li");
	// assigning a classname to the tag
	newli.className = "list-group-item";
	// filling the li with the inserted data from the input
	newli.appendChild(document.createTextNode(item));

	// let"s create the delete button
	var dlBtn = document.createElement("button");
	// giving it a classname
	dlBtn.className = "btn btn-danger btn-md float-right delete";

	// giving the x to the button
	dlBtn.appendChild(document.createTextNode("x"));

	//appending the button to the li tag
	newli.appendChild(dlBtn);

	// let"s append the li to the ul tag
	items.appendChild(newli);
}