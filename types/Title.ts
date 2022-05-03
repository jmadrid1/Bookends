import { Similars } from "./Similars";

export interface Title {
    id: string;
    title: string;
    plot: string;
    releaseDate: string;
    runtimeStr: string;
    imDbRating: string;
    imDbRatingVotes: string;
    image: string;
    genres: string;
    directors: string;
    writers: string;
    stars: string;
    similars: Similars[];
}