export type MovieDetail = {
    id: string;
    title: string;
    poster: string;
    genre: string;
    director: string;
    movie_description: string;
    director_description: string;
    director_image: string;
};

export const MovieDetailData = {
    id: "",
    title: "",
    poster: "",
    genre: "",
    director: "",
    movie_description: "",
    director_description: "",
    director_image: ""
};

export type Movie = MovieDetail[];
export type Selected = {
    title: string;
    id: string;
};

type Color = "success" | "info" | "warning" | "error";

export interface Message {
    message: string;
    severity: Color;
    open: boolean;
    id: string;
}
