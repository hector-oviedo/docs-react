import { Box } from "@mui/material";
import { SideWidget } from "./components/side/SideWidget";
import { ContentPage } from "./components/content/ContentPage";

export const App = ({ darkMode, onToggleDarkMode }) => (
  <Box sx={{ display: "flex", minHeight: "100vh" }}>
    <SideWidget darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />
    <ContentPage />
  </Box>
);
