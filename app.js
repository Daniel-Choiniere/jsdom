
<<<<<<< HEAD

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

=======
>>>>>>> version11.0
const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', function(e) {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
<<<<<<< HEAD

=======
});

const forms = document.forms;
console.log(forms);
console.log(forms['add-book']);

Array.from(forms).forEach(function(form){
  console.log(form);
});

// add book list
const addForm = forms['add-book'];

addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);
>>>>>>> version11.0
});