import api from "./Api"

export const getAllBooks =()=>{
  return api.get("/books");
}

export const getBookById=(id)=>{
    return api.get(`/books/${id}`);
}

export const addBook =(book)=>{
    return api.post("/books",book);
}

export const updateBook=(id,book)=>{
    return api.put(`/books/${id}`,book);
}

export const deleteBook=(id)=>{
    return api.delete(`/books/${id}`);
}