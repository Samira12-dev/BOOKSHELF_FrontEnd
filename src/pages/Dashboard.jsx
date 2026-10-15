import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import { MenuBook, CheckCircle, Bookmark, Add, Start } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllBooks, getAvailableBooks, getBooksBorrowed, getByDateBetween } from '../service/Book';

export default function Dashboard() {
  const [books, setBooks] = useState([]);

  const TotalBooks = books.length;

  const lastThreeBooks = [...books].reverse().slice(0, 3);

  const [availableBooks, setavailableBooks] = useState(0);
  const [borrowedBook, setBorrowedBook] = useState(0);

 

  useEffect(() => {
    getAllBooks().then((res) => {
      setBooks(res.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [])



  useEffect(() => {
    getBooksBorrowed().then((res) => {
      setBorrowedBook(res.data.length);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  useEffect(() => {
    getAvailableBooks().then((res) => {
      setavailableBooks(res.data.length);
    }).catch((error) => {
      console.log(error);
    })
  })


 

  
  return (
    <Box sx={{ p: 4, bgcolor: '#f8f9fc', minHeight: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Dashboard
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            Welcome to BookShelf
          </Typography>
        </Box>

        <Link
          to="/books/add"
          style={{
            textDecoration: 'none',
            backgroundColor: '#1866c0',
            color: 'white',
            padding: '10px 16px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Add /> Add Book
        </Link>
      </Box>

      <Grid container spacing={3}>
        {[
          { title: 'Total Books', value: TotalBooks, icon: <MenuBook />, color: '#5b4fd6' },
          { title: 'Available', value: availableBooks, icon: <CheckCircle />, color: '#2e7d32' },
          { title: 'Borrowed', value: borrowedBook, icon: <Bookmark />, color: '#ed8b00' }
        ].map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>            <Card
            elevation={0}
            sx={{ border: '1px solid #e5e7eb', borderRadius: 3 }}
          >
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ color: item.color, display: 'flex' }}>
                {item.icon}
              </Box>
              <Typography fontWeight="medium">
                {item.title}
              </Typography>

              <Typography variant="h5" fontWeight="bold">
                {item.value}
              </Typography>

            </CardContent>
          </Card>
          </Grid>
        ))}
      </Grid>


      <Card
        elevation={0}
        sx={{
          mt: 3,
          maxWidth: 800,
          mx: 'auto',
          border: '1px solid #e5e7eb',
          borderRadius: 2,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <CardContent sx={{ p: 2 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
            Recently Added Books
          </Typography>

          {lastThreeBooks.length === 0 ? (
            <Typography color="text.secondary">
              No books to display
            </Typography>
          ) : (
            <Grid container spacing={2}>
              {lastThreeBooks.map((book) => (
                <Grid item xs={12} sm={4} key={book.id}>
                  <Box
                    sx={{
                      p: 2,
                      border: '1px solid #eee',
                      borderRadius: 2
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <MenuBook color="primary" />
                      <Typography fontWeight="bold" noWrap>
                        {book.titre}
                      </Typography>
                    </Box>

                    <Typography color="text.secondary" variant="body2" sx={{ mt: 1 }}>
                      {book.auteur || 'Auteur inconnu'}
                    </Typography>

                    <Typography
                      variant="caption"
                      color={book.status === 'AVAILABLE' ? 'success.main' : 'warning.main'}
                    >
                      {book.status === 'AVAILABLE' ? 'Available' : 'Borrowed'}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </CardContent>
      </Card>




    </Box>
  );
}

