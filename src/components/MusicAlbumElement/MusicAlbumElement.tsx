import './MusicAlbumElement.scss';
import { type MusicAlbumProps } from '../../types.shared';

export default function MusicAlbumElement({ name, year, artist, genre, songs, coverImage }: MusicAlbumProps) {
    return (
        <div className="media-item music-album">
            <img src={coverImage} alt={name} />
            <h3>{name} | {year}</h3>
            <span className="music-album__artist">Artysta: {artist}</span>
            <span className="music-album__genre">Gatunek: {genre}</span>
            <span className='music-album__songs-label'>Lista utworów:</span>
            <ol>

                {
                    songs.map(song => (
                        <li key={song.title}>{song.title} - <b>{Math.round((song.duration / 60 + Number.EPSILON) * 10) / 10} min</b></li>
                    ))
                }
            </ol>
        </div>
    );
}