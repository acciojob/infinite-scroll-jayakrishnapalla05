var list = document.getElementById('infi-list');

// Add some initial list items
for (var i = 1; i <= 10; i++) {
  var listItem = document.createElement('li');
  listItem.textContent = 'List Item ' + i;
  list.appendChild(listItem);
}

// Function to add more list items
function addMoreItems() {
  // Add 2 more list items
  for (var i = 1; i <= 2; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = 'List Item ' + (list.childElementCount + i);
    list.appendChild(listItem);
  }
}

// Event listener for scroll event
list.addEventListener('scroll', function() {
  // Check if the user has scrolled to the bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Add more list items
    addMoreItems();
  }
});

