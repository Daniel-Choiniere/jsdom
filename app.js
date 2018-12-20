
const btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
  btn.addEventListener('click', function(e)  {

    const li = e.target.parentElement;
    console.log('child element to remove:', li);
    console.log('parent element to remove child from:', li.parentElement);
    li.parentNode.removeChild(li);

  });
});

// prevent default behaviour

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Navigation to', e.target.textContent, 'was prevented');

const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);

// will return only one element (the first one in the document)
var books = document.querySelector('#book-list li .name');
console.log(books);

// will return every element under book-list id, with the class name
books = document.querySelectorAll('#book-list li .name');
console.log(books);

Array.from(books).forEach(function(book){

const list = document.querySelector('#book-list ul');
const forms = document.forms;

// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);


// add books
const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);

  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add text content
  bookName.textContent = value;
  deleteBtn.textContent = 'delete';

  // add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);



// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }

});

// filter books when user types into sesrch bar
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e) {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(function(book) {
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) > 0){
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });

