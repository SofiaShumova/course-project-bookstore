const namesCatalogy = [
    ['Богатый папа', 'https://img-gorod.ru/26/550/2655051_detail.jpg'],
    ['Код ожирения', 'https://img-gorod.ru/28/034/2803452_detail.jpg'],
    ['200 стихов', 'https://img-gorod.ru/27/862/2786216_detail.jpg'],
    ['Атлант расправил плечи', 'https://img-gorod.ru/22/754/2275421_detail.jpg'],
    ['Важные годы', 'https://img-gorod.ru/24/252/2425241_detail.jpg'],
    ['Искусство любить', 'https://img-gorod.ru/26/036/2603603_detail.jpg'],
    ['НИ СЫ', 'https://img-gorod.ru/26/286/2628678_detail.jpg'],
    ['Хочу и буду', 'https://img-gorod.ru/25/833/2583367_detail.jpg'],
    ['На пределе', 'https://img-gorod.ru/25/007/2500738_detail.jpg'],
    ['Сияние', 'https://img-gorod.ru/27/744/2774425_detail.jpg'],
    ['Тревожные люди', 'https://img-gorod.ru/28/208/2820826_detail.jpg'],
    ['Чумазое средневековье', 'https://img-gorod.ru/28/190/2819008_detail.jpg'],
    ['Ваш мозг невероятен', 'https://img-gorod.ru/28/215/2821568_detail.jpg'],
    [
        'Доктор Данилов в инфекционной больнице',
        'https://img-gorod.ru/28/220/2822011_detail.jpg',
    ],
    ['Не дай мне упасть', 'https://img-gorod.ru/28/195/2819594_detail.jpg'],
    ['И дети их после них', 'https://img-gorod.ru/28/205/2820579_detail.jpg'],
    ['Девятый дом', 'https://img-gorod.ru/28/137/2813727_detail.jpg'],
    ['Король воронов', 'https://img-gorod.ru/28/167/2816733_detail.jpg'],
    [
        'Расследование ведут чемпионы',
        'https://img-gorod.ru/28/198/2819805_detail.jpg',
    ],
    [
        'Одинокий пишущий человек',
        'https://img-gorod.ru/28/137/2813700_detail.jpg',
    ],
    ['Ход королевы', 'https://img-gorod.ru/28/208/2820843_detail.jpg'],
    ['Пятая колонна', 'https://img-gorod.ru/28/228/2822881_detail.jpg'],
    ['Мэнсфилд-Парк', 'https://img-gorod.ru/27/036/2703600_detail.jpg'],
    ['Алая чума', 'https://img-gorod.ru/28/228/2822879_detail.jpg'],
    ['Росхальде', 'https://img-gorod.ru/28/228/2822878_detail.jpg'],
    ['Смелость быть обычной', 'https://img-gorod.ru/28/215/2821512_detail.jpg'],
    [
        'Проклятие неудачного четверга',
        'https://img-gorod.ru/28/210/2821032_detail.jpg',
    ],
    ['Правдивая история', 'https://img-gorod.ru/28/192/2819235_detail.jpg'],
    ['Сказки эльбы', 'https://img-gorod.ru/28/133/2813314_detail.jpg'],
    ['Укротить ловеласа', 'https://img-gorod.ru/28/184/2818464_detail.jpg'],
    ['Я такой как все', 'https://img-gorod.ru/24/589/2458992_detail.jpg'],
    ['Ежевичное вино', 'https://img-gorod.ru/28/226/2822659_detail.jpg'],
    ['Стеклянный трон', 'https://img-gorod.ru/28/231/2823173_detail.jpg'],
    ['Один день в декабре', 'https://img-gorod.ru/28/231/2823172_detail.jpg'],
    [
        'Обитель апельсинового дерева',
        ' https://img-gorod.ru/28/231/2823171_detail.jpg',
    ],
    ['Мои 99 процентов', 'https://img-gorod.ru/27/857/2785710_detail.jpg'],
    ['Тайны летней ночи', 'https://img-gorod.ru/28/231/2823165_detail.jpg'],
    ['Бестолочь', 'https://img-gorod.ru/28/231/2823160_detail.jpg'],
    ['Любовница', 'https://img-gorod.ru/28/231/2823154_detail.jpg'],
    ['Триумф теней', 'https://img-gorod.ru/28/231/2823149_detail.jpg'],
];

const booksCatalogy = [];

namesCatalogy.forEach((elem) => {
    booksCatalogy.push(new Book(elem[0], elem[1]));
});