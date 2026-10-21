
import { Link } from 'react-router-dom';
import '../App.css';
import { useEffect, useState } from 'react';
import { deleteBook, getAllBooks } from '../service/Book';

export default function Books() {

  const [books,setBooks]= useState([]);



  useEffect(()=>{
    getAllBooks().then((res)=>{
      setBooks(res.data.content);
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])


  const handleDelete =(id)=>{
    deleteBook(id).then(()=>{
      setBooks(books.filter((book)=>book.id !==id));
    }).catch((error)=>{
      console.log(error);
    })
  }

 
  

  return (
    <div className="books-page">
      <h2>Books</h2>

      <div className="books-toolbar">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />

        <Link to="/books/add" className="add-book-btn">
          Add Book
        </Link>
      </div>

      <div className="books-table-container">
        <table className="books-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Titre</th>
              <th>Auteur</th>
              <th>ISBN</th>
              <th>Category</th>
              <th>Date d'ajout</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {books.length === 0 ?( 
            <tr>
              <td colSpan="8" className="empty-message">No books available </td>
            </tr>
            ):( 
              books.map((book)=>(
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.titre}</td>
                  <td>{book.auteur}</td>
                  <td>{book.isbn}</td>
                  <td>{book.category}</td>
                  <td>{book.dateAjout}</td>
                  <td>{book.status}</td>
                  <td>
                    <Link to={`/books/${book.id}`} className="action-link view-link" >View</Link>
                    <Link to={`/books/edit/${book.id}`}  className="action-link edit-link" >Modify</Link>
                    <button onClick={()=>handleDelete(book.id)}  className="action-link delete-link" >Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}