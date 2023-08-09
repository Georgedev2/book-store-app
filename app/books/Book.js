import React from 'react';
import { Book as MyBook } from './bookListData';

const Book = (props) => {

  return (
    <tr key={el.id}>
      <td className={styles.td}>{el.author}</td>
      <td className={styles.td}>{el.title}</td>
      <td className={styles.td}>{el.publicationYear}</td>
    </tr>
  );
};

export default Book;
