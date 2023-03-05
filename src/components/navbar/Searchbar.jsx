import {
  Box,
  Grid,
  Input,
  InputAdornment,
  Typography,
  Zoom,
} from "@mui/material";
import Search from "../../assets/search.png";
import React, { useEffect, useState } from "react";
import * as styles from "./navbar.styles";
import useDebounce from "../hooks/useDebunce";
import { getPokemon } from "../../services/getAllPokemon";
import Loader from "../uiKits/Loader";
import { useNavigate } from "react-router-dom";
/**
 *
 * @returns React Element - Saerch bar and search results
 */
const Searchbar = () => {
  const [keyword, setKeyword] = useState();
  const [pokemonData, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [opened, setOpened] = useState(false);
  const debounceValue = useDebounce(keyword, 900);
  const navigate = useNavigate();

  useEffect(() => {
    const cleanKeaword = keyword?.trim();
    if (cleanKeaword?.length > 0) {
      setLoading(true);
      getPokemon(`https://pokeapi.co/api/v2/pokemon/${cleanKeaword}`)
        .then((res) => {
          setPokemon(res);
        })
        .catch((err) => {
          if (err?.response?.status === 404) {
            setKeyword("");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setKeyword("");
      setLoading(false);
    }
  }, [debounceValue]);
  return (
    <div>
      <Input
        sx={styles.input}
        placeholder="search..."
        id="search"
        type="text"
        startAdornment={
          <InputAdornment position="start">
            <img src={Search} alt="search icon" width="20px" height="20px" />
          </InputAdornment>
        }
        label="search..."
        onChange={(e) => {
          setKeyword(e.target.value);
          setLoading(true);
          setOpened(true);
        }}
        onBlur={() => setTimeout(() => setOpened(false), 200)}
        onFocus={() => setOpened(true)}
      />

      {/* search Results */}
      <Zoom in={opened} direction="up">
        <Box sx={styles.resultWrapper}>
          <Box>
            {loading ? (
              <Loader
                customSize={40}
                primaryColor="#EF5350"
                secondaryColor="#EF5350"
              />
            ) : keyword !== "" ? (
              <Grid container rowSpacing={3} gap={2}>
                <Grid
                  xs={12}
                  onClick={() => {
                    navigate(`/pokemon/${pokemonData?.id}/`);
                    setOpened(false);
                  }}
                  sx={styles.resultElement}>
                  <Box sx={{ width: "50px", height: "50px" }}>
                    <img
                      src={pokemonData?.sprites?.front_default}
                      alt="pokemon image"
                      style={{ background: "#f5f4f4" }}
                      width="100%"
                      height="100%"
                    />
                  </Box>
                  <Typography variant="h4">{pokemonData?.name}</Typography>
                </Grid>
              </Grid>
            ) : (
              <Grid key={1} xs={12}>
                <Typography variant="h6" sx={styles.noResult}>
                  Sorry , there is no results
                </Typography>{" "}
              </Grid>
            )}
          </Box>
        </Box>
      </Zoom>
    </div>
  );
};

export default Searchbar;
