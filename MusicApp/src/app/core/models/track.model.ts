import { Artist } from "./artist.model";


export interface trackModel {
    _id: number;
    name: string;
    album: string;
    cover: string;
    artist: Artist;
    duration: Duration;
    url: string;
}


export interface Duration {
    start: number;
    end: number;
}
