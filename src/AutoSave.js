let list = document.querySelector('.list');
let listItem = document.querySelectorAll('.todo');
let add = document.querySelector('.add');

add.addEventListener('submit', function (event) {

	// Don't submit the form
	event.preventDefault();

	// Ignore it if the tasklist item is empty
	if (listItem.value.length < 1) return;

	// Add item to wishlist
	list.innerHTML += '<li>' + listItem.value + '</li>';

	// Clear input
	listItem.value = '';

	// Save the list to localStorage
	localStorage.setItem('listItems', list.innerHTML);

}, false);
// Check for saved wishlist items
let saved = localStorage.getItem('list');

// If there are any saved items, update our list
if (saved) {
	list.innerHTML = saved;
}