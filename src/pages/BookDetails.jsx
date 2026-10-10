
import { Link } from 'react-router-dom';
import '../App.css';

export default function BookDetails() {
  return (
    <div className="book-details">
      <h2>Book Details</h2>

      <div className="details-card">
        <p><strong>ID:</strong> —</p>
        <p><strong>Titre:</strong> —</p>
        <p><strong>Auteur:</strong> —</p>
        <p><strong>ISBN:</strong> —</p>
        <p><strong>Category:</strong> —</p>
        <p><strong>Date d'ajout:</strong> —</p>
        <p><strong>Status:</strong> —</p>
        
        <Link to="/books" className="back-btn">  Back to Books </Link>

      </div>

    </div>
  );
}