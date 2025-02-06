import { createTheme } from "@mui/material/styles";

const baseLight = {
  palette: {
    mode: "light",
    primary: { main: "#666" },
    background: {
      default: "#ddd",
      paper: "#fff"
    },
    snippet: { background: "#fff", text: "#333" },
    table: {
      background: "#f0f0f0",
      text: "#000",
      border: "#999",
      oddRow: "#e6e6e6",
      evenRow: "#f8f8f8"
    },
    popupBackground: "#fff",
    popupText: "#000"
  }
};

const baseDark = {
  palette: {
    mode: "dark",
    primary: { main: "#aaa" },
    background: {
      default: "#333",
      paper: "#222"
    },
    snippet: { background: "#000", text: "#eee" },
    table: {
      background: "#555",
      text: "#fff",
      border: "#333",
      oddRow: "#444",
      evenRow: "#666"
    },
    popupBackground: "#222",
    popupText: "#fff"
  }
};

export const lightTheme = createTheme(baseLight);
export const darkTheme = createTheme(baseDark);
