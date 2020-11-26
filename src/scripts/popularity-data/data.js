const namesCatalogy = [
    [
        'НИ СЫ',
        'Хочешь жить так, как никогда не жил - начни делать то, что никогда не делал. Главная формула саморазвития, которую можно свести к «восточной мудрости» - НИ СЫ. Именно к этому призывает Джен Синсеро, автор культового бестселлера, вышедшего в 28 странах и проданного общим тиражом 1 000 000 экземпляров. ',
        'https://img-gorod.ru/26/286/2628678_detail.jpg',
    ],
    [
        'Бакуман 10',
        'Сайко и Сюдзин ведут в счете в противостоянии новых сериалов Муто Асироги и Эйдзи! Но внезапно при выпуске танкобонов Эйдзи резко вырывается вперед. Смогут ли наши герои закончить свою мангу так, как задумали изначально? Получат ли они аниме-сериал? И что ждет их в конце этого тернистого пути?',
        'https://img-gorod.ru/28/140/2814083_detail.jpg',
    ],
    [
        'Судьба убийцы',
        'Фитц уверен, что его дочь уже не вернуть, и мечтает лишь о мести. Ему еще только предстоит узнать, что она жива. Даже ее похитители не догадываются, какая судьба ей уготована, но Би никогда не сдается. Ее везут в Клеррес, обитель Слуг, и туда же стремятся Фитц и его спутники. ',
        'https://img-gorod.ru/28/140/2814088_detail.jpg',
    ],
    [
        'Думай медленно, решай быстро',
        'Наши действия и поступки определены нашими мыслями. Но всегда ли мы контролируем наше мышление? Нобелевский лауреат Даниэль Канеман объясняет, почему мы подчас совершаем нерациональные поступки и как мы принимаем неверные решения. У нас имеется две системы мышления. ',
        'https://img-gorod.ru/23/927/2392784_detail.jpg',
    ],
    [
        'Подсознание может все',
        'Автор этой книги в уединении среди лесов канадской провинции Британская Колумбия три года сосредоточенно размышлял над вопросами, касающимися деятельности человеческого мозга. Способы активизации его безграничных ресурсов, разработанные и скомбинированные Джоном Кехо в конкретную программу, могут изменить вашу жизнь к лучшему, наполнить ее успехами и счастьем.',
        'https://img-gorod.ru/23/503/2350360_detail.jpg',
    ],
    [
        'Правила счастливой жизни',
        '71-летняя супермодель Мэй Маск — не просто красивая, но и невероятно успешная и счастливая женщина — делится мудрыми уроками, которые она усвоила за долгую жизнь. ',
        'https://img-gorod.ru/27/971/2797102_detail.jpg',
    ],
    [
        'Про вчера',
        'Эта книга прежде всего о людях, о работягах — героях событий, которые случились в моей жизни. Здесь только небольшая часть историй, которыми я хотел бы поделиться. Будет время — продолжим...',
        'https://img-gorod.ru/28/192/2819278_detail.jpg',
    ],
    [
        'Радикальное прощение',
        'Более чем вероятно, что эта книга изменит вашу жизнь. Она поможет вам полностью пересмотреть свои взгляды на собственное прошлое и настоящее. В отличие от других форм прощения, истинное прощение легко достижимо и происходит практически мгновенно.',
        'https://img-gorod.ru/23/441/2344131_detail.jpg',
    ],
    [
        'Непобедимое солнце',
        'Саша - продвинутая московская блондинка. Ей тридцатник, вируса на горизонте еще нет, и она уезжает в путешествие, обещанное ей на индийской горе Аруначале лично Шивой.',
        'https://img-gorod.ru/28/080/2808011_detail.jpg',
    ],
];
const booksCatalogy = [];

namesCatalogy.forEach((elem) => {
    booksCatalogy.push(new PopularBook(elem[0], elem[1], elem[2]));
});