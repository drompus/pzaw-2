import './MovieElement.css';
import { type MovieProps } from '../../types.shared';

export default function MovieElement({ title, year, posterImage }: MovieProps) {
    return (
        <div className="media-item movie">
            <img src={posterImage} alt={title} />
            <h3>{title}</h3>
            <span>{year}</span>
        </div>
    );
}