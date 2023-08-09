import { Book } from './bookList';
import styles from './books.module.css';

const getNote = async () => {
  try {
    const res = await fetch('http://localhost:3000/books/api', {
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.status == 200) {
      return await res.json();
    }
    console.log('Error retrieving product list');
  } catch (err: any) {
    throw Error(err);
  }
};

const pages = async () => {
  const books = await getNote();
  return (
    <table className={styles.books}>
      <thead>
        <tr>
          <th className={styles.th}>Author</th>
          <th className={styles.th}> Title</th>
          <th className={styles.th}>Year</th>
        </tr>
      </thead>
      <tbody>
        {books.data &&
          books.data.map((el: Book) => (
            <tr key={el.id}>
              <td className={styles.td}>{el.author}</td>
              <td className={styles.td}>{el.title}</td>
              <td className={styles.td}>{el.publicationYear}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default pages;
