import { Box, Typography } from '@mui/material';
import { SiReadthedocs } from "react-icons/si";

export const ContentTemplate = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" align="center" color="primary.main" sx={{ m:5 }} gutterBottom>
        Welcome!
      </Typography>

      <SiReadthedocs size="3em" color="primary.main" sx={{ color: 'primary.main' }} />
      
      <Typography variant="body2" align="center" color="primary.main" sx={{ m:5 }} >
        Welcome to Docs!
      </Typography>
    </Box>
  );
};