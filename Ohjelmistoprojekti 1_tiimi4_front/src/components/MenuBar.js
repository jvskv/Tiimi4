import { AppBar, Box, IconButton, Link, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Typography } from "@mui/material";



function MenuBar() {
    const [anchorNavi, setOpenNavi] = useState(null);

    const menuOpen = (e) => {
        setOpenNavi(null);
    };

    const menuClose =() => {
        setOpenNavi(null);
    }

    const menu =(
        <Menu anchorEl={anchorNavi}
        open={Boolean(anchorNavi)}
        onClose={menuClose}
        anchorOrigin={{ vertical: "top", horizontal: "right"}}>
            <MenuItem onClick={menuClose} component={Link} to="/etusivu">
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Etusivu" />
            </MenuItem>
        </Menu>
    );

    return(
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
    )
}

export default MenuBar;