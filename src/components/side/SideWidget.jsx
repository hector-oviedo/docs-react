import { useState } from "react";
import { Drawer, IconButton, Box } from "@mui/material";
import { FaCog } from "react-icons/fa";
import { SettingsPanel } from "./SettingsPanel";
import { MenuPanel } from "./MenuPanel";

export const SideWidget = ({ darkMode, onToggleDarkMode }) => {
  const drawerWidth = 240;
  const [open, setOpen] = useState(false);

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? drawerWidth : 60,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: open ? drawerWidth : 60,
            transition: 'width 0.3s ease',
            overflowX: 'hidden',
        }}}>
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          margin: 1,
          borderRadius: '50%',
          alignSelf: 'flex-end',
          }}>
        <FaCog size={24}/>
      </IconButton>

      {/* Settings */}
      {open && (
        <Box sx={{ px: 2, pb: 2 }}>
          <SettingsPanel darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />
        </Box>
      )}

      {/* Menu */}
      {open && (
        <Box sx={{ px: 0, pb: 0 }}>
          <MenuPanel />
        </Box>
      )}
    </Drawer>
  );
};
