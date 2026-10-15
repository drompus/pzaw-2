import './BookElement.css';

interface BookProps {
    title: string;
    year: number;
    pages: number;
    coverImage: string;
}

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