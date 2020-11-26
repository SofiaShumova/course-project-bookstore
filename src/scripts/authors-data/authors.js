const right = document.querySelector('#right-arrow');
const left = document.querySelector('#left-arrow');

const list = document.querySelector('.section__authors');

const item = document.querySelector('.section__authors-item');
const countElements = 4;
for (let i = 0; i < countElements - 1; i++) {
    list.appendChild(item.cloneNode(true));
}

const arrayItems = Array.from(
    list.getElementsByClassName('section__authors-item')
);

slider.init(fillAuthors, authors, countElements, right, left);

function fillAuthors(startIndex) {
    let start = startIndex;
    arrayItems.forEach((elem) => {
        const img = elem.querySelector('.authors-item__img');
        const name = elem.querySelector('.authors-item__name');
        const text = elem.querySelector('.authors-item__description');

        img.setAttribute('src', authors[start].getPath());
        img.setAttribute('alt', authors[start].getName());
        name.innerHTML = authors[start].getName();
        text.innerHTML = authors[start].getDescription();
        start++;
    });
    return start - 1;
}