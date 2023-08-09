export type Book = {
  author: string;
  title: string;
  id: number;
  publicationYear: string;
  createdDate: number;
};

export const books: Book[] = [
  {
    author: 'Bill Gate',
    title: 'Flying without wings',
    id: 1,
    publicationYear: '3, march 2023',
    createdDate: Date.now(),
  },
  {
    author: 'Isaac Alex',
    title: 'who wants to be a millionaire ',
    id: 2,
    publicationYear: '5, April 2016',
    createdDate: Date.now(),
  },
  {
    author: 'George Nwobodo',
    title: 'Learning Core of react',
    id: 3,
    publicationYear: '8, december 2000',
    createdDate: Date.now(),
  },
  {
    author: 'Mark angle',
    title: 'Eloquent Javascript',
    id: 4,
    publicationYear: '3, march 2021',
    createdDate: Date.now(),
  },
  {
    author: 'Mark collins',
    title: 'Mastering node fundamental',
    id: 5,
    publicationYear: '11, march 2021',
    createdDate: Date.now(),
  },
];



export const getBooks = () => books;
export const addBook = (book: Book) => books.push(book);
