import {
  AppBar,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";

function MenuBar() {
  const [anchorNavi, setOpenNavi] = useState(null);

  const menuOpen = (e) => {
    setOpenNavi(e.currentTarget);
  };

  const menuClose = () => {
    setOpenNavi(null);
  };

  const menu = (
    <Menu
      anchorEl={anchorNavi}
      open={Boolean(anchorNavi)}
      onClose={menuClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <MenuItem onClick={menuClose} component={Link} to="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Etusivu" />
      </MenuItem>
      <MenuItem onClick={menuClose}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Tulokset" />
      </MenuItem>
    </Menu>
  );

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={menuOpen} color="inherit">
            <MenuIcon />
          </IconButton>
          {menu}
          <Typography variant="h5" sx={{ flexGrow: 1, textAlign: "center" }}>
            Tiimi4
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MenuBar;
