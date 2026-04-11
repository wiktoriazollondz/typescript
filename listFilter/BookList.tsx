import React from "react";

interface Book {
  tytul: string;
  autor: string;
  rok: number;
}

interface BookList {
  books: Book[];
}

// React.ReactElement!!!
export default function BookList({ books }: BookList): React.ReactElement {
  return (
    <div className="BookList">
      <ul>
        {books.map((book) =>
          book.rok > 2000 ? (
            <li key={book.tytul}>
              {book.tytul} - {book.rok}
            </li>
          ) : null,
        )}
      </ul>
    </div>
  );
}

const books: Array<Book> = [
  { tytul: "cos", autor: "mickiewicz", rok: 1999 },
  { tytul: "ktos", autor: "sienkiewicz", rok: 2005 },
  { tytul: "bla", autor: "hamlet", rok: 2002 },
];
