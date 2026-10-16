import crimeAndPunishmentImage from './assets/book1.jfif';
import revivalImage from './assets/book2.webp';
import miraclesOfPolandImage from './assets/book3.webp';
import pawPatrolImage from './assets/movie1.jpg';
import diggerImage from './assets/movie2.webp';
import gladiatorImage from './assets/movie3.png';
import closeTotheEdgeImage from './assets/music1.jpg';
import theDarkSideOfTheMoonImage from './assets/music2.png';
import discoveryImage from './assets/music3.jpg';
import BookElement from "./components/BookElement/BookElement.tsx";
import MovieElement from "./components/MovieElement/MovieElement.tsx";
import MusicAlbumElement from "./components/MusicAlbumElement/MusicAlbumElement.tsx";
import { type BookProps, type MovieProps, type MusicAlbumProps } from './types.shared.ts';

export default function App() {
  
  const movies: MovieProps[] = [
    { title: "Psi patrol: Film", year: 2021, posterImage: pawPatrolImage, rating: 9 },
    { title: "Digger", year: 2026, posterImage: diggerImage, rating: 2 },
    { title: "Gladiator", year: 2000, posterImage: gladiatorImage, rating: 5 }
  ];
  
    const books: BookProps[] = [
      { title: "Zbrodnia i kara", year: 1866, pages: 544, coverImage: crimeAndPunishmentImage },
      { title: "Przebudzenie", year: 2014, pages: 320, coverImage: revivalImage },
      { title: "Cuda Polski. Parki narodowe", year: 2020, pages: 80, coverImage: miraclesOfPolandImage },
    ];
  
  const albums: MusicAlbumProps[] = [
    {
      name: "Close to the Edge",
      year: 1972,
      artist: "Yes",
      genre: "Rock",
      songs: [
        { title: "Close to the Edge", duration: 1118 },
        { title: "And You and I", duration: 608 },
        { title: "Siberian Khatru", duration: 535 }
      ],
      coverImage: closeTotheEdgeImage
    },
    {
      name: "The Dark Side of the Moon",
      year: 1973,
      artist: "Pink Floyd",
      genre: "Rock",
      songs: [
        { title: "Time", duration: 413 },
        { title: "Money", duration: 382 },
        { title: "Us and Them", duration: 469 }
      ],
      coverImage: theDarkSideOfTheMoonImage
    },
    {
      name: "Discovery",
      year: 2001,
      artist: "Daft Punk",
      genre: "Disco",
      songs: [
        { title: "One More Time", duration: 320 },
        { title: "Digital Love", duration: 301 },
        { title: "Harder, Better, Faster, Stronger", duration: 224 },

      ],
      coverImage: discoveryImage
    }
  ];

  return (
    <>
      <div className="section-wrapper">

        <h2>Filmy</h2>
        <section className='movies-section'>

          {
            movies.sort((a, b) => (a.title.localeCompare(b.title))).map((movie) => {
              return <MovieElement {...movie} />
            })
          }

        </section>

        <h2>Filmy po 2010 roku</h2>
        <section className='movies-section'>

          {
            movies.filter((movie) => {
              return movie.year > 2010
            }).map((movie) => {
              return <MovieElement {...movie} />
            })
          }

        </section>

        <h2>Książki</h2>
        <section className="books-section">
          {
            books.sort((a, b) => a.title.localeCompare(b.title)).map((book) => <BookElement {...book} />)
          }
        </section>

        <h2>Książki posortowane według roku wydania</h2>
        <section className="books-section">
          {
            books.sort((book1, book2) => {
              return book1.year - book2.year
            }).map((book) => <BookElement {...book} />)
          }
        </section>

        <h2>Albumy muzyczne</h2>
        <section className="music-albums-section">
          {
            albums.sort((a, b) => a.name.localeCompare(b.name)).map(album => {
              return <MusicAlbumElement {...album} />
            })
          }
        </section>

        <h2>Album muzyczny z największą ilością utworów</h2>
        <section className="music-albums-section">
            <MusicAlbumElement {...(albums.sort((a, b) => b.songs.length - a.songs.length).slice(0, 1)[0])} />
        </section>
      </div>
    </>
  );
}