import './MovieElement.css';

interface MovieProps {
    title: string;
    year: number;
    posterImage: string;
}

export default function MovieElement({ title, year, posterImage }: MovieProps) {
    return (
        <div className="media-item movie">
            <img src={posterImage} alt={title} />
            <h3>{title}</h3>
            <span>{year}</span>
        </div>
    );
}