/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Avatar, Box, IconButton, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
const NavbarContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& > div': {
    margin: '0 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px', // Ensure same width for all items
    height: '50px' // Ensure same height for all items
  }
});

const CustomIconButton = styled(IconButton)({
  padding: 10,
  '& .MuiSvgIcon-root': {
    fontSize: 24 ,
    // Adjust the icon size,
  }
});

const NavbarLink = ({user}) => {
    const cartTotal=useSelector((state)=>state.cart).totalQuantity;

  return (
    <NavbarContainer>
      <div>
        {user.isLoggedIn ? (
          <Link to={'/profile'}>
            <Avatar alt={user.user.name} src={user.user.profilePic} />
          </Link>
        ) : (
          <Link to={'/login'}>Login</Link>
        )}
      </div>
      <div>
        <FavoriteBorderIcon />
      </div>
      <div>
        <Link to={'/cart'}>
        <CustomIconButton aria-label="cart">
          <Badge badgeContent={cartTotal} color="secondary">
            <ShoppingCartIcon sx={{color:'black'}} />
          </Badge>
        </CustomIconButton>
        </Link>
      </div>
    </NavbarContainer>
  );
};

export default NavbarLink;
