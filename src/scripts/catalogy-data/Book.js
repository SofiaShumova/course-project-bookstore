class Book {
    constructor(name, path) {
        this.name = name;

        this.path = path;
        this.description = 'Описание отсутствует';
    }
    getName() {
        return this.name;
    }
    getPath() {
        return this.path;
    }
}
class PopularBook extends Book {
    constructor(name, description, path) {
        super(name, path);
        this.description = description;
    }
    getDescription() {
        return this.description;
    }
}