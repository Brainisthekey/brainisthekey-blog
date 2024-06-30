"use client";
import { books } from "@/constants/books";
import { Paragraph } from "@/components/typography";

export const BooksList = () => {
  return (
    <>
      <ul className="list-disc ml-4">
        {books.map((book, index) => (
          <li key={index}>
            <Paragraph>
              <span className="font-semibold">{book.title}</span>
              {book.author !== "Unknown" ? `, ${book.author}` : ""}
              {book.year !== "Unknown" ? `, ${book.year}` : ""}
            </Paragraph>
          </li>
        ))}
      </ul>
    </>
  );
};
