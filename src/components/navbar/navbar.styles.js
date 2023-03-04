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
