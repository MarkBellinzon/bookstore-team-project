// fetch('https://books-backend.p.goit.global/books')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(booksData => {
//     updateModalContent(booksData);
//   })
//   .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });

fetch(`https://books-backend.p.goit.global/books/${bookId}`)
  .then(response => response.json())
  .then(data => {
    const book = data;
    if (book) {
      renderStats(book);
      updateButton(
        bookId,
        book.list_name,
        book.author,
        book.description,
        book.book_image
      );
    } else {
      console.error('The book object is empty.');
    }
  })
  .catch(error => console.error(error));
