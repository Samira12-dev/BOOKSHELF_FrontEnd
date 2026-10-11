
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../App.css';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addBook, updateBook, getBookById } from '../service/Book';
import { useState ,useEffect} from 'react';

export default function BookForm() {

  const [book, setBook] = useState({});
  const { id } = useParams();
  const isEdit = Boolean(id);

  const bookSchema = yup.object({
    titre: yup.string().required("Title is obligatoire"),
    auteur: yup.string().required("Author is obligatoire"),
    isbn: yup.string().required("Isbn is obligatoire"),
    category: yup.string().required("Category is obligatoire"),
    status: yup.string().required("Status is obligatoire")
  });


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(bookSchema)
  });


  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (isEdit) {
      updateBook(id, data).then(() => {
        navigate("/books")
      })
    } else {
      addBook(data).then(() => {
        navigate("/books");
      })
    }

  }

  useEffect(()=>{
    if(isEdit){
      getBookById(id).then((res)=>{
        reset(res.data);
      }).catch((error)=>{
        console.log(error);
      })
    }
  },[id,isEdit,reset])


  return (
    <div className="add-book">
      <h2>{isEdit ? 'Update Book': 'Add Book'}</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Titre</label>
        <input {...register('titre')} />
        <p>{errors.titre?.message}</p>

        <label>Auteur</label>
        <input {...register('auteur')} />
        <p>{errors.auteur?.message}</p>

        <label>ISBN</label>
        <input  {...register('isbn')} />
        <p>{errors.isbn?.message}</p>

        <label>Category</label>
        <input type="text" name="category" {...register('category')} />
        <p>{errors.category?.message}</p>

        <label>Status</label>
        <select name="status" {...register('status')}>
          <option value="AVAILABLE">Available</option>
          <option value="BORROWED">Borrowed</option>
        </select>
        <p>{errors.status?.message}</p>

        <div className="form-buttons">
          <button type="submit" >{isEdit? 'Update':'Save'}</button>

          <Link to="/books" className="cancel-btn">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}