import { Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
/**
 *
 * @returns JSX for 404 page
 */
const NotMatch = () => {
  return (
    <Container
      sx={{
        marginBlock: 25,
        textAlign: "center",
      }}>
      <Grid container>
        <Grid xs={12} item>
          <h2>Nothing to see here!</h2>
          <p>
            <Link to="/">Go to the home page</Link>
          </p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotMatch;
