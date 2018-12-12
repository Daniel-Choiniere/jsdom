const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);

// will return only one element (the first one in the document)
var books = document.querySelector('#book-list li .name');
console.log(books);

// will return every element with the 
books = document.querySelectorAll('#book-list li .name');
console.log(books);

Array.from(books).forEach(function(book){
  console.log(book);
});