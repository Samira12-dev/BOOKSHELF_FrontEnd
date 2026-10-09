
import { Link } from 'react-router-dom';
import '../App.css';

export default function BookForm() {
  return (
    <div className="add-book">
      <h2>Add Book</h2>

      <form>
        <label>Titre</label>
        <input type="text" name="titre" required />

        <label>Auteur</label>
        <input type="text" name="auteur" />

        <label>ISBN</label>
        <input type="text" name="isbn" />

        <label>Category</label>
        <input type="text" name="category" />

        <label>Status</label>
        <select name="status" defaultValue="AVAILABLE">
          <option value="AVAILABLE">Available</option>
          <option value="BORROWED">Borrowed</option>
        </select>

        <div className="form-buttons">
          <button type="submit">Save</button>

          <Link to="/books" className="cancel-btn">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}