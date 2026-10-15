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

export const getBooksBorrowed =()=>{
    return api.get(`/books/borrowedBooks`);
}

export const getAvailableBooks= ()=>{
    return api.get(`/books/availableBooks`);
}

export const getByDateBetween= (start,end)=>{
    console.log(start,end);
    
    return api.get(`/books/${start}/${end}`);
}

export const getByTitre=(titre)=>{
   
    return api.get(`/books/titre`,{
        params:{ti:titre}
    });

}