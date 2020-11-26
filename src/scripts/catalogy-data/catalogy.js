const list = document.querySelector('.section__catalogy');

const item = document.querySelector('.section__catalogy-item');

const right = document.querySelector('#right-arrow');
const left = document.querySelector('#left-arrow');

const countElements = 10;
for (let i = 0; i < countElements - 1; i++) {
    list.appendChild(item.cloneNode(true));
}

const arrayItems = Array.from(
    list.getElementsByClassName('section__catalogy-item')
);

slider.init(fillBooks, booksCatalogy, countElements, right, left);

function fillBooks(startIndex) {
    let start = startIndex;
    arrayItems.forEach((elem, index) => {
        const img = elem.querySelector('.catalogy-item__img');
        const name = elem.querySelector('.catalogy-item__name');

        img.setAttribute('src', booksCatalogy[start].getPath());
        img.setAttribute('alt', booksCatalogy[start].getName());
        name.innerHTML = booksCatalogy[start].getName();
        start++;
    });
    return start - 1;
}