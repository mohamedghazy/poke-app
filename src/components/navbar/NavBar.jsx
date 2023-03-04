import { Box, Grid, Input, InputAdornment } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import pokelogo from "../../assets/pokelogo.png";
// import Search from "../../assets/search.png";
import * as styles from "./navbar.styles";
import Searchbar from "./Searchbar";

/**
 *
 * @returns JSX Navigation bar
 */
const Navbar = () => {
  return (
    <Box sx={styles.container}>
      <Grid container>
        <Grid xs={4} sx={styles.logo}>
          <Link to="/">
            <img src={pokelogo} alt="poke logo" width="100px" height="50px" />
          </Link>
        </Grid>
        <Grid xs={8} sx={styles.inputContainer}>
          <Searchbar />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
