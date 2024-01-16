import React,{useState, Component} from 'react';
import { Autocomplete } from '@react-google-maps/api'
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import { classes } from 'istanbul-lib-coverage';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Header = () => {
    const classes = useStyles();
    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad=(autoC) => setAutocomplete(autoC);
    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
    }

    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Link to="/">
                <Typography variant = 'h5' className = {classes.title}>
                    MESA
                </Typography>
                </Link>
                                    
                <Link to= "/Favorites"> {/* Define the URL for the new page */}
                        <button className={classes.button}>Meus Lugares Favoritos</button>
                    </Link>

                    {/* Your Autocomplete component and search input can go here */}
                <Box display="flex">
                    <Typography variant= 'h6' className = {classes.title}>
                        Descubra onde você se sentará
                    </Typography>

                    {/* <Autocomplete onLoad={} onPlaceChanged={} > */}

                        <div className = {classes.search}>
                            <div className = {classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." classes ={{ root: classes.inputRoot, input: classes.inputInput}}/>
                        </div> 
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
