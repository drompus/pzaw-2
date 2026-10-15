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

export default function App() {

  return (
    <>
      <div className="section-wrapper">

        <h2>Filmy</h2>
        <section className='movies-section'>

          <MovieElement title="Psi patrol: Film" year={2021} posterImage={pawPatrolImage}></MovieElement>
          <MovieElement title="Digger" year={2026} posterImage={diggerImage}></MovieElement>
          <MovieElement title="Gladiator" year={2000} posterImage={gladiatorImage}></MovieElement>
        </section>

        <h2>Książki</h2>
        <section className="books-section">
          <BookElement title="Zbrodnia i kara" year={1866} pages={544} coverImage={crimeAndPunishmentImage}></BookElement>
          <BookElement title="Przebudzenie" year={2014} pages={320} coverImage={revivalImage}></BookElement>
          <BookElement title="Cuda Polski. Parki narodowe" year={2020} pages={80} coverImage={miraclesOfPolandImage}></BookElement>
        </section>

        <h2>Albumy muzyczne</h2>
        <section className="music-albums-section">

          <MusicAlbumElement name="Close to the Edge" year={1972} artist="Yes" genre="Rock"
            songs={[
              { title: "Close to the Edge", duration: 1118 },
              { title: "And You and I", duration: 608 },
              { title: "Siberian Khatru", duration: 535 }
            ]} coverImage={closeTotheEdgeImage}
          />

          <MusicAlbumElement name="The Dark Side of the Moon" year={1973} artist="Pink Floyd" genre="Rock"
            songs={[
              { title: "Time", duration: 413 },
              { title: "Money", duration: 382 },
              { title: "Us and Them", duration: 469 }
            ]} coverImage={theDarkSideOfTheMoonImage}
          />

          <MusicAlbumElement name="Discovery" year={2001} artist="Daft Punk" genre="Disco"
            songs={[
              { title: "One More Time", duration: 320 },
              { title: "Digital Love", duration: 301 },
              { title: "Harder, Better, Faster, Stronger", duration: 224 }
            ]} coverImage={discoveryImage}
          />
        </section>
      </div>
    </>
  );
}