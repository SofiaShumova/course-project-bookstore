const list = document.querySelector('.genres-list');
const item = document.querySelector('.genres-item');

for (let i = 0; i < genres.length - 1; i++) {
    list.appendChild(item.cloneNode(true));
}

const arrayItems = Array.from(list.getElementsByClassName('genres-item'));
arrayItems.forEach((elem, index) => {
    fillItem(elem, genres[index]);
});

function fillItem(item, genre) {
    const title = item.querySelector('.genres-item__title');
    const desc = item.querySelector('.genres-item__description');
    const listBooks = item.querySelector('.genres-item__books-list');

    title.innerHTML = genre.getName();
    desc.innerHTML = genre.getDescription();
    fillListBooks(listBooks, genre.getBooks());
}

function fillListBooks(list, array) {
    const className = 'genres-item__books-item';
    const item = list.querySelector('.' + className);

    for (let i = 0; i < array.length - 1; i++) {
        list.appendChild(item.cloneNode(true));
    }

    const arrayItems = Array.from(list.getElementsByClassName(className));
    arrayItems.forEach((item, index) => {
        fillBookItem(item, array[index]);
    });
}

function fillBookItem(item, book) {
    const img = item.querySelector('.genres-item__books-item-image');
    img.setAttribute('src', book.getPath());
    img.setAttribute('alt', book.getName());
    img.setAttribute('title', book.getName());
}