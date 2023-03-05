export const container = {
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  zIndex: 99,
  width: "100%",
  height: "100px",
  // overflow: "hidden",
  transition: "ease-in-out .3s",
  background: "#EF5350",
};
export const logo = {
  userSelect: "none ",
  height: 100,
  display: "flex",
  alignItems: "center",
  zIndex: 999,
  justifyContent: "center",
};

export const inputContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
export const input = {
  background: "#ffffff5e",
  borderRadius: "10px",
  padding: "8px",
  "&:hover": {
    "&::before": {
      borderBottom: "none",
    },
  },
  "&::before": {
    borderBottom: "none",
  },
  "&::after": {
    borderBottom: "none",
  },
};

export const resultWrapper = {
  backgroundColor: "#fff",
  color: "#000",
  zIndex: 9999,
  paddingBlock: "30px",
  position: "absolute",
  boxShadow: "5px 5px 5px #dfe6e9",
  width: "250px",
  height: "max-content",
  borderEndRadius: "10px",
};
export const resultElement = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    background: "#f5f4f4",
  },
};

export const noResult = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  opacity: "0.5",
};
