import { Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokeCard from "../components/pokeCard/PokeCard";
import Loader from "../components/uiKits/Loader";
import NoPkes from "../components/uiKits/NoPkes";
import { gatAllPokemon, getPokemon } from "../services/getAllPokemon";

/**
 *
 * @returns Jsx a list of Pokemons card
 */
const PokeList = () => {
  const [pokesData, setPoke] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  async function fetchData() {
    setLoading(true);
    let allPoke = await gatAllPokemon(offset).then((data) => data?.results);
    let pokemons = await Promise.all(
      allPoke.map(async (poke) => {
        let results = await getPokemon(poke?.url);
        return results;
      })
    );
    setLoading(false);
    setPoke(pokemons);
  }
  useEffect(() => {
    fetchData();
  }, [offset]);

  const handleOffset = (status) => {
    if (status === "next") {
      setOffset((prev) => prev + 6);
    } else {
      setOffset((prev) => prev - 6);
    }
  };

  return (
    <Container sx={{ paddingBlock: 25 }}>
      <Grid container spacing={8}>
        {loading ? (
          <Grid
            xs={12}
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Loader
              primaryColor="#EF5350"
              customSize={100}
              secondaryColor="#EF5350"
            />
          </Grid>
        ) : (
          pokesData?.map((poke) => (
            <Grid xs={12} md={6} lg={4} key={poke?.id} item>
              <Link
                to={`pokemon/${poke?.id}`}
                style={{ textDecoration: "none" }}>
                <PokeCard pokemon={poke} />
              </Link>
            </Grid>
          ))
        )}
        {pokesData?.length !== 0 && (
          <Grid
            xs={12}
            item
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}>
            {offset > 0 && (
              <Button
                sx={{
                  background: "gainsboro",
                  color: "black",
                  "&:hover": {
                    background: "gainsboro",
                  },
                }}
                onClick={() => handleOffset("previous")}>
                Previous
              </Button>
            )}
            <Button
              sx={{
                background: "coral",
                color: "white",
                "&:hover": {
                  background: "coral",
                },
              }}
              onClick={() => handleOffset("next")}>
              Next
            </Button>
          </Grid>
        )}
        {pokesData?.length === 0 && !loading && <NoPkes />}
      </Grid>
    </Container>
  );
};

export default PokeList;
