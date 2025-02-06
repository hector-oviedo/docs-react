import { Box, Typography, Switch } from "@mui/material";

export const SettingsPanel = ({ darkMode, onToggleDarkMode }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="h6" sx={{ mb: 1 }}>
      Settings
    </Typography>
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Typography>Dark Mode</Typography>
      <Switch checked={darkMode} onChange={onToggleDarkMode} />
    </Box>
  </Box>
);
