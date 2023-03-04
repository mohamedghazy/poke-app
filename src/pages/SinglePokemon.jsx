import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Tab,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemon } from "../services/getAllPokemon";
import * as styles from "./singlePokemon.styles";
import * as cardStyle from "../components/pokeCard/pokeCard.styles";
const SinglePokemon = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pokemonData, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    setLoading(true);
    getPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        setPokemon(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <Container sx={{ marginTop: 25 }}>
      <Grid container>
        <Grid xs={12} item>
          <Button onClick={() => navigate("/")} sx={styles.backBtn}>
            Back
          </Button>
          <Paper>
            <Box sx={styles.pokemonHeader}>
              <Box sx={styles.imageWarpper}>
                <img
                  src={pokemonData?.sprites?.front_default}
                  alt="poke Image "
                  width="100%"
                  height="100%"
                />
              </Box>
              <Box>
                <Typography variant="h3" sx={{ marginBlock: "40px" }}>
                  {pokemonData?.name}
                </Typography>
                <Box sx={cardStyle.typeWrapper}>
                  {pokemonData?.types?.map((type) => {
                    return (
                      <Typography
                        variant="span"
                        sx={cardStyle.type(type?.type?.name)}>
                        {type?.type?.name}
                      </Typography>
                    );
                  })}
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example">
                    <Tab label="STATA" value="1" />
                    <Tab label="MOVES" value="2" />
                    <Tab label="ABILITIES" value="3" />
                  </TabList>
                </Box>
                {/* Stats */}
                <TabPanel value="1">
                  <Box sx={styles.statWapper}>
                    <Box>
                      {pokemonData?.stats?.map((stat) => (
                        <Typography
                          style={styles.paragraph}
                          key={stat?.stat?.name}>
                          {stat?.stat?.name}
                        </Typography>
                      ))}
                    </Box>
                    <Divider sx={styles.divider} />
                    <Box>
                      {pokemonData?.stats?.map((stat) => (
                        <Typography
                          style={styles.paragraph}
                          key={stat?.stat?.name}>
                          {stat?.base_stat}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </TabPanel>
                {/* Moves */}
                <TabPanel value="2">
                  <Box sx={styles.statWapper}>
                    <Box>
                      {pokemonData?.moves?.map((move) => (
                        <Typography
                          style={styles.paragraph}
                          key={move?.move?.name}>
                          {move?.move?.name}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </TabPanel>
                {/* Abilities */}
                <TabPanel value="3">
                  <Box sx={styles.statWapper}>
                    <Box>
                      {pokemonData?.abilities?.map((ability) => (
                        <Typography
                          style={styles.paragraph}
                          key={ability?.ability?.name}>
                          {ability?.ability?.name}
                        </Typography>
                      ))}
                    </Box>
                    <Divider sx={styles.divider} />
                    <Box>
                      {pokemonData?.abilities?.map((ability) => (
                        <Typography
                          style={styles.paragraph}
                          key={ability?.ability?.name}>
                          {ability?.slot}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </TabPanel>
              </TabContext>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SinglePokemon;
