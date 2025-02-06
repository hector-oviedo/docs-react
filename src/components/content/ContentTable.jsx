import { Table, TableHead, TableRow, TableBody, TableCell, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const ContentTable = ({ headers, rows }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: 2,
        overflowX: "auto",
        border: `1px solid ${theme.palette.table.border}`,
        borderRadius: 0
      }}
    >
      <Table sx={{ borderCollapse: "collapse" }}>
        <TableHead
          sx={{
            bgcolor: theme.palette.table.border,
            "& th": {
              color: theme.palette.table.text,
              fontWeight: "bold",
              border: `1px solid ${theme.palette.table.border}`
            }
          }}
        >
          <TableRow>
            {headers.map((h, idx) => (
              <TableCell key={idx} align="center">
                {h}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rIdx) => (
            <TableRow key={rIdx}>
              {row.map((cell, cIdx) => (
                <TableCell
                  key={cIdx}
                  align="center"
                  sx={{
                    bgcolor: rIdx % 2 === 0 ? theme.palette.table.evenRow : theme.palette.table.oddRow,
                    color: theme.palette.table.text,
                    border: `1px solid ${theme.palette.table.border}`
                  }}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
