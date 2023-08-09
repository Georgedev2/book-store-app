import startDB from '@/app/dbConfig/db';
import User from '@/app/models/BookModel';
import { NextResponse } from 'next/server';
import { addBook, Book, books, getBooks } from '../bookList';

export async function GET() {
  const books = getBooks();
  
  //await startDB();
  //const allBooks = await User.find();

  try {
    return NextResponse.json(
      { message: 'ok', data: books },
      { status: 200, statusText: 'ok' }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error', error },
      { status: 500, statusText: 'Internal Server Error' }
    );
  }
}

export async function POST(request: Request, res: Response) {
  const { title, author, publicationYear } = await request.json();

  const book: Book = {
    title,
    author,
    publicationYear,
    createdDate: Date.now(),
    id: books.length + 1,
  };

  try {
    const addedBook = addBook(book);
    return NextResponse.json(addedBook, { status: 201, statusText: 'created' });
  } catch (error) {
    console.error(error);
  }
}
