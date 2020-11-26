const list = document.querySelector('.popularity-block__list');

const item = document.querySelector('.popularity-block__item');

const right = document.querySelector('#right-arrow');
const left = document.querySelector('#left-arrow');
const countElement = 3;

for (let i = 0; i < countElement - 1; i++) {
    list.appendChild(item.cloneNode(true));
}

const arrayItems = Array.from(
    list.getElementsByClassName('popularity-block__item')
);

slider.init(fillBooks, booksCatalogy, countElement, right, left);

function fillBooks(startIndex) {
    let start = startIndex;
    arrayItems.forEach((elem, index) => {
        const img = elem.querySelector('.popularity-block__item-img');
        const name = elem.querySelector('.popularity-block__item-name');
        const desc = elem.querySelector('.popularity-block__item-description');

        img.setAttribute('src', booksCatalogy[start].getPath());
        img.setAttribute('alt', booksCatalogy[start].getName());
        name.innerHTML = booksCatalogy[start].getName();
        desc.innerHTML = booksCatalogy[start].getDescription();
        start++;
    });
    return start - 1;
}