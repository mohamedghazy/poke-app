import { Box, Card, Typography } from "@mui/material";
import React from "react";
import * as styles from "./pokeCard.styles";

/**
 *
 * @param {object} param0 pokemon - pokemon data for the card
 * @returns JSX
 */
const PokeCard = ({ pokemon }) => {
  return (
    <Card sx={styles.card}>
      <Box sx={styles.pokeImag}>
        <img
          src={pokemon?.sprites?.front_default}
          alt="poke Image "
          width="100%"
          height="100%"
        />
      </Box>
      <Box sx={styles.contentWraper}>
        <Typography variant="h3" sx={{ marginBlock: "40px" }}>
          {pokemon?.name}
        </Typography>
        <Typography variant="p" sx={{ marginBottom: "20px" }}>
          Order: # {pokemon?.order}
        </Typography>
        <Box sx={styles.typeWrapper}>
          {pokemon?.types?.map((type) => {
            return (
              <Typography variant="span" sx={styles.type(type?.type?.name)}>
                {type?.type?.name}
              </Typography>
            );
          })}
        </Box>
      </Box>
    </Card>
  );
};

export default PokeCard;
