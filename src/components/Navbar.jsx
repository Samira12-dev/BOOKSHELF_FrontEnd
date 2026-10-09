
import { AppBar, Toolbar, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          BookShelf
        </Typography>

        <MuiLink component={Link} to="/" color="inherit" underline="none" sx={{ mx: 1 }}>
          Dashboard
        </MuiLink>

        <MuiLink component={Link} to="/books" color="inherit" underline="none" sx={{ mx: 1 }}>
          Books
        </MuiLink>

        <MuiLink component={Link} to="/books/add" color="inherit" underline="none" sx={{ mx: 1 }}>
          Add Book
        </MuiLink>
      </Toolbar>
    </AppBar>
  );
}
