import { Box, Container, Typography } from "@mui/material";
import React from "react";
import boxIcon from "../../assets/box.png";

/**
 *
 * @returns JSX for condiont if there is no Pokemon
 */
const NoPkes = () => {
  return (
    <Container sx={{ marginTop: 25 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <Box sx={{ width: "250px", height: "250px" }}>
          <img src={boxIcon} alt="empty content" width="100%" height="100%" />
        </Box>
        <Typography> Sorry There is no Pokemons yet </Typography>
      </Box>
    </Container>
  );
};

export default NoPkes;
