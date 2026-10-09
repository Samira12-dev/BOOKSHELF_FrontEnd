
import { Link } from 'react-router-dom';
import '../App.css';

export default function Books() {
  return (
    <div className="books-page">
      <h2>Books</h2>

      <div className="books-toolbar">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />

        <Link to="/addBook" className="add-book-btn">
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
            <tr>
              <td colSpan="8" className="empty-message">
                No books available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}