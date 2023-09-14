const myLibrary = [{
    name: 'Game of Thrones',
    author: 'RR Martin',
    pages: 350,
    isbn: 1,
    readed: false,
},];
const container = document.querySelector('.list-container');
const form = document.querySelector('form');

function Book(title, author, pages, isbn, readed) {
    this.name = title
    this.author = author
    this.pages = pages
    this.isbn = isbn
    this.readed = false;
}

function toggleBtn(book){
    if (book.readed == false) {
        book.readed = true;
    }else {
        book.readed = false;
    }
}

function deleteFromList(book) {
    let index = myLibrary.indexOf(book.isbn);
    myLibrary.splice(index, 1);
    const id = document.getElementById(book.isbn);
    container.removeChild(id);
}

function cardBook(book) {
    const bookContainer = document.createElement('div');
        bookContainer.classList.add('bookContainer');
        bookContainer.id = book.isbn;
        container.appendChild(bookContainer);
        
        const h3 = document.createElement('h3');
        h3.classList.add('title');
        bookContainer.appendChild(h3);
        h3.textContent = book.name;
    
        const author = document.createElement('p');
        bookContainer.appendChild(author);
        author.textContent = 'Author: ' + book.author;
    
        const pages = document.createElement('p');
        bookContainer.appendChild(pages);
        pages.textContent = 'Pages: ' + book.pages;

        const isbn = document.createElement('p');
        bookContainer.appendChild(isbn);
        isbn.textContent = 'ISBN: ' + book.isbn;

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.name = "name";
        checkBox.value = "false";
        checkBox.id = 'checkbox';
        const label = document.createElement('label');
        label.htmlFor = 'checkbox';
        label.textContent = 'Readed';

        const checkBoxDiv = document.createElement('div');
        bookContainer.appendChild(checkBoxDiv);

        checkBoxDiv.appendChild(label);
        checkBoxDiv.appendChild(checkBox);

        checkBox.addEventListener('click', () => {
            toggleBtn(book);
        })

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn');
        deleteBtn.classList.add('btn-danger');
        deleteBtn.textContent = 'Delete';
        bookContainer.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', () =>{
            deleteFromList(book);
        })

}

function addBookToLibrary(){
    const titleValue = document.getElementById('book').value;
    const authorValue = document.getElementById('author').value;
    const pagesValue = document.getElementById('pages').value;
    const isbnValue = document.getElementById('isbn').value;

    if (titleValue == ''|| authorValue == '' || pagesValue == '' || isbnValue == '') {
        alert('Fill up all fields or enter numbers on the respectives fields')
    }else{
        
        const book = new Book(titleValue,authorValue,pagesValue, isbnValue);
        myLibrary.push(book);
        cardBook(book);
        form.reset();
    }
}

const displayBooks = () => {
    myLibrary.map((book) => {
    cardBook(book);
})
}

const button = document.getElementById('button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary();
});

displayBooks();

