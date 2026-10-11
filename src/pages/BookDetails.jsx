
import { Link, useParams } from 'react-router-dom';
import '../App.css';
import { useEffect, useState } from 'react';
import { getAllBooks, getBookById } from '../service/Book';

export default function BookDetails() {

  const {id}= useParams();
  const [books,setBooks]=useState({});

  useEffect(()=>{
    getBookById(id).then((res)=>{
      setBooks(res.data);
    }).catch((error)=>{
      console.log(error);
    })
  })


  return (
    <div className="book-details">
      <h2>Book Details</h2>

      <div className="details-card">
        <p><strong>ID:</strong> {books.id}</p>
        <p><strong>Titre:</strong>{books.titre} </p>
        <p><strong>Auteur:</strong> {books.auteur}</p>
        <p><strong>ISBN:</strong> {books.isbn}</p>
  
        <p><strong>Category:</strong> {books.category}</p>
        <p><strong>Date d'ajout:</strong> {books.dateAjout}</p>
        <p><strong>Status:</strong> {books.status}</p>

        <Link to="/books" className="back-btn">  Back to Books </Link>

      </div>

    </div>
  );
}