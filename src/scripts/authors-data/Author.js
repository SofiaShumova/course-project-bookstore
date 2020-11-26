class Author {
    constructor(name, description = '', path = name) {
        this.name = name;
        this.path = '../img/authors/' + path + '.jpg';
        this.description =
            description.length > 70 ? description.slice(0, 70) : description;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getPath() {
        return this.path;
    }
}