class Movie {
    title: string;
    director: string;
    releaseYear: number;

    constructor(title: string, director: string, releaseYear: number) {
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
    }

    getMovieDetails() {
        return `${this.title}, directed by ${this.director}, released in ${this.releaseYear}`;
    }
}
