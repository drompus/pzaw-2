import './BookElement.css';
import { type BookProps } from '../../types.shared';

export default function BookElement({ title, year, pages, coverImage }: BookProps) {

    return (
        <div className="media-item book">
            <img src={coverImage} alt={title} />
            <h3>{title}</h3>
            <span className="book__year">{year}</span>
            <span className="book__pages">{pages} stron</span>
        </div>
    );

}