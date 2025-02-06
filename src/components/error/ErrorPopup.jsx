import { Modal, Paper, Typography, Button } from "@mui/material";

export const ErrorPopup = ({ error, onClose }) => {
  const isOpen = Boolean(error);

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Paper
        sx={{
          maxWidth: 400,
          mx: "auto",
          mt: 10,
          p: 3,
          textAlign: "center",
          backgroundColor: (theme) => theme.palette.popupBackground,
          color: (theme) => theme.palette.popupText
        }}
      >
        <Typography variant="h6" color="error">
          Error Loading
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {error}
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }} onClick={onClose}>
          Close
        </Button>
      </Paper>
    </Modal>
  );
};
