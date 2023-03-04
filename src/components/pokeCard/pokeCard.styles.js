export const pokeType = {
  grass: "#82e282",
  poison: "#46cb90",
  fire: "#fe5a50",
  flying: "#b6b6b6",
  water: "#1976d2",
  bug: "#d32f2fab",
  normal: "#d3d3d3",
  default: "#d3d3d3",
};
export const card = {
  boxShadow: "5px 5px 5px #dfe6e9",
  borderRadius: "10px",
  border: "0.5px solid rgb(18 17 17 / 20%)",
  cursor: "pointer",
  transition: "all 0.3s 0s ease",
};
export const pokeImag = {
  width: "100%",
  backgroundColor: "#f5f4f4",
};
export const contentWraper = {
  display: "flex",
  flexDirection: "column",
  padding: "10px 20px",
};

export const typeWrapper = {
  display: "flex",
  maxWidth: "max-content",
  justifyContent: "space-between",
  alignItems: " center",
  gap: "25px",
};
export const type = (type) => {
  return {
    borderRadius: "25px",
    backgroundColor: pokeType[type] || pokeType.default,
    borderRadius: "20px",
    padding: "10px",
    fontSize: "17px",
    color: "white",
  };
};
