class Genre {
    constructor(name, description, arrayBooks = []) {
        this.name = name;
        this.description = description;
        this.arrayBooks = arrayBooks;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getBooks() {
        return this.arrayBooks;
    }
}