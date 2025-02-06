import { Typography, Paper, IconButton } from "@mui/material";
import { FaCopy } from "react-icons/fa";
import { useTheme } from "@mui/material/styles";

export const ContentSnippet = ({ content }) => {
  const theme = useTheme();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        mt: 2,
        position: "relative",
        overflowX: "auto",
        bgcolor: theme.palette.snippet.background,
        color: theme.palette.snippet.text,
        fontFamily: "monospace",
        borderRadius: 0,
        border: `1px solid ${theme.palette.snippet.text}`
      }}
    >
      <Typography
        variant="body2"
        sx={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
      >
        {content}
      </Typography>
      <IconButton
        onClick={copyToClipboard}
        sx={{ position: "absolute", top: 5, right: 5 }}
      >
        <FaCopy size={16} />
      </IconButton>
    </Paper>
  );
};
