import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import { MenuBook, CheckCircle, Bookmark, Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllBooks } from '../service/Book';

export default function Dashboard() {
  const [books, setBooks] = useState([]);

  const TotalBooks = books.length;

  const availableBooks = books.filter((book) => book.status === 'AVAILABLE').length

  const borrowedBokos = books.filter((book) => book.status === 'BORROWED').length
  useEffect(() => {
    getAllBooks().then((res) => {
      setBooks(res.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

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
          { title: 'Borrowed', value: borrowedBokos, icon: <Bookmark />, color: '#ed8b00' }
        ].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
            <Card
              elevation={0}
              sx={{ border: '1px solid #e5e7eb', borderRadius: 3 }}
            >
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ color: item.color, display: 'flex' }}>
                  {item.icon}
                </Box>
                <Typography fontWeight="medium">
                  <Typography fontWeight="medium">
                    {item.title}
                  </Typography>

                  <Typography variant="h5" fontWeight="bold">
                    {item.value}
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card
        elevation={0}
        sx={{ mt: 4, border: '1px solid #e5e7eb', borderRadius: 3 }}
      >
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight="bold">
            Recently Added Books
          </Typography>

{books.slice(-3).reverse().map((book)=>(
  
))}


          <Box sx={{ py: 6, textAlign: 'center', color: 'text.secondary' }}>
            <MenuBook sx={{ fontSize: 45, mb: 1 }} />
            <Typography>No books to display</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

