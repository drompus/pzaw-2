// Movie

export interface MovieProps {
    title: string;
    year: number;
    posterImage: string;
    rating: number;
}

// Music Album

interface Song {
    title: string;
    duration: number; // in seconds
}

export interface MusicAlbumProps {
    name: string;
    year: number;
    artist: string;
    genre: string;
    songs: Song[];

    coverImage: string;
}

// Book

export interface BookProps {
    title: string;
    year: number;
    pages: number;
    coverImage: string;
}