const myLibrary = [{
        title: 'Shades of Blue',
        author: 'Lee Winters',
        year: '2015'
    }, {
        title: 'Lord of the Rings',
        author: 'Tolkein',
        year: '2000'
    }
];

Book();

function Book() {
    let bookListHTML = '';

    for (let i = 0; i < myLibrary.length; i++){
        const bookObject = myLibrary[i];
        const title = bookObject.title;
        const author = bookObject.author;
        const year = bookObject.year;

        const html = `
            <p>
                ${title} ${author} ${year}
                <button onclick="myLibrary.splice(${i}, 1); Book();">Delete</button>
            </p>
        `;

        bookListHTML += html;
    }

    document.querySelector('.js-book-list').innerHTML = bookListHTML;
}

function addBookToLibrary() {
    const titleInputElement = document.querySelector('.js-title-input');
    const title = titleInputElement.value;

    const authorInputElement = document.querySelector('.js-author-input');
    const author = authorInputElement.value;

    const yearInputElement = document.querySelector('.js-year-input');
    const year = yearInputElement.value;

    myLibrary.push({
        title,
        author,
        year
    });

    titleInputElement.value = '';
    authorInputElement.value = '';
    yearInputElement.value = '';

    Book();
}